const PUZZLES = [
  {
    number: 1,
    slug: "field",
    finalAnswer: "FIELD",
    theme: "Classical mechanics warmup",
    difficulty: "Intro",
    clues: [
      { equation: String.raw`F = ma`, answer: "force", aliases: ["force", "net force"], hint: "The quantity that causes acceleration.", explanation: "Force is related to acceleration by Newton's second law." },
      { equation: String.raw`I = \int r^2\,dm`, answer: "inertia", aliases: ["inertia", "moment of inertia"], hint: "Resistance to changes in rotational motion.", explanation: "Moment of inertia is the rotational analogue of mass." },
      { equation: String.raw`E = hf`, answer: "energy", aliases: ["energy", "photon energy"], hint: "For a photon, this is proportional to frequency.", explanation: "Planck's relation gives photon energy as E = hf." },
      { equation: String.raw`L = T - V`, answer: "lagrangian", aliases: ["lagrangian", "the lagrangian"], hint: "Kinetic energy minus potential energy.", explanation: "The Lagrangian is often L = T - V in classical mechanics." },
      { equation: String.raw`\rho = \frac{m}{V}`, answer: "density", aliases: ["density", "mass density"], hint: "Mass per unit volume.", explanation: "Density is mass divided by volume." }
    ]
  },
  {
    number: 2,
    slug: "quantum",
    finalAnswer: "QUANTUM",
    theme: "Quantum fundamentals",
    difficulty: "Intro",
    clues: [
      { equation: String.raw`q = ne`, answer: "quantization", aliases: ["quantization", "charge quantization", "quantized charge"], hint: "Charge appears in discrete chunks.", explanation: "Quantization means a quantity appears in discrete allowed values." },
      { equation: String.raw`\Delta x\,\Delta p \geq \frac{\hbar}{2}`, answer: "uncertainty", aliases: ["uncertainty", "uncertainty principle", "heisenberg uncertainty"], hint: "A limit on knowing conjugate quantities at once.", explanation: "Uncertainty relates the spreads of position and momentum measurements." },
      { equation: String.raw`S = \int L\,dt`, answer: "action", aliases: ["action", "the action"], hint: "The physical path makes this stationary.", explanation: "The action is the time integral of the Lagrangian." },
      { equation: String.raw`N = mg\cos\theta`, answer: "normal", aliases: ["normal", "normal force"], hint: "A contact force perpendicular to a surface.", explanation: "The normal force is exerted perpendicular to a contact surface." },
      { equation: String.raw`\tau = \mathbf r \times \mathbf F`, answer: "torque", aliases: ["torque", "moment"], hint: "The rotational analogue of force.", explanation: "Torque measures how strongly a force tends to rotate an object." },
      { equation: String.raw`U^\dagger U = I`, answer: "unitarity", aliases: ["unitarity", "unitary"], hint: "This preserves quantum probabilities.", explanation: "Unitarity preserves inner products and total probability." },
      { equation: String.raw`p = mv`, answer: "momentum", aliases: ["momentum", "linear momentum"], hint: "Mass times velocity in the nonrelativistic limit.", explanation: "Momentum is conserved in isolated systems." }
    ]
  },
  {
    number: 3,
    slug: "gauge",
    finalAnswer: "GAUGE",
    theme: "Fields and symmetry",
    difficulty: "Medium",
    clues: [
      { equation: String.raw`\nabla \cdot \mathbf E = \frac{\rho}{\epsilon_0}`, answer: "gauss", aliases: ["gauss", "gauss law", "gauss's law"], hint: "One of Maxwell's equations.", explanation: "Gauss's law relates electric flux to charge density." },
      { equation: String.raw`S = \int L\,dt`, answer: "action", aliases: ["action", "the action"], hint: "The central quantity in variational mechanics.", explanation: "The action is extremized by physical trajectories." },
      { equation: String.raw`U^\dagger U = I`, answer: "unitarity", aliases: ["unitarity", "unitary"], hint: "Required for probability conservation.", explanation: "Unitary time evolution preserves state norms." },
      { equation: String.raw`\frac{D^2 x^\mu}{d\lambda^2}=0`, answer: "geodesic", aliases: ["geodesic", "geodesics"], hint: "The straightest possible path in curved spacetime.", explanation: "A geodesic generalizes a straight line to curved geometry." },
      { equation: String.raw`E^2=p^2c^2+m^2c^4`, answer: "energy", aliases: ["energy", "relativistic energy"], hint: "The quantity on the left side.", explanation: "This is the relativistic energy-momentum relation." }
    ]
  },
  {
    number: 4,
    slug: "higgs",
    finalAnswer: "HIGGS",
    theme: "Particle physics",
    difficulty: "Medium",
    clues: [
      { equation: String.raw`H = T + V`, answer: "hamiltonian", aliases: ["hamiltonian", "the hamiltonian"], hint: "Often the total energy operator or function.", explanation: "The Hamiltonian often represents total energy and generates time evolution." },
      { equation: String.raw`I = \int r^2\,dm`, answer: "inertia", aliases: ["inertia", "moment of inertia"], hint: "Rotational resistance to acceleration.", explanation: "Moment of inertia measures resistance to angular acceleration." },
      { equation: String.raw`D_\mu = \partial_\mu + igA_\mu`, answer: "gauge", aliases: ["gauge", "gauge field", "covariant derivative"], hint: "A symmetry structure behind the Standard Model interactions.", explanation: "Gauge fields enter the covariant derivative." },
      { equation: String.raw`\Phi_G = \oint \mathbf g\cdot d\mathbf A`, answer: "gravity", aliases: ["gravity", "gravitational flux"], hint: "The interaction sourced by mass-energy.", explanation: "Gravity is the long-range interaction associated with mass-energy." },
      { equation: String.raw`S^2 = s(s+1)\hbar^2`, answer: "spin", aliases: ["spin", "angular momentum"], hint: "Intrinsic angular momentum.", explanation: "Spin is intrinsic angular momentum with quantum number s." }
    ]
  },
  {
    number: 5,
    slug: "photon",
    finalAnswer: "PHOTON",
    theme: "Waves and quanta",
    difficulty: "Intro",
    clues: [
      { equation: String.raw`P = \frac{F}{A}`, answer: "pressure", aliases: ["pressure"], hint: "Force per unit area.", explanation: "Pressure is force divided by area." },
      { equation: String.raw`H = T+V`, answer: "hamiltonian", aliases: ["hamiltonian", "the hamiltonian"], hint: "The energy function in Hamiltonian mechanics.", explanation: "The Hamiltonian often represents total energy." },
      { equation: String.raw`V = IR`, answer: "ohm", aliases: ["ohm", "ohm law", "ohm's law"], hint: "The circuit law relating voltage, current, and resistance.", explanation: "Ohm's law is V = IR." },
      { equation: String.raw`\tau = \mathbf r \times \mathbf F`, answer: "torque", aliases: ["torque", "moment"], hint: "Rotational effect of a force.", explanation: "Torque is r cross F." },
      { equation: String.raw`x(t)=A\cos(\omega t+\phi)`, answer: "oscillator", aliases: ["oscillator", "simple harmonic oscillator", "harmonic oscillator"], hint: "A system with sinusoidal motion.", explanation: "A harmonic oscillator has sinusoidal motion." },
      { equation: String.raw`N = mg\cos\theta`, answer: "normal", aliases: ["normal", "normal force"], hint: "Surface support force.", explanation: "The normal force is perpendicular to the surface." }
    ]
  },
  {
    number: 6,
    slug: "tensor",
    finalAnswer: "TENSOR",
    theme: "Math methods",
    difficulty: "Medium",
    clues: [
      { equation: String.raw`\tau = \mathbf r \times \mathbf F`, answer: "torque", aliases: ["torque", "moment"], hint: "Rotational analogue of force.", explanation: "Torque measures rotational tendency." },
      { equation: String.raw`S = k_B\ln\Omega`, answer: "entropy", aliases: ["entropy"], hint: "Counts microscopic multiplicity logarithmically.", explanation: "Boltzmann's entropy formula is S = k_B ln Ω." },
      { equation: String.raw`N = mg\cos\theta`, answer: "normal", aliases: ["normal", "normal force"], hint: "A perpendicular contact force.", explanation: "The normal force is a contact force perpendicular to a surface." },
      { equation: String.raw`S^2=s(s+1)\hbar^2`, answer: "spin", aliases: ["spin"], hint: "Intrinsic angular momentum.", explanation: "Spin is a quantum form of angular momentum." },
      { equation: String.raw`\hat O\lvert\psi\rangle`, answer: "operator", aliases: ["operator", "observable"], hint: "In quantum mechanics, this acts on states.", explanation: "Operators act on quantum states and can represent observables." },
      { equation: String.raw`R_{\mu\nu}-\frac12 Rg_{\mu\nu}=8\pi G T_{\mu\nu}`, answer: "relativity", aliases: ["relativity", "general relativity"], hint: "Einstein's theory of gravitation.", explanation: "General relativity relates spacetime curvature to stress-energy." }
    ]
  }
];
