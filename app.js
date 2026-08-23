const CONFIG = {
  launchDate: new Date(2026, 7, 23),
  storagePrefix: "eigen:v2",
  maxCanonicalAnswerLength: 13,
};

function getReleaseIndex(date = new Date()) {
  const start = new Date(CONFIG.launchDate);
  start.setHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setHours(0, 0, 0, 0);
  let index = 0;
  for (const day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
    if (day > start && (day.getDay() === 3 || day.getDay() === 5)) index += 1;
  }
  return Math.max(0, index);
}

const releaseIndex = getReleaseIndex();
const releaseNumber = releaseIndex + 1;
const puzzles = validatePuzzles(PUZZLES);
const puzzle = puzzles[releaseIndex % puzzles.length];
const storageKey = `${CONFIG.storagePrefix}:release:${releaseNumber}`;
const statsKey = `${CONFIG.storagePrefix}:stats`;

const defaultState = {
  solved: Array(puzzle.clues.length).fill(false),
  revealedHints: Array(puzzle.clues.length).fill(false),
  completed: false,
  attempts: 0,
};
let state = loadState();
const $ = (id) => document.getElementById(id);

function validatePuzzles(rawPuzzles) {
  const warnings = [];
  const clean = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "");
  const ids = new Set();
  rawPuzzles.forEach((p) => {
    if (ids.has(p.number)) warnings.push(`Duplicate puzzle number ${p.number}.`);
    ids.add(p.number);
    if (!/^[A-Z]+$/.test(p.finalAnswer)) warnings.push(`#${p.number}: finalAnswer should be uppercase A-Z only.`);
    if (p.finalAnswer.length !== p.clues.length) warnings.push(`#${p.number}: final word length does not match clue count.`);
    p.clues.forEach((c, i) => {
      const expected = p.finalAnswer[i]?.toLowerCase();
      const canonical = clean(c.answer);
      const actual = canonical[0];
      if (!canonical) warnings.push(`#${p.number} clue ${i + 1}: missing answer.`);
      if (expected && actual !== expected) warnings.push(`#${p.number} clue ${i + 1}: answer "${c.answer}" starts with ${actual}, expected ${expected}.`);
      if (canonical.length > CONFIG.maxCanonicalAnswerLength) warnings.push(`#${p.number} clue ${i + 1}: canonical answer "${c.answer}" is probably too long.`);
      if (!Array.isArray(c.aliases) || !c.aliases.length) warnings.push(`#${p.number} clue ${i + 1}: add aliases.`);
    });
  });
  if (warnings.length) console.warn(`Eigen puzzle-bank warnings:\n${warnings.join("\n")}`);
  return rawPuzzles;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && saved.solved?.length === puzzle.clues.length) return { ...defaultState, ...saved };
  } catch {}
  return structuredClone(defaultState);
}
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function loadStats() {
  try { return { solvedCount: 0, streak: 0, lastSolvedRelease: null, ...JSON.parse(localStorage.getItem(statsKey)) }; }
  catch { return { solvedCount: 0, streak: 0, lastSolvedRelease: null }; }
}
function saveStats(stats) { localStorage.setItem(statsKey, JSON.stringify(stats)); }
function markCompleted() {
  if (state.completed) return;
  state.completed = true;
  const stats = loadStats();
  if (stats.lastSolvedRelease !== releaseNumber) {
    stats.streak = stats.lastSolvedRelease === releaseNumber - 1 ? stats.streak + 1 : 1;
    stats.solvedCount += 1;
    stats.lastSolvedRelease = releaseNumber;
    saveStats(stats);
  }
}
function normalize(s) { return String(s).toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "").trim(); }
function distance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}
function matches(input, clue) {
  const n = normalize(input);
  if (!n) return false;
  return [clue.answer, ...clue.aliases].some((a) => {
    const m = normalize(a);
    if (n === m) return true;
    if (m.length >= 8 && Math.abs(n.length - m.length) <= 2 && distance(n, m) <= 2) return true;
    return false;
  });
}
function setStatus(msg, type = "") { const el = $("status"); el.textContent = msg; el.className = `status ${type}`; }
function renderStats() { const stats = loadStats(); $("streak").textContent = stats.streak; $("solved-count").textContent = stats.solvedCount; }
function renderLetters() {
  const slots = $("letter-slots");
  slots.innerHTML = "";
  puzzle.finalAnswer.split("").forEach((letter, i) => {
    const div = document.createElement("div");
    div.className = `slot ${state.solved[i] || state.completed ? "known" : ""}`;
    div.textContent = state.solved[i] || state.completed ? letter : "?";
    slots.appendChild(div);
  });
}
function renderClues() {
  const wrap = $("clues");
  wrap.innerHTML = "";
  puzzle.clues.forEach((clue, i) => {
    const solved = state.solved[i] || state.completed;
    const card = document.createElement("article");
    card.className = `card ${solved ? "solved" : ""}`;
    card.innerHTML = `
      <div class="card-head"><span class="num">Clue ${i + 1}</span><span class="letter-badge ${solved ? "revealed" : ""}">${solved ? puzzle.finalAnswer[i] : "?"}</span></div>
      <div class="equation">\\[${clue.equation}\\]</div>
      <div class="clue-row">
        <input id="guess-${i}" placeholder="Answer this equation clue" autocomplete="off" spellcheck="false" ${solved ? "disabled" : ""}/>
        <button data-check="${i}" ${solved ? "disabled" : ""}>${solved ? "Solved" : "Check"}</button>
      </div>
      ${state.revealedHints[i] || solved ? `<p class="hint"><strong>Hint:</strong> ${clue.hint}</p>` : ""}
      ${solved ? `<p class="explanation"><strong>${clue.answer}</strong>: ${clue.explanation}</p>` : ""}`;
    wrap.appendChild(card);
  });
  document.querySelectorAll("button[data-check]").forEach((btn) => btn.addEventListener("click", () => checkClue(Number(btn.dataset.check))));
  puzzle.clues.forEach((_, i) => {
    const input = $(`guess-${i}`);
    if (input) input.addEventListener("keydown", (e) => { if (e.key === "Enter") checkClue(i); });
  });
  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([wrap]);
}
function checkClue(i) {
  const input = $(`guess-${i}`);
  if (!input || state.solved[i]) return;
  if (!input.value.trim()) return setStatus("Type an answer for that equation first.", "warn");
  if (matches(input.value, puzzle.clues[i])) {
    state.solved[i] = true;
    setStatus(`Correct — that gives ${puzzle.finalAnswer[i]}.`, "good");
    if (state.solved.every(Boolean)) setStatus("All clues solved. Submit the final word.", "good");
  } else {
    state.revealedHints[i] = true;
    setStatus("Not quite. I revealed a hint for that clue.", "warn");
  }
  saveState();
  renderAll();
}
function submitFinal() {
  state.attempts += 1;
  const guess = normalize($("final-guess").value);
  if (!guess) return setStatus("Type the final hidden word first.", "warn");
  if (guess === normalize(puzzle.finalAnswer)) {
    state.solved = state.solved.map(() => true);
    markCompleted();
    saveState();
    setStatus(`Solved: ${puzzle.finalAnswer}.`, "good");
    renderAll();
  } else {
    saveState();
    setStatus("Not the final word yet. Solve more equation clues.", "bad");
  }
}
function revealHint() {
  const idx = state.revealedHints.findIndex((v, i) => !v && !state.solved[i]);
  if (idx === -1) return setStatus("No more hidden hints.", "warn");
  state.revealedHints[idx] = true;
  saveState();
  setStatus(`Hint revealed for clue ${idx + 1}.`, "warn");
  renderAll();
}
function share() {
  const solved = state.solved.filter(Boolean).length;
  const marks = state.solved.map((v) => (v ? "◆" : "◇")).join("");
  const text = `Eigen #${releaseNumber}\n${marks} ${solved}/${puzzle.clues.length}\n${state.completed ? "Solved" : "In progress"}`;
  navigator.clipboard?.writeText(text).then(() => setStatus("Copied result.", "good")).catch(() => setStatus(text, "warn"));
}
function resetToday() {
  state = structuredClone(defaultState);
  localStorage.removeItem(storageKey);
  $("final-guess").value = "";
  setStatus("Today's puzzle was reset.", "warn");
  renderAll();
}
function renderAll() {
  $("puzzle-meta").textContent = `Puzzle #${releaseNumber} · ${puzzle.theme} · ${puzzle.difficulty} · ${puzzle.finalAnswer.length} letters · New puzzles Wednesday & Friday`;
  renderStats();
  renderLetters();
  renderClues();
}

$("submit-final").addEventListener("click", submitFinal);
$("final-guess").addEventListener("keydown", (e) => { if (e.key === "Enter") submitFinal(); });
$("hint-one").addEventListener("click", revealHint);
$("share").addEventListener("click", share);
$("reset-today").addEventListener("click", resetToday);
$("open-help").addEventListener("click", () => $("help-dialog").showModal());

renderAll();
window.addEventListener("load", () => { if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise(); });
