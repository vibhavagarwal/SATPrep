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
  {
    id: "rw_trans_01",
    section: "Reading & Writing",
    topic: "Transitions",
    prompt: "Geologists long believed that tectonic plates float passively over the mantle. Recent mantle convection models, however, indicate that descending slab pull provides the primary driving mechanism. _______ the motion of plates is actively driven by gravity acting on cooling oceanic lithosphere rather than simple passive floating.",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "relationship: restatement / emphasis of the previous sentence",
    choices: [
      { text: "Furthermore,", trapType: "Additive Distortion", trapDesc: "Used when introducing a new secondary point, not when clarifying the current point" },
      { text: "In other words,", isCorrect: true },
      { text: "Consequently,", trapType: "False Cause-and-Effect", trapDesc: "The sentence restates the mechanism; it is not a sequential result" },
      { text: "In contrast,", trapType: "False Contrast Trap", trapDesc: "The sentence agrees with the preceding revision rather than contrasting it" }
    ],
    takeaway: "If two sentences describe the exact same underlying mechanism using different words, look for restatement transitions like 'In other words' or 'That is'."
  },
  {
    id: "rw_bound_01",
    section: "Reading & Writing",
    topic: "Standard English Boundaries",
    prompt: "During the late nineteenth century, botanist George Washington Carver revolutionized agricultural practices in the American _______ he urged local farmers to rotate cotton crops with soil-enriching legumes.",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "connecting two independent clauses",
    choices: [
      { text: "South, for instance,", trapType: "Run-On / Comma Splice", trapDesc: "Joins two complete independent clauses with only a comma" },
      { text: "South; for instance,", isCorrect: true },
      { text: "South for instance,", trapType: "Punctuation Absence Trap", trapDesc: "Creates an unpunctuated run-on sentence" },
      { text: "South, for instance;", trapType: "Misplaced Semicolon", trapDesc: "Places the semicolon after the transitional phrase rather than at the clause boundary" }
    ],
    takeaway: "Check the boundaries between two standalone clauses; a comma before a transitional phrase creates an illegal comma splice."
  },
  {
    id: "rw_inf_01",
    section: "Reading & Writing",
    topic: "Inferences",
    prompt: "Ecologists observed that predatory ladybugs introduced into greenhouse strawberry crops drastically reduced aphid populations within three weeks, while neighboring open-field plots showed negligible reduction over the same interval. Which choice most logically completes the text?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "yellow",
    constraint: "stay within the scope of controlled vs open environments",
    choices: [
      { text: "Ladybugs are completely ineffective at regulating pest counts in outdoor agricultural systems.", trapType: "Extreme Language Trap", trapDesc: "Uses 'completely ineffective' when the study only tracked a short 3-week window" },
      { text: "The predatory impact of ladybugs on aphid populations is enhanced in enclosed environments.", isCorrect: true },
      { text: "Open-field strawberry farming will inevitably be abandoned in favor of greenhouse cultivation.", trapType: "Scope Expansion Trap", trapDesc: "Speculates wildly on future farming trends outside passage evidence" },
      { text: "Aphids in outdoor fields possess biological immunities to ladybug predation.", trapType: "Unwarranted Causation", trapDesc: "Invents a biological immunity not mentioned or tested in the text" }
    ],
    takeaway: "SAT inference answers favor hedged phrasing ('is enhanced', 'may correlate') over sweeping generalizations ('completely', 'inevitably')."
  },
  {
    id: "rw_mod_01",
    section: "Reading & Writing",
    topic: "Dangling Modifiers",
    prompt: "Synthesized by chemists in the early twentieth century, _______ widely adopted until industrial production techniques matured decades later.",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "the noun right after the comma must perform/receive the opening action",
    choices: [
      { text: "the commercial utility of bakelite was not", trapType: "Dangling Modifier Trap", trapDesc: "'The commercial utility' was not synthesized by chemists; the material itself was" },
      { text: "bakelite was not", isCorrect: true },
      { text: "industrial factories did not find bakelite", trapType: "Dangling Modifier Trap", trapDesc: "Implies factories were synthesized by chemists" },
      { text: "it was impossible for chemists to see bakelite", trapType: "Empty Pronoun / Dangling Trap", trapDesc: "Places an expletive pronoun directly after the descriptive modifier" }
    ],
    takeaway: "The noun immediately following an introductory descriptive phrase must be the actual entity being described."
  },
  {
    id: "rw_purp_01",
    section: "Reading & Writing",
    topic: "Text Structure & Purpose",
    prompt: "In 1928, Alexander Fleming noted that a stray mold had contaminated a staphylococcus culture, inhibiting bacterial proliferation. While popular histories frame this purely as a stroke of blind luck, historian Robert Bud demonstrates that Fleming was actively searching for antibacterial agents and possessed the exact laboratory preparation necessary to recognize the significance of the mold. What is the primary purpose of the text?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "yellow",
    constraint: "look for the shift: popular view vs. historian's correction",
    choices: [
      { text: "To prove that luck plays no role whatsoever in scientific discoveries.", trapType: "Extreme Scope Trap", trapDesc: "Overstates the argument to an absolute rule for all discoveries" },
      { text: "To challenge a simplified narrative regarding how penicillin was discovered.", isCorrect: true },
      { text: "To detail the chemical mechanism by which staphylococcus bacteria are killed.", trapType: "Detail Trap", trapDesc: "Focuses on a passing scientific term rather than the text's argumentative job" },
      { text: "To argue that Robert Bud discovered penicillin before Fleming.", trapType: "Factual Reversal", trapDesc: "Contradicts the text by misidentifying who made the discovery" }
    ],
    takeaway: "Identify the passage verb: does the author describe, challenge, contrast, or summarize? Traps often elevate a minor detail into the main purpose."
  },
  {
    id: "m_poly_01",
    section: "Math",
    topic: "Polynomial Factors",
    prompt: "If (x - 3) is a factor of f(x) = 2x³ - 5x² - 4x + k, what is the value of k?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "Factor Theorem: f(3) = 0",
    choices: [
      { text: "3", trapType: "Selected Factor Root", trapDesc: "Selected the root x = 3 instead of evaluating k" },
      { text: "-3", isCorrect: true },
      { text: "15", trapType: "Sign Reversal on Root", trapDesc: "Evaluated f(-3) instead of f(3)" },
      { text: "-33", trapType: "Arithmetic Slip", trapDesc: "Arithmetic slip when isolating the constant" }
    ],
    takeaway: "If (x - c) is a factor, f(c) = 0. Plug in +c directly rather than attempting lengthy polynomial long division."
  },
  {
    id: "rw_trans_02",
    section: "Reading & Writing",
    topic: "Transitions",
    prompt: "Many urban planning advocates argue that widening highways relieves traffic congestion. Empirical traffic analyses routinely demonstrate the principle of induced demand: expanding roadway capacity rapidly attracts new drivers, returning travel times to previous baselines. _______ highway expansions frequently fail to achieve long-term transit efficiency.",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "second clause is a logical outcome of induced demand",
    choices: [
      { text: "Consequently,", isCorrect: true },
      { text: "Nevertheless,", trapType: "False Contrast Trap", trapDesc: "The final sentence agrees with the outcome of induced demand; it does not contrast it" },
      { text: "Specifically,", trapType: "Categorization Mismatch", trapDesc: "The sentence states a conclusion, not a granular illustrative example" },
      { text: "Earlier,", trapType: "Chronological Trap", trapDesc: "There is no chronological sequence between the points" }
    ],
    takeaway: "Look at the direction of logic: if Sentence A causes Sentence B, use 'Consequently' or 'Therefore', not contrast words."
  },
  {
    id: "m_rat_01",
    section: "Math",
    topic: "Rational Equations",
    prompt: "If (2x + 6) / (x + 3) = x - 1, which of the following is the true solution set for x?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "denominator cannot equal zero (x ≠ -3)",
    choices: [
      { text: "{-3, 3}", trapType: "Extraneous Domain Trap", trapDesc: "Factoring yields x = 3, but x = -3 makes the denominator zero and is invalid" },
      { text: "{3}", isCorrect: true },
      { text: "{-3}", trapType: "Selected Only Extraneous Root", trapDesc: "Picked the value that causes division by zero" },
      { text: "All real numbers", trapType: "Identity Confusion", trapDesc: "Confused cancellation with an identity" }
    ],
    takeaway: "In rational equations, immediately cross out any candidate solution that makes a denominator zero."
  },
  {
    id: "rw_bound_02",
    section: "Reading & Writing",
    topic: "Standard English Boundaries",
    prompt: "The orchestra featured several unconventional _______ water-filled glass bowls, amplified typewriter keys, and bowed metallic sheets.",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "a colon requires an independent clause before the list",
    choices: [
      { text: "instruments, including:", trapType: "Premature Colon Trap", trapDesc: "Never place a colon immediately following 'including' or a preposition" },
      { text: "instruments:", isCorrect: true },
      { text: "instruments; such as", trapType: "Semicolon Fragment Trap", trapDesc: "A semicolon cannot link an independent clause to a dependent fragment" },
      { text: "instruments", trapType: "Unpunctuated Run-On", trapDesc: "Fails to provide any boundary between the noun and the list" }
    ],
    takeaway: "A colon must always be preceded by a complete grammatical sentence. Never put a colon directly after 'such as' or 'including'."
  },
  {
    id: "m_perc_01",
    section: "Math",
    topic: "Percentages & Rates",
    prompt: "A store increases the price of an item by 20%. A month later, the new price is discounted by 20%. The final price is what percentage of the original price?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "percentage changes are multiplicative, not additive",
    choices: [
      { text: "100%", trapType: "Additive Percent Fallacy", trapDesc: "Assumed +20% and -20% cancel each other out to 100%" },
      { text: "96%", isCorrect: true },
      { text: "98%", trapType: "Approximation Slip", trapDesc: "Arithmetic approximation slip" },
      { text: "104%", trapType: "Directional Reversal", trapDesc: "Calculated compound growth instead of reduction" }
    ],
    takeaway: "Percentages compound multiplicatively: 1.20 × 0.80 = 0.96 (96%). Never add or subtract percentages directly."
  },
  {
    id: "rw_rhet_01",
    section: "Reading & Writing",
    topic: "Rhetorical Synthesis",
    prompt: "A student is writing an essay emphasizing the cultural significance of the dish mole poblano. Which choice most effectively uses the student's notes to achieve this goal?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "yellow",
    constraint: "must emphasize CULTURAL SIGNIFICANCE (not ingredients or cook time)",
    choices: [
      { text: "Mole poblano requires roasting several varieties of dried chili peppers over an open flame.", trapType: "Failed Goal Trap", trapDesc: "Describes preparation technique rather than cultural significance" },
      { text: "Prepared during major community milestones, mole poblano embodies Mexico's fusion of Indigenous and Spanish culinary traditions.", isCorrect: true },
      { text: "Cooks often let mole poblano simmer for over eight hours to achieve its thick consistency.", trapType: "Failed Goal Trap", trapDesc: "Focuses on cooking duration instead of cultural importance" },
      { text: "Mole poblano is one of seven varieties of mole native to the state of Puebla.", trapType: "Factual Classification Trap", trapDesc: "States a classification fact without explaining its cultural meaning" }
    ],
    takeaway: "In Rhetorical Synthesis, read the prompt's stated goal first. Discard choices that are factually true but fulfill the wrong objective."
  },
  {
    id: "m_syst_02",
    section: "Math",
    topic: "Infinite Solutions",
    prompt: "The system 6x - 9y = 18 and ax + 3y = b has infinitely many solutions. What is the value of a + b?",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "a + b (sum of constants), equations must be identical multiples",
    choices: [
      { text: "-2", trapType: "Single Variable Trap", trapDesc: "This is the value of a alone" },
      { text: "-6", trapType: "Single Variable Trap", trapDesc: "This is the value of b alone" },
      { text: "-8", isCorrect: true },
      { text: "8", trapType: "Sign Reversal Trap", trapDesc: "Missed the negative sign when multiplying the system by -1/3" }
    ],
    takeaway: "Multiply the second equation by -3 to match coefficients: -3a = 6 (so a = -2) and -3b = 18 (so b = -6). Then sum: -2 + (-6) = -8."
  },
  {
    id: "rw_verb_01",
    section: "Reading & Writing",
    topic: "Subject-Verb Agreement",
    prompt: "The collection of rare Mesoamerican artifacts, which includes ceremonial masks and intricate jade beadwork, _______ currently displayed in the central atrium.",
    carFriendly: true,
    requiresDesmos: false,
    recommendedTriage: "green",
    constraint: "subject is 'collection' (singular), not 'artifacts' or 'masks'",
    choices: [
      { text: "are", trapType: "Intervening Preposition Trap", trapDesc: "Matches verb to the plural 'artifacts' inside the prepositional phrase" },
      { text: "is", isCorrect: true },
      { text: "were", trapType: "Tense & Agreement Mismatch", trapDesc: "Past tense plural form" },
      { text: "have been", trapType: "Plural Perfect Trap", trapDesc: "Plural verb phrase" }
    ],
    takeaway: "Ignore everything between the subject and the verb: 'The collection [of artifacts...] IS displayed'."
  }
];
