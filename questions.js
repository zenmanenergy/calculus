const problems = [
	// 1–4: Related Rates
	{
		text: "A balloon’s radius increases at 2 cm/s. How fast is the volume increasing when the radius is 5 cm?",
		questions: [
			{ prompt: "Which keyword(s) indicate a quantity is changing over time?", type: "select",
				options: ["limit","largest","approaches","tangent","per second","increases at","maximum","estimate","velocity"],
				answer: "increases at" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Optimization","Related Rates","Linear Approximation / Differentials","Motion (Kinematics)","Limit Evaluation"],
				answer: "Related Rates" },
			{ prompt: "What are we solving for?", type: "text", answer: "rate of change of volume" }
		],
		explanation: "‘Increases at 2 cm/s’ and ‘how fast’ both indicate a rate → Related Rates problem."
	},
	{
		text: "A spherical snowball melts so that its radius decreases at 0.2 cm/min. How fast is its volume decreasing when the radius is 10 cm?",
		questions: [
			{ prompt: "Which keyword shows something is shrinking or changing?", type: "select",
				options: ["decreases at","maximum","horizontal","approximate","perimeter"], answer: "decreases at" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Related Rates","Optimization","Motion (Kinematics)","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Related Rates" },
			{ prompt: "Formula involved?", type: "text", answer: "V = (4/3)πr³" }
		],
		explanation: "‘Decreases at’ → a rate; since V depends on r(t), differentiate V = (4/3)πr³."
	},
	{
		text: "Water is poured into a cone so that the height increases at 3 cm/s. How fast is the volume increasing when h = 5 cm?",
		questions: [
			{ prompt: "Keyword that signals rate?", type: "select",
				options: ["increases at","largest","estimate","approaches","tangent"], answer: "increases at" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Related Rates","Optimization","Motion (Kinematics)","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Related Rates" },
			{ prompt: "Likely formula?", type: "text", answer: "V = (1/3)πr²h" }
		],
		explanation: "‘Increases at 3 cm/s’ → rate; use cone volume formula for Related Rates."
	},
	{
		text: "A 10-ft ladder leans against a wall. The bottom slides away at 1 ft/s. How fast is the top sliding down when the bottom is 6 ft away?",
		questions: [
			{ prompt: "Which phrase shows movement over time?", type: "select",
				options: ["slides away","limit","largest","approximate","approaches"], answer: "slides away" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Related Rates","Optimization","Motion (Kinematics)","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Related Rates" },
			{ prompt: "Equation relating x and y?", type: "text", answer: "x² + y² = 100" }
		],
		explanation: "‘Slides’ and a constant length → Pythagorean relation → Related Rates."
	},

	// 5–8: Optimization
	{
		text: "Find the dimensions of a rectangle with perimeter 40 that has the largest possible area.",
		questions: [
			{ prompt: "Which keyword indicates an extreme value?", type: "select",
				options: ["largest","limit","velocity","approximate","decreases at"], answer: "largest" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Optimization","Related Rates","Motion (Kinematics)","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Optimization" },
			{ prompt: "What are we maximizing?", type: "text", answer: "area" }
		],
		explanation: "‘Largest possible area’ → maximize A = x(20 − x) → Optimization."
	},
	{
		text: "A farmer wants to fence a rectangular field along a river and enclose 600 m² with the least fencing. How long should the sides be?",
		questions: [
			{ prompt: "Which keyword hints at minimizing?", type: "select",
				options: ["least","increases at","tangent","estimate","limit"], answer: "least" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Optimization","Related Rates","Motion (Kinematics)","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Optimization" },
			{ prompt: "Quantity minimized?", type: "text", answer: "perimeter" }
		],
		explanation: "‘Least fencing’ → minimize total perimeter → Optimization."
	},
	{
		text: "Find the point on the curve y = x² + 1 closest to (0, 3).",
		questions: [
			{ prompt: "Which phrase signals distance minimization?", type: "select",
				options: ["closest","fastest","rate","approaches","approximate"], answer: "closest" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Optimization","Related Rates","Limit Evaluation","Linear Approximation / Differentials","Motion (Kinematics)"],
				answer: "Optimization" },
			{ prompt: "Quantity minimized?", type: "text", answer: "distance" }
		],
		explanation: "‘Closest’ → minimize distance D = √((x − 0)² + (y − 3)²)."
	},
	{
		text: "A box with a square base and open top must hold 32 000 cm³. Find the dimensions requiring the least material.",
		questions: [
			{ prompt: "Which word shows minimization?", type: "select",
				options: ["least","maximum","per second","approaches","estimate"], answer: "least" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Optimization","Related Rates","Motion (Kinematics)","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Optimization" },
			{ prompt: "Quantity minimized?", type: "text", answer: "surface area" }
		],
		explanation: "‘Least material’ → minimize surface area A for given volume V = 32 000."
	},

	// 9–11: Motion (Kinematics)
	{
		text: "A particle moves along a line with position s(t)=4t²−2t. When is the particle at rest?",
		questions: [
			{ prompt: "Which keyword means velocity = 0?", type: "select",
				options: ["at rest","largest","limit","tangent","approximate"], answer: "at rest" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Motion (Kinematics)" },
			{ prompt: "Variable set to zero?", type: "text", answer: "velocity" }
		],
		explanation: "‘At rest’ → velocity = 0 → solve s′(t)=0."
	},
	{
		text: "If s(t)=t³−6t²+9t, when is the particle speeding up?",
		questions: [
			{ prompt: "Which phrase signals motion analysis?", type: "select",
				options: ["speeding up","largest","approaches","approximate","limit"], answer: "speeding up" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Motion (Kinematics)" },
			{ prompt: "What two quantities have same sign when speeding up?", type: "text", answer: "velocity and acceleration" }
		],
		explanation: "Speeding up → v and a have same sign → Motion problem."
	},
	{
		text: "A rock is thrown upward with velocity 20 m/s. How long until it reaches its highest point?",
		questions: [
			{ prompt: "Which phrase describes motion peak?", type: "select",
				options: ["highest point","at rest","fastest","largest","limit"], answer: "highest point" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Motion (Kinematics)" },
			{ prompt: "Condition at the top?", type: "text", answer: "velocity = 0" }
		],
		explanation: "At top of path → v = 0 → Motion / Kinematics."
	},

	// 12–14: Derivative / Tangent Line
	{
		text: "Find the slope of the tangent line to y=x²+3x at x=1.",
		questions: [
			{ prompt: "Which keyword shows slope context?", type: "select",
				options: ["tangent","limit","largest","approximate","velocity"], answer: "tangent" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Derivative / Tangent Line" },
			{ prompt: "Quantity found?", type: "text", answer: "slope" }
		],
		explanation: "‘Tangent’ → find derivative at x=1 → slope = f′(1)."
	},
	{
		text: "Find the point where the tangent to y=x³ is horizontal.",
		questions: [
			{ prompt: "Which keyword shows flat slope?", type: "select",
				options: ["horizontal","fast","approximate","limit","increases at"], answer: "horizontal" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Derivative / Critical Point","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Derivative / Critical Point" },
			{ prompt: "Condition for horizontal tangent?", type: "text", answer: "f'(x)=0" }
		],
		explanation: "‘Horizontal’ → slope = 0 → critical point via derivative."
	},
	{
		text: "Find the equation of the tangent line to y=sin(x) at x=π/4.",
		questions: [
			{ prompt: "Keyword implying tangent?", type: "select",
				options: ["tangent","approximate","limit","largest","fastest"], answer: "tangent" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation / Differentials","Limit Evaluation"],
				answer: "Derivative / Tangent Line" },
			{ prompt: "What are we computing first?", type: "text", answer: "derivative" }
		],
		explanation: "‘Tangent line’ → need slope f′(π/4) → Derivative problem."
	},

	// 15–16: Linear Approximation / Differentials
	{
		text: "Estimate √(4.1) using linear approximation.",
		questions: [
			{ prompt: "Which word shows estimation?", type: "select",
				options: ["estimate","limit","maximum","fast","velocity"], answer: "estimate" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Linear Approximation / Differentials","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Linear Approximation / Differentials" },
			{ prompt: "Equation form used?", type: "text", answer: "dy = f'(x)dx" }
		],
		explanation: "‘Estimate’ → use differentials dy = f′(x)dx for linear approximation."
	},
	{
		text: "Approximate (1.02)⁵ using differentials.",
		questions: [
			{ prompt: "Which keyword indicates small change?", type: "select",
				options: ["approximate","limit","largest","fast","horizontal"], answer: "approximate" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Linear Approximation / Differentials","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Linear Approximation / Differentials" },
			{ prompt: "Derivative used?", type: "text", answer: "f'(x)=5x⁴" }
		],
		explanation: "‘Approximate’ → small Δx → Linear Approximation."
	},

	// 17–20: Limit Evaluation
	{
		text: "Find the limit as x→3 of (2x²−18)/(x−3).",
		questions: [
			{ prompt: "Which word identifies a limit?", type: "select",
				options: ["limit","rate","largest","tangent","fast"], answer: "limit" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation / Differentials","Motion (Kinematics)"],
				answer: "Limit Evaluation" },
			{ prompt: "Likely algebraic method?", type: "text", answer: "factor and cancel" }
		],
		explanation: "‘Limit as x→3’ → algebraic limit → often factor and cancel."
	},
	{
		text: "As x approaches 0, find the limit of sin(x)/x.",
		questions: [
			{ prompt: "Which phrase indicates approaching behavior?", type: "select",
				options: ["as x approaches","increases at","largest","horizontal","approximate"], answer: "as x approaches" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation / Differentials","Motion (Kinematics)"],
				answer: "Limit Evaluation" },
			{ prompt: "Well-known result?", type: "text", answer: "1" }
		],
		explanation: "‘As x approaches’ → limit language; standard limit = 1."
	},
	{
		text: "Find the limit of (x²−1)/(x−1) as x→1.",
		questions: [
			{ prompt: "Keyword suggesting limit?", type: "select",
				options: ["limit","increases at","fast","largest","approximate"], answer: "limit" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation / Differentials","Motion (Kinematics)"],
				answer: "Limit Evaluation" },
			{ prompt: "Common simplification step?", type: "text", answer: "factor numerator" }
		],
		explanation: "‘Limit as x→1’ → classic factor-cancel limit example."
	},
	{
		text: "Determine if the limit of (x²−9)/(x−3) exists as x→3.",
		questions: [
			{ prompt: "Which phrase shows this is a limit question?", type: "select",
				options: ["limit","maximum","fastest","tangent","increases at"], answer: "limit" },
			{ prompt: "Type of problem?", type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation / Differentials","Motion (Kinematics)"],
				answer: "Limit Evaluation" },
			{ prompt: "Why might it fail to exist?", type: "text", answer: "division by zero" }
		],
		explanation: "‘Limit’ + ‘as x→3’ → limit evaluation; undefined if denominator = 0."
	}
];
