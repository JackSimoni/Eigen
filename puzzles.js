const PUZZLES = [
  {
    number: 1, slug: "planet", finalAnswer: "PLANET",
    theme: "Gravitation, orbits, and approximation", difficulty: "Challenge",
    clues: [
      { equation: String.raw`T^2=\frac{4\pi^2}{GM}a^3`, answer: "period", aliases: ["period","orbital period","keplers third law","kepler's third law"], hint: "What physical quantity does T represent?", explanation: "T is the orbital period. Kepler's third law relates its square to the cube of the semi-major axis." },
      { equation: String.raw`f(x)\approx f(a)+f'(a)(x-a)`, answer: "linear approximation", aliases: ["linear approximation","linear","first-order", "first order","linearization","linearisation","first order approximation","first-order approximation","tangent line approximation"], hint: "This uses the tangent line near x = a.", explanation: "This is the first-order Taylor approximation, also called the linear approximation of f near a." },
      { equation: String.raw`\frac{dA}{dt}=\text{constant}`, answer: "areal velocity", aliases: ["areal velocity", "area law","constant area", "sweep", "sweeping", "constant area","constant areal velocity","keplers second law","kepler's second law","equal areas in equal times"], hint: "The derivative describes area swept out per unit time.", explanation: "Kepler's second law states that a planet's areal velocity is constant." },
      { equation: String.raw`\mathbf F_{12}=-\frac{Gm_1m_2}{r^2}\hat{\mathbf r}`, answer: "newtons law of gravitation", aliases: ["newtons law of gravitation","newton's law of gravitation","newtons law of universal gravitation","newton's law of universal gravitation","universal gravitation","gravitation"], hint: "Name the inverse-square force law shown here.", explanation: "Newton's law of universal gravitation gives the attractive force between two point masses." },
      { equation: String.raw`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1`, answer: "ellipse", aliases: ["ellipse","elliptical orbit","keplers first law","kepler's first law"], hint: "Identify the conic section.", explanation: "This is an ellipse. Kepler's first law says that planets follow elliptical orbits with the Sun at one focus." },
      { equation: String.raw`f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n`, answer: "taylor expansion", aliases: ["taylor expansion", "taylor", "power series","taylor series","taylors expansion","taylor's expansion","power series expansion"], hint: "Name this representation of a function using its derivatives at a point.", explanation: "This is the Taylor expansion of f about x = a." }
    ]
  },
  {
    number: 2, slug: "charge", finalAnswer: "CHARGE",
    theme: "Mechanics-to-E&M bridge", difficulty: "Foundation",
    clues: [
      { equation: String.raw`I=\frac{\Delta Q}{\Delta t}`, answer: "current", aliases: ["current","electric current"], hint: "Charge flow per unit time.", explanation: "Current measures how quickly charge passes a point." },
      { equation: String.raw`\mathbf F_s=-k\mathbf x`, answer: "hooke", aliases: ["hooke","hookes law","hooke's law","spring force"], hint: "The ideal-spring force law.", explanation: "Hooke's law gives a restoring force proportional to displacement." },
      { equation: String.raw`\mathbf a=\frac{\mathbf F_{\rm net}}m`, answer: "acceleration", aliases: ["acceleration"], hint: "The rate of change of velocity.", explanation: "Acceleration is net force divided by mass." },
      { equation: String.raw`R=\frac VI`, answer: "resistance", aliases: ["resistance","electrical resistance"], hint: "Opposition to current flow.", explanation: "Resistance is voltage divided by current for an ohmic element." },
      { equation: String.raw`\mathbf F_g=m\mathbf g`, answer: "gravity", aliases: ["gravity","gravitational force","weight"], hint: "A familiar long-range interaction.", explanation: "Near Earth's surface, gravitational force is mg." },
      { equation: String.raw`E=K+U`, answer: "energy", aliases: ["energy","mechanical energy","total energy"], hint: "The sum of kinetic and potential terms.", explanation: "Mechanical energy is K + U." }
    ]
  },
  {
    number: 3, slug: "field", finalAnswer: "FIELD",
    theme: "Electric fields", difficulty: "Intro E&M",
    clues: [
      { equation: String.raw`\Phi_E=\int\mathbf E\cdot d\mathbf A`, answer: "flux", aliases: ["flux","electric flux"], hint: "How much field passes through a surface.", explanation: "Electric flux is the surface integral of E." },
      { equation: String.raw`I=\frac{dQ}{dt}`, answer: "intensity", aliases: ["intensity","current","electric current","current intensity"], hint: "A historical I-word for electric current.", explanation: "Current intensity is charge flow per unit time." },
      { equation: String.raw`\mathbf E=\frac{\mathbf F}{q}`, answer: "electric", aliases: ["electric","electric field","field"], hint: "Force per unit positive test charge.", explanation: "This equation defines the electric field." },
      { equation: String.raw`\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B)`, answer: "lorentz", aliases: ["lorentz","lorentz force","lorentz force law"], hint: "The force law for a charge in E and B fields.", explanation: "The Lorentz law combines electric and magnetic forces." },
      { equation: String.raw`\rho=\frac{dQ}{dV}`, answer: "density", aliases: ["density","charge density","volume charge density"], hint: "Charge per unit volume.", explanation: "Volume charge density is dQ/dV." }
    ]
  },
  {
    number: 4, slug: "voltage", finalAnswer: "VOLTAGE",
    theme: "Potential and voltage", difficulty: "Intro E&M",
    clues: [
      { equation: String.raw`V=\frac Uq`, answer: "voltage", aliases: ["voltage","electric potential","potential"], hint: "Potential energy per unit charge.", explanation: "Voltage is U/q." },
      { equation: String.raw`V=IR`, answer: "ohm", aliases: ["ohm","ohms law","ohm's law"], hint: "The law relating voltage, current, and resistance.", explanation: "Ohm's law is V = IR." },
      { equation: String.raw`\mathcal E=-\frac{d\Phi_B}{dt}`, answer: "lenz", aliases: ["lenz","lenz law","lenz's law"], hint: "The minus sign says the induced effect opposes the change.", explanation: "Lenz's law determines the direction of induced emf." },
      { equation: String.raw`T=2\pi\sqrt{\frac mk}`, answer: "time", aliases: ["time","period","oscillation period"], hint: "T is one full cycle's duration.", explanation: "T is the time for one oscillation." },
      { equation: String.raw`\mathbf a=\frac{\mathbf F}{m}`, answer: "acceleration", aliases: ["acceleration"], hint: "Force per unit mass.", explanation: "Acceleration is F/m." },
      { equation: String.raw`\mathbf g=-\frac{GM}{r^2}\hat{\mathbf r}`, answer: "gravity", aliases: ["gravity","gravitational field"], hint: "An inverse-square field analogous to a point charge's field.", explanation: "Gravity is a useful analogy for electrostatics." },
      { equation: String.raw`\mathcal E=\frac Wq`, answer: "emf", aliases: ["emf","electromotive force"], hint: "Energy supplied per unit charge by a source.", explanation: "Emf is work supplied per unit charge." }
    ]
  },
  {
    number: 5, slug: "circuit", finalAnswer: "CIRCUIT",
    theme: "DC circuits", difficulty: "Intro E&M",
    clues: [
      { equation: String.raw`C=\frac QV`, answer: "capacitance", aliases: ["capacitance"], hint: "Stored charge per unit voltage.", explanation: "Capacitance is Q/V." },
      { equation: String.raw`I=\frac{dQ}{dt}`, answer: "intensity", aliases: ["intensity","current","electric current","current intensity"], hint: "The I in the charge-flow equation.", explanation: "I denotes current intensity." },
      { equation: String.raw`R=\rho\frac LA`, answer: "resistance", aliases: ["resistance"], hint: "It rises with wire length and falls with area.", explanation: "A uniform wire has resistance rho L/A." },
      { equation: String.raw`Q=CV`, answer: "charge", aliases: ["charge","stored charge"], hint: "The quantity stored on capacitor plates.", explanation: "A capacitor stores charge Q = CV." },
      { equation: String.raw`\mathbf E=\frac Vd\hat{\mathbf n}`, answer: "uniform", aliases: ["uniform","uniform field","uniform electric field"], hint: "The ideal field between large parallel plates.", explanation: "Parallel plates produce an approximately uniform field away from edges." },
      { equation: String.raw`\mathcal E=-\frac{d\Phi_B}{dt}`, answer: "induction", aliases: ["induction","electromagnetic induction","faradays law","faraday's law"], hint: "Changing magnetic flux produces an emf.", explanation: "Faraday's law describes electromagnetic induction." },
      { equation: String.raw`\tau=RC`, answer: "time", aliases: ["time","time constant","rc time constant"], hint: "The characteristic charging scale.", explanation: "The RC time constant is tau = RC." }
    ]
  },
  {
    number: 6, slug: "magnet", finalAnswer: "MAGNET",
    theme: "Magnetism", difficulty: "Intro E&M",
    clues: [
      { equation: String.raw`\mathbf F_B=q\mathbf v\times\mathbf B`, answer: "magnetic", aliases: ["magnetic","magnetic force","magnetism"], hint: "The velocity-dependent Lorentz force.", explanation: "A moving charge experiences magnetic force q v cross B." },
      { equation: String.raw`\oint\mathbf B\cdot d\boldsymbol\ell=\mu_0I_{\rm enc}`, answer: "ampere", aliases: ["ampere","amperes law","ampere's law"], hint: "The circuital law relating B to enclosed current.", explanation: "Ampère's law relates circulation of B to current." },
      { equation: String.raw`\oint\mathbf E\cdot d\mathbf A=\frac{Q_{\rm enc}}{\epsilon_0}`, answer: "gauss", aliases: ["gauss","gauss law","gauss's law"], hint: "The flux law for enclosed electric charge.", explanation: "Gauss's law relates electric flux to enclosed charge." },
      { equation: String.raw`\nabla\cdot\mathbf B=0`, answer: "no monopoles", aliases: ["no monopoles","no magnetic monopoles","gauss law for magnetism"], hint: "Magnetic field lines have no beginnings or ends.", explanation: "Classical electromagnetism contains no isolated magnetic charges." },
      { equation: String.raw`\mathcal E=-N\frac{d\Phi_B}{dt}`, answer: "emf", aliases: ["emf","electromotive force","induced emf"], hint: "The voltage generated by changing magnetic flux.", explanation: "Changing flux induces an emf." },
      { equation: String.raw`\boldsymbol\tau=\boldsymbol\mu\times\mathbf B`, answer: "torque", aliases: ["torque","magnetic torque"], hint: "It tends to align a magnetic dipole with B.", explanation: "A dipole experiences torque mu cross B." }
    ]
  }
];
