window.QUESTION_BANK = [
  {
    id: "m_int_01",
    section: "Math",
    topic: "Linear Equations",
    prompt: "If 5(2x - 3) = 35, what is the value of 4x - 1?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "4x - 1 (not x)",
    choices: [
      { text: "5", trapType: "Intermediate Value Trap", trapDesc: "You solved for x = 5 instead of evaluating 4x - 1" },
      { text: "19", isCorrect: true },
      { text: "20", trapType: "Partial Operation Trap", trapDesc: "Calculated 4x (20) but forgot to subtract 1" },
      { text: "9", trapType: "Sign Reversal Trap", trapDesc: "Arithmetic sign slip during isolation" }
    ],
    takeaway: "Always circle or re-read the target expression before evaluating choices."
  },
  {
    id: "m_con_01",
    section: "Math",
    topic: "Quadratics & Constraints",
    prompt: "The equation x² - 14x + c = 0 has two distinct positive integer solutions. If c is a positive integer, what is the maximum possible value of c?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "two DISTINCT positive integer solutions",
    choices: [
      { text: "49", trapType: "Violated Distinct Constraint", trapDesc: "(x - 7)² gives c = 49, but yields only one distinct root" },
      { text: "48", isCorrect: true },
      { text: "45", trapType: "Premature Pick", trapDesc: "5 × 9 = 45 is valid, but not the maximum possible product" },
      { text: "13", trapType: "Inverted Constraint", trapDesc: "Minimized the product using 1 × 13" }
    ],
    takeaway: "Pay special attention to qualifiers like 'distinct'; double roots are not two distinct solutions."
  },
  {
    id: "m_int_02",
    section: "Math",
    topic: "Systems of Linear Equations",
    prompt: "If 3x + 2y = 14 and x + 2y = 8, what is the value of x + y?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "x + y (not single variables)",
    choices: [
      { text: "3", trapType: "Intermediate Value Trap", trapDesc: "Solved for x alone, not x + y" },
      { text: "2.5", trapType: "Intermediate Value Trap", trapDesc: "Solved for y alone, not x + y" },
      { text: "5.5", isCorrect: true },
      { text: "6", trapType: "Arithmetic Rush", trapDesc: "Calculated 3 + 3 inadvertently" }
    ],
    takeaway: "Multi-variable questions asking for a sum or difference are classic trap grounds for single-variable values."
  },
  {
    id: "m_con_02",
    section: "Math",
    topic: "Exponents & Radicals",
    prompt: "If √(2x + 6) = x - 1, which of the following is the complete set of real solutions to the equation?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "principal square root is non-negative",
    choices: [
      { text: "{-1, 5}", trapType: "Extraneous Root Trap", trapDesc: "x = -1 yields √4 = -2, which violates the principal radical definition" },
      { text: "{5}", isCorrect: true },
      { text: "{-1}", trapType: "Selected Only Extraneous Root", trapDesc: "Picked the invalid extraneous root" },
      { text: "No real solutions", trapType: "False Presumption", trapDesc: "Incorrect assumption after testing -1" }
    ],
    takeaway: "Radical equations always mandate testing roots back in the original prompt to filter out extraneous solutions."
  },
  {
    id: "m_des_01",
    section: "Math",
    topic: "Nonlinear Systems",
    prompt: "How many points of intersection exist between the graphs of y = 3x² - 12x + 7 and y = -2x - 1?",
    carFriendly: false,
    requiresDesmos: true,
    recommendedTriage: "yellow",
    constraint: "intersection count",
    choices: [
      { text: "0", trapType: "Inverted Discriminant", trapDesc: "Sign error on discriminant" },
      { text: "1", trapType: "Assumed Tangency", trapDesc: "Assumed tangency without checking roots" },
      { text: "2", isCorrect: true },
      { text: "Infinitely many", trapType: "Identity Confusion", trapDesc: "Confused quadratic with identical curve" }
    ],
    takeaway: "Do not equate and calculate b² - 4ac by hand when Desmos visually plots intersection counts instantly."
  },
  {
    id: "m_con_03",
    section: "Math",
    topic: "Absolute Value",
    prompt: "For what real value of x is |2x - 8| + 5 = 1?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "|expression| cannot equal a negative number",
    choices: [
      { text: "2", trapType: "Ignored Absolute Value Definition", trapDesc: "Solved 2x - 8 = -4 without checking feasibility" },
      { text: "6", trapType: "Ignored Absolute Value Definition", trapDesc: "Solved 2x - 8 = 4 without checking feasibility" },
      { text: "2 and 6", trapType: "Blind Two-Case Reflex", trapDesc: "Calculated both cases without checking feasibility" },
      { text: "No real value", isCorrect: true }
    ],
    takeaway: "Inspect equations for impossible values (|expression| < 0) before performing mechanical algebra."
  },
  {
    id: "m_int_03",
    section: "Math",
    topic: "Ratio & Proportions",
    prompt: "If a/b = 3/7 and b = 28, what is the value of (a + b)/b?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "(a + b)/b = a/b + 1",
    choices: [
      { text: "12", trapType: "Intermediate Value Trap", trapDesc: "This is the value of a alone, not (a + b)/b" },
      { text: "10/7", isCorrect: true },
      { text: "40/7", trapType: "Arithmetic Slip", trapDesc: "Miscalculated the combined fraction" },
      { text: "40", trapType: "Partial Calculation", trapDesc: "Solved for a + b instead of dividing by b" }
    ],
    takeaway: "Look for structural simplifications ((a+b)/b = a/b + 1); specific numerical values are often distractions."
  },
  {
    id: "m_des_02",
    section: "Math",
    topic: "Vertex & Minimum Values",
    prompt: "For what value of x does the function g(x) = 4x² - 24x + 41 achieve its minimum value?",
    carFriendly: false,
    requiresDesmos: true,
    recommendedTriage: "green",
    constraint: "value of x (not minimum value itself)",
    choices: [
      { text: "3", isCorrect: true },
      { text: "5", trapType: "Evaluated g(x) Trap", trapDesc: "Evaluated g(3) = 5, which is the minimum value itself, not the value of x" },
      { text: "-3", trapType: "Sign Error in Vertex Formula", trapDesc: "Used x = b / 2a instead of -b / 2a" },
      { text: "41", trapType: "Selected y-intercept", trapDesc: "Selected the constant c instead of finding the vertex" }
    ],
    takeaway: "Differentiate between 'at what value of x' the extremum occurs versus 'what the extremum value is'."
  },
  {
    id: "m_con_04",
    section: "Math",
    topic: "Linear Inequalities",
    prompt: "If -3x + 7 ≤ -8, which of the following represents all possible values of x?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "reverse sign when dividing by negative",
    choices: [
      { text: "x ≤ 5", trapType: "Failed Sign Flip", trapDesc: "Forgot to flip the inequality sign when dividing by -3" },
      { text: "x ≥ 5", isCorrect: true },
      { text: "x ≥ 1/3", trapType: "Arithmetic Sign Slip", trapDesc: "Arithmetic isolation error" },
      { text: "x ≤ -5", trapType: "Double Negation Error", trapDesc: "Divided -15 by -3 and made it negative" }
    ],
    takeaway: "Dividing or multiplying an inequality by a negative number mandates reversing the inequality sign."
  },
  {
    id: "m_int_04",
    section: "Math",
    topic: "Function Notation",
    prompt: "The function f is defined by f(x) = 3x - 5. What is the value of f(2k) - f(k) when k = 4?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "f(2k) - f(k) evaluation",
    choices: [
      { text: "7", trapType: "Evaluated f(k) Alone", trapDesc: "Evaluated f(4) = 7 and stopped" },
      { text: "19", trapType: "Evaluated f(2k) Alone", trapDesc: "Evaluated f(8) = 19 and stopped" },
      { text: "12", isCorrect: true },
      { text: "14", trapType: "Distributive Misconception", trapDesc: "Assumed f(2k) - f(k) = f(k)" }
    ],
    takeaway: "Function notation is not distributive; compute outer evaluations individually before subtracting."
  },
  {
    id: "m_con_05",
    section: "Math",
    topic: "Circles & Geometry",
    prompt: "The equation of a circle in the xy-plane is x² + y² - 6x + 8y = 0. What is the diameter of the circle?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "yellow",
    constraint: "DIAMETER (not radius)",
    choices: [
      { text: "5", trapType: "Reported Radius Trap", trapDesc: "Calculated radius r = 5, but missed that prompt asks for diameter" },
      { text: "10", isCorrect: true },
      { text: "25", trapType: "Reported r² Trap", trapDesc: "Reported r² instead of taking the square root" },
      { text: "14", trapType: "Added Coefficients", trapDesc: "Directly added linear coefficients" }
    ],
    takeaway: "SAT circle questions consistently ask for diameter or circumference rather than radius; underline the required dimension."
  },
  {
    id: "m_des_03",
    section: "Math",
    topic: "Exponential Growth",
    prompt: "The population of a culture is modeled by P(t) = 250(1.08)ᵗ, where t is time in hours. After approximately how many hours will the population first exceed 1,000?",
    carFriendly: false,
    requiresDesmos: true,
    recommendedTriage: "yellow",
    constraint: "first exceed 1000",
    choices: [
      { text: "12", trapType: "Linear Estimation Trap", trapDesc: "Assumed constant linear additions" },
      { text: "18", isCorrect: true },
      { text: "32", trapType: "Misplaced Base Assumption", trapDesc: "Logarithmic miscalculation" },
      { text: "4", trapType: "Quadrupling Assumption", trapDesc: "Assumed quadrupling happens in 4 intervals" }
    ],
    takeaway: "Avoid manual logarithmic conversions on timed tests; graph both curves in Desmos and inspect the intersection."
  }
];