const problems = [
	{
		text: "A balloon’s radius increases at 2 cm/s. How fast is the volume increasing when the radius is 5 cm?",
		questions: [
			{ prompt: "Which keyword shows a changing rate?", type: "select", options: ["maximum", "increases at", "tangent", "approximate"], answer: "increases at" },
			{ prompt: "Type of problem?", type: "select", options: ["Optimization", "Related Rates", "Linear Approximation", "Motion"], answer: "Related Rates" },
			{ prompt: "Quantity we solve for?", type: "text", answer: "rate of change of volume" }
		],
		explanation: "The phrases 'increases at 2 cm/s' and 'how fast' signal a Related Rates problem."
	},
	{
		text: "Find the dimensions of a rectangle with perimeter 40 that has the largest possible area.",
		questions: [
			{ prompt: "Which keyword indicates an extreme value?", type: "select", options: ["largest", "radius", "velocity", "approximate"], answer: "largest" },
			{ prompt: "Type of problem?", type: "select", options: ["Optimization", "Related Rates", "Motion", "Differentials"], answer: "Optimization" },
			{ prompt: "What are we maximizing or minimizing?", type: "text", answer: "area" }
		],
		explanation: "'Largest possible area' means we are maximizing area → Optimization problem."
	},
	{
		text: "A particle moves along a line with position s(t)=4t²−2t. When is the particle at rest?",
		questions: [
			{ prompt: "Keyword that signals being motionless?", type: "select", options: ["at rest", "perimeter", "radius", "tangent"], answer: "at rest" },
			{ prompt: "Type of problem?", type: "select", options: ["Motion (Kinematics)", "Optimization", "Related Rates", "Differentials"], answer: "Motion (Kinematics)" },
			{ prompt: "Variable set to zero?", type: "text", answer: "velocity" }
		],
		explanation: "'At rest' means velocity = 0, so this is a Motion problem."
	},
	{
		text: "Find the slope of the tangent line to y=x²+3x at x=1.",
		questions: [
			{ prompt: "Which keyword shows this is about slope?", type: "select", options: ["tangent", "fast", "maximum", "radius"], answer: "tangent" },
			{ prompt: "Type of problem?", type: "select", options: ["Derivative / Tangent Line", "Optimization", "Related Rates", "Differentials"], answer: "Derivative / Tangent Line" },
			{ prompt: "Quantity to find?", type: "text", answer: "slope" }
		],
		explanation: "The word 'tangent' implies finding the slope f'(x) at a specific point."
	},
	{
		text: "A 10-ft ladder leans against a wall. The bottom slides away at 1 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?",
		questions: [
			{ prompt: "Which keyword implies movement and rates?", type: "select", options: ["slides away", "maximum", "tangent", "approximate"], answer: "slides away" },
			{ prompt: "Type of problem?", type: "select", options: ["Related Rates", "Optimization", "Motion", "Differentials"], answer: "Related Rates" },
			{ prompt: "What are we solving for?", type: "text", answer: "rate top slides down" }
		],
		explanation: "Sliding and speed indicate changing lengths over time → Related Rates."
	},
	{
		text: "Estimate √(4.1) using linear approximation.",
		questions: [
			{ prompt: "Which keyword indicates estimation?", type: "select", options: ["estimate", "velocity", "maximum", "fast"], answer: "estimate" },
			{ prompt: "Type of problem?", type: "select", options: ["Linear Approximation / Differentials", "Optimization", "Related Rates", "Motion"], answer: "Linear Approximation / Differentials" },
			{ prompt: "Formula used?", type: "text", answer: "dy = f'(x)dx" }
		],
		explanation: "The word 'estimate' implies linear approximation using differentials."
	},
	{
		text: "The limit as x→3 of (2x²−18)/(x−3) is requested.",
		questions: [
			{ prompt: "Which keyword reveals the topic?", type: "select", options: ["limit", "rate", "velocity", "largest"], answer: "limit" },
			{ prompt: "Type of problem?", type: "select", options: ["Limit Evaluation", "Derivative", "Optimization", "Related Rates"], answer: "Limit Evaluation" },
			{ prompt: "Likely method used?", type: "text", answer: "factor and cancel" }
		],
		explanation: "The word 'limit' means we are evaluating a limit as x→3, typically by factoring and canceling."
	},
	{
		text: "As x approaches 0, find the limit of sin(x)/x.",
		questions: [
			{ prompt: "Keyword showing approach?", type: "select", options: ["as x approaches", "increases at", "largest", "tangent"], answer: "as x approaches" },
			{ prompt: "Type of problem?", type: "select", options: ["Limit Evaluation", "Optimization", "Related Rates", "Differentials"], answer: "Limit Evaluation" },
			{ prompt: "Well-known limit result?", type: "text", answer: "1" }
		],
		explanation: "'As x approaches' → limit problem. This classic limit equals 1."
	},
	{
		text: "A cone is being filled with water so that the height increases at 3 cm/s. How fast is the volume increasing when h=5 cm?",
		questions: [
			{ prompt: "Which keyword signals rate change?", type: "select", options: ["increases at", "maximum", "tangent", "approximate"], answer: "increases at" },
			{ prompt: "Type of problem?", type: "select", options: ["Related Rates", "Optimization", "Motion", "Differentials"], answer: "Related Rates" },
			{ prompt: "Formula likely used?", type: "text", answer: "V = (1/3)πr²h" }
		],
		explanation: "Words 'increases at' and 'how fast' imply Related Rates for volume of a cone."
	},
	{
		text: "Find the point where the tangent to y = x³ is horizontal.",
		questions: [
			{ prompt: "Which keyword describes flat slope?", type: "select", options: ["horizontal", "rate", "fast", "approximate"], answer: "horizontal" },
			{ prompt: "Type of problem?", type: "select", options: ["Derivative / Critical Point", "Optimization", "Motion", "Related Rates"], answer: "Derivative / Critical Point" },
			{ prompt: "Condition for horizontal tangent?", type: "text", answer: "f'(x)=0" }
		],
		explanation: "'Horizontal' means slope = 0 → set derivative equal to zero."
	}
];
