const problems = [
	// 1–4 Related Rates
	{
		text: "A balloon’s radius increases at 2 cm/s. How fast is the volume increasing when the radius is 5 cm?",
		questions: [
			{
				prompt: "Which keyword(s) indicate a quantity changing over time?",
				type: "select",
				options: ["per second","largest","tangent","approximate","limit"],
				answer: "per second"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Related Rates","Optimization","Motion (Kinematics)","Limit Evaluation","Linear Approximation"],
				answer: "Related Rates"
			},
			{
				prompt: "What quantity are we solving for?",
				type: "select",
				options: ["rate of volume change","maximum area","slope","limit value"],
				answer: "rate of volume change"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = (4/3)πr³","A = πr²","y = mx + b","P = 2l + 2w"],
				answers: ["V = (4/3)πr³"]
			}
		],
		explanation: "‘Per second’ shows a rate → Related Rates problem using the sphere volume formula."
	},
	{
		text: "Water is poured into a cone so that height increases at 3 cm/s. How fast is volume increasing when h = 5 cm?",
		questions: [
			{
				prompt: "Which keyword signals a changing rate?",
				type: "select",
				options: ["increases at","limit","maximum","horizontal"],
				answer: "increases at"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Related Rates","Optimization","Motion (Kinematics)","Linear Approximation","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "Quantity being found?",
				type: "select",
				options: ["rate of volume change","surface area","velocity","limit value"],
				answer: "rate of volume change"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = (1/3)πr²h","A = lw","y = x²","s(t) = 4t² - 2t"],
				answers: ["V = (1/3)πr²h"]
			}
		],
		explanation: "‘Increases at’ shows a rate; use the cone-volume relation."
	},
	{
		text: "A 10-ft ladder slides away from a wall at 1 ft/s. How fast is the top sliding down when the bottom is 6 ft out?",
		questions: [
			{
				prompt: "Which phrase implies motion and change?",
				type: "select",
				options: ["slides away","largest","estimate","limit"],
				answer: "slides away"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Related Rates","Optimization","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "What rate are we finding?",
				type: "select",
				options: ["rate top slides down","maximum area","velocity","limit value"],
				answer: "rate top slides down"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["x² + y² = 100","A = lw","V = (4/3)πr³","y - y₁ = m(x - x₁)"],
				answers: ["x² + y² = 100"]
			}
		],
		explanation: "Movement of ladder sides → Pythagorean relation; differentiate to find dy/dt."
	},
	{
		text: "A spherical snowball melts so that its radius decreases at 0.2 cm/min. How fast is its volume decreasing when r = 10 cm?",
		questions: [
			{
				prompt: "Which keyword indicates shrinking or negative rate?",
				type: "select",
				options: ["decreases at","largest","approximate","limit"],
				answer: "decreases at"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Related Rates","Optimization","Motion (Kinematics)","Linear Approximation","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "Quantity being found?",
				type: "select",
				options: ["rate of volume change","maximum area","velocity","limit value"],
				answer: "rate of volume change"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = (4/3)πr³","A = 4πr²","y = mx + b","P = 2l + 2w"],
				answers: ["V = (4/3)πr³"]
			}
		],
		explanation: "‘Decreases at’ means dV/dt < 0 → Related Rates with sphere volume."
	},

	// 5–8 Optimization
	{
		text: "Find dimensions of a rectangle with perimeter 40 that has the largest possible area.",
		questions: [
			{
				prompt: "Which word signals extremum?",
				type: "select",
				options: ["largest","limit","horizontal","approximate"],
				answer: "largest"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Quantity optimized?",
				type: "select",
				options: ["area","volume","perimeter","slope"],
				answer: "area"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["A = lw","P = 2l + 2w = 40","V = (4/3)πr³","y = mx + b"],
				answers: ["A = lw","P = 2l + 2w = 40"]
			}
		],
		explanation: "‘Largest area’ → maximize A = lw subject to P = 40."
	},
	{
		text: "A box with square base and open top must hold 32 000 cm³. Find dimensions requiring the least material.",
		questions: [
			{
				prompt: "Which keyword shows minimization?",
				type: "select",
				options: ["least","largest","limit","approximate"],
				answer: "least"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Quantity optimized?",
				type: "select",
				options: ["surface area","volume","velocity","slope"],
				answer: "surface area"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = x²h = 32000","A = x² + 4xh","y = mx + b","V = (1/3)πr²h"],
				answers: ["V = x²h = 32000","A = x² + 4xh"]
			}
		],
		explanation: "‘Least material’ → minimize surface area for given volume."
	},
	{
		text: "Find the point on y = x² + 1 closest to (0, 3).",
		questions: [
			{
				prompt: "Which word implies distance minimization?",
				type: "select",
				options: ["closest","limit","approximate","fast"],
				answer: "closest"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Quantity optimized?",
				type: "select",
				options: ["distance","velocity","volume","area"],
				answer: "distance"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["D² = (x−0)² + (y−3)²","y = x² + 1","A = lw","V = (4/3)πr³"],
				answers: ["D² = (x−0)² + (y−3)²","y = x² + 1"]
			}
		],
		explanation: "‘Closest’ → minimize distance from point to curve."
	},
	{
		text: "A farmer fences three sides of a rectangle along a river to enclose 600 m² with least fencing.",
		questions: [
			{
				prompt: "Which phrase implies minimizing fencing?",
				type: "select",
				options: ["least fencing","limit","horizontal","approximate"],
				answer: "least fencing"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Quantity optimized?",
				type: "select",
				options: ["perimeter","area","velocity","volume"],
				answer: "perimeter"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["A = lw = 600","P = 2l + w","V = (4/3)πr³","A = πr²"],
				answers: ["A = lw = 600","P = 2l + w"]
			}
		],
		explanation: "‘Least fencing’ → minimize perimeter with area constraint."
	},

	// 9–11 Motion (Kinematics)
	{
		text: "A particle moves with position s(t) = 4t² − 2t. When is the particle at rest?",
		questions: [
			{
				prompt: "Which keyword indicates zero velocity?",
				type: "select",
				options: ["at rest","largest","approximate","limit"],
				answer: "at rest"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Motion (Kinematics)"
			},
			{
				prompt: "What variable is set to zero?",
				type: "select",
				options: ["velocity","acceleration","area","limit"],
				answer: "velocity"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["v(t) = s'(t)","a(t) = v'(t)","V = (4/3)πr³","A = lw"],
				answers: ["v(t) = s'(t)"]
			}
		],
		explanation: "‘At rest’ → v(t)=0 where v(t)=s′(t)."
	},
	{
		text: "If s(t)=t³ − 6t² + 9t, when is the particle speeding up?",
		questions: [
			{
				prompt: "Which keyword refers to motion acceleration?",
				type: "select",
				options: ["speeding up","approximate","limit","largest"],
				answer: "speeding up"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Motion (Kinematics)"
			},
			{
				prompt: "When is an object speeding up?",
				type: "select",
				options: ["velocity and acceleration have same sign","velocity = 0","acceleration = 0","position = 0"],
				answer: "velocity and acceleration have same sign"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["v(t) = s'(t)","a(t) = v'(t)","A = lw","V = (4/3)πr³"],
				answers: ["v(t) = s'(t)","a(t) = v'(t)"]
			}
		],
		explanation: "Speeding up occurs when v and a share the same sign."
	},
	{
		text: "A rock is thrown upward with velocity 20 m/s. How long until it reaches its highest point?",
		questions: [
			{
				prompt: "Which phrase describes motion peak?",
				type: "select",
				options: ["highest point","limit","largest","approximate"],
				answer: "highest point"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Motion (Kinematics)"
			},
			{
				prompt: "Condition at the top?",
				type: "select",
				options: ["velocity = 0","acceleration = 0","area = 0","limit exists"],
				answer: "velocity = 0"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["v(t)=s'(t)","a(t)=v'(t)","s(t)=v₀t−½gt²","A=lw"],
				answers: ["v(t)=s'(t)","a(t)=v'(t)","s(t)=v₀t−½gt²"]
			}
		],
		explanation: "At the top of flight, v = 0."
	},

	// 12–14 Derivative / Tangent
	{
		text: "Find the slope of the tangent line to y = x² + 3x at x = 1.",
		questions: [
			{
				prompt: "Which keyword shows slope context?",
				type: "select",
				options: ["tangent","limit","largest","approximate"],
				answer: "tangent"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Tangent Line"
			},
			{
				prompt: "Quantity found?",
				type: "select",
				options: ["slope","area","velocity","limit value"],
				answer: "slope"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["y' = 2x + 3","y − y₁ = m(x − x₁)","A = lw","V = (4/3)πr³"],
				answers: ["y' = 2x + 3","y − y₁ = m(x − x₁)"]
			}
		],
		explanation: "‘Tangent’ → find f′(x) and use point-slope form."
	},
	{
		text: "Find the point where the tangent to y = x³ is horizontal.",
		questions: [
			{
				prompt: "Which keyword shows flat slope?",
				type: "select",
				options: ["horizontal","largest","limit","approximate"],
				answer: "horizontal"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Derivative / Critical Point","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Critical Point"
			},
			{
				prompt: "Condition for horizontal tangent?",
				type: "select",
				options: ["f'(x)=0","v(t)=0","a(t)=0","limit exists"],
				answer: "f'(x)=0"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["f'(x)=3x²","y − y₁ = m(x − x₁)","A = lw","x² + y² = 100"],
				answers: ["f'(x)=3x²"]
			}
		],
		explanation: "‘Horizontal’ → set derivative equal to zero."
	},
	{
		text: "Find the equation of the tangent line to y = sin(x) at x = π/4.",
		questions: [
			{
				prompt: "Keyword implying tangent?",
				type: "select",
				options: ["tangent","limit","approximate","largest"],
				answer: "tangent"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Tangent Line"
			},
			{
				prompt: "What must be computed first?",
				type: "select",
				options: ["derivative","limit","velocity","surface area"],
				answer: "derivative"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["y' = cos(x)","y − y₁ = m(x − x₁)","A = lw","P = 2l + 2w"],
				answers: ["y' = cos(x)","y − y₁ = m(x − x₁)"]
			}
		],
		explanation: "Find derivative cos(x), then use tangent line formula."
	},

	// 15–16 Linear Approximation
	{
		text: "Estimate √(4.1) using linear approximation.",
		questions: [
			{
				prompt: "Which word shows estimation?",
				type: "select",
				options: ["estimate","limit","largest","velocity"],
				answer: "estimate"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Linear Approximation","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Linear Approximation"
			},
			{
				prompt: "Quantity found?",
				type: "select",
				options: ["approximation","rate","limit","maximum"],
				answer: "approximation"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["dy = f'(x)dx","y − y₁ = m(x − x₁)","V = (4/3)πr³","A = lw"],
				answers: ["dy = f'(x)dx"]
			}
		],
		explanation: "‘Estimate’ → use dy = f′(x)dx for small changes."
	},
	{
		text: "Approximate (1.02)⁵ using differentials.",
		questions: [
			{
				prompt: "Which keyword means small change?",
				type: "select",
				options: ["approximate","limit","largest","per second"],
				answer: "approximate"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Linear Approximation","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Linear Approximation"
			},
			{
				prompt: "What rule is applied?",
				type: "select",
				options: ["power rule","chain rule","quotient rule","limit rule"],
				answer: "power rule"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["dy = f'(x)dx","f'(x)=5x⁴","A = lw","V = (4/3)πr³"],
				answers: ["dy = f'(x)dx","f'(x)=5x⁴"]
			}
		],
		explanation: "Use power rule in differential form."
	},

	// 17–20 Limit Evaluation
	{
		text: "Find the limit as x→3 of (2x² − 18)/(x − 3).",
		questions: [
			{
				prompt: "Which word identifies limit evaluation?",
				type: "select",
				options: ["limit","rate","largest","tangent"],
				answer: "limit"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Simplification method?",
				type: "select",
				options: ["factor and cancel","power rule","chain rule","integration"],
				answer: "factor and cancel"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["factor numerator","apply L'Hôpital's Rule","A = lw","V = (4/3)πr³"],
				answers: ["factor numerator"]
			}
		],
		explanation: "‘Limit as x→3’ → factor numerator to remove discontinuity."
	},
	{
		text: "As x approaches 0, find limit of sin(x)/x.",
		questions: [
			{
				prompt: "Which phrase shows approaching behavior?",
				type: "select",
				options: ["as x approaches","largest","approximate","fast"],
				answer: "as x approaches"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Known result?",
				type: "select",
				options: ["1","0","∞","does not exist"],
				answer: "1"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["limit sin(x)/x = 1","A = lw","V = (4/3)πr³","P = 2l + 2w"],
				answers: ["limit sin(x)/x = 1"]
			}
		],
		explanation: "Fundamental trig limit → sin(x)/x = 1 as x→0."
	},
	{
		text: "Find limit of (x² − 1)/(x − 1) as x→1.",
		questions: [
			{
				prompt: "Which word identifies limit evaluation?",
				type: "select",
				options: ["limit","largest","approximate","per second"],
				answer: "limit"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Simplification method?",
				type: "select",
				options: ["factor numerator","chain rule","derivative","integration"],
				answer: "factor numerator"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["x² − 1 = (x − 1)(x + 1)","A = lw","V = (4/3)πr³","dy = f'(x)dx"],
				answers: ["x² − 1 = (x − 1)(x + 1)"]
			}
		],
		explanation: "Factor numerator and cancel common term."
	},
	{
		text: "Determine if limit of (x² − 9)/(x − 3) exists as x→3.",
		questions: [
			{
				prompt: "Which keyword identifies limit?",
				type: "select",
				options: ["limit","largest","fastest","approximate"],
				answer: "limit"
			},
			{
				prompt: "Type of problem?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Possible issue?",
				type: "select",
				options: ["division by zero","negative slope","missing variable","increasing area"],
				answer: "division by zero"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["x² − 9 = (x − 3)(x + 3)","A = lw","dy = f'(x)dx","V = (1/3)πr²h"],
				answers: ["x² − 9 = (x − 3)(x + 3)"]
			}
		],
		explanation: "At x=3, denominator = 0 → removable discontinuity after factoring."
	}
];
