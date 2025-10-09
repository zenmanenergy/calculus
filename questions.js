const problems = [
	// 1
	{
		text: "A spherical balloon is inflated so that its radius increases at 3 cm/s. How fast is the volume increasing when the radius is 6 cm?",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Related Rates","Optimization","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["increases at","largest","approximate","limit","horizontal"],
				answer: "increases at"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["rate of volume change","maximum area","velocity","limit value"],
				answer: "rate of volume change"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = (4/3)πr³","A = πr²","y = mx + b","P = 2l + 2w"],
				answers: ["V = (4/3)πr³"]
			}
		],
		explanation: "‘Increases at’ shows one variable changing over time → Related Rates."
	},
	// 2
	{
		text: "A ladder 12 ft long is sliding down a wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Related Rates","Optimization","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["slides away","largest","approximate","limit","horizontal"],
				answer: "slides away"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["rate top slides down","maximum area","velocity","limit value"],
				answer: "rate top slides down"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["x² + y² = 144","A = lw","V = (4/3)πr³","P = 2l + 2w"],
				answers: ["x² + y² = 144"]
			}
		],
		explanation: "Movement on both x and y axes → Related Rates using Pythagorean theorem."
	},
	// 3
	{
		text: "A cone is filled with water so that the height of the water increases at 4 cm/s. How fast is the volume increasing when the height is 10 cm?",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Related Rates","Optimization","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["increases at","largest","limit","approximate","horizontal"],
				answer: "increases at"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["rate of volume change","maximum height","velocity","limit value"],
				answer: "rate of volume change"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = (1/3)πr²h","A = πr²","P = 2l + 2w","y = mx + b"],
				answers: ["V = (1/3)πr²h"]
			}
		],
		explanation: "‘Increases at’ → derivative with respect to time for volume of a cone."
	},
	// 4
	{
		text: "A spherical snowball melts so that its radius decreases at 0.3 cm/min. How fast is its volume decreasing when the radius is 8 cm?",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Related Rates","Optimization","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Related Rates"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["decreases at","largest","approximate","limit","horizontal"],
				answer: "decreases at"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["rate of volume change","maximum area","velocity","limit value"],
				answer: "rate of volume change"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = (4/3)πr³","A = 4πr²","y = mx + b","A = lw"],
				answers: ["V = (4/3)πr³"]
			}
		],
		explanation: "‘Decreases at’ indicates a shrinking rate → Related Rates with sphere volume."
	},
	// 5
	{
		text: "Find the rectangle with perimeter 40 m that has the largest possible area.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["largest","increases at","limit","approximate","horizontal"],
				answer: "largest"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["maximum area","rate of change","limit value","slope"],
				answer: "maximum area"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["A = lw","P = 2l + 2w = 40","V = (4/3)πr³","y = mx + b"],
				answers: ["A = lw","P = 2l + 2w = 40"]
			}
		],
		explanation: "‘Largest area’ → Optimization using area and perimeter relations."
	},
	// 6
	{
		text: "A box with square base and open top must hold 500 cm³. Find the dimensions requiring the least material.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["least","limit","approximate","increases at","horizontal"],
				answer: "least"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["minimum surface area","maximum volume","velocity","limit value"],
				answer: "minimum surface area"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["V = x²h = 500","A = x² + 4xh","A = lw","V = (4/3)πr³"],
				answers: ["V = x²h = 500","A = x² + 4xh"]
			}
		],
		explanation: "‘Least material’ → Optimization minimizing surface area."
	},
	// 7
	{
		text: "Find the point on y = x² + 1 that is closest to (0, 4).",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["closest","limit","approximate","increases at","horizontal"],
				answer: "closest"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["minimum distance","maximum area","velocity","limit value"],
				answer: "minimum distance"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["D² = (x−0)² + (y−4)²","y = x² + 1","V = (1/3)πr²h","A = lw"],
				answers: ["D² = (x−0)² + (y−4)²","y = x² + 1"]
			}
		],
		explanation: "‘Closest’ → Optimization minimizing distance."
	},
	// 8
	{
		text: "A rock is thrown upward with velocity 20 m/s. How long until it reaches its highest point?",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Motion (Kinematics)","Related Rates","Optimization","Linear Approximation","Limit Evaluation"],
				answer: "Motion (Kinematics)"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["highest point","largest","limit","approximate","horizontal"],
				answer: "highest point"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["time when velocity = 0","maximum height","limit value","slope"],
				answer: "time when velocity = 0"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["v(t)=v₀−gt","s(t)=v₀t−½gt²","A = lw","V = (4/3)πr³"],
				answers: ["v(t)=v₀−gt","s(t)=v₀t−½gt²"]
			}
		],
		explanation: "‘Highest point’ → v = 0, a motion kinematics idea."
	},
	// 9
	{
		text: "Find the slope of the tangent line to y = x² + 3x at x = 2.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Tangent Line"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["tangent line","limit","approximate","horizontal","largest"],
				answer: "tangent line"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["slope","velocity","rate of change","limit value"],
				answer: "slope"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["y' = 2x + 3","y − y₁ = m(x − x₁)","A = lw","V = (4/3)πr³"],
				answers: ["y' = 2x + 3","y − y₁ = m(x − x₁)"]
			}
		],
		explanation: "‘Tangent line’ → Derivative gives slope at a point."
	},
	// 10
	{
		text: "Find the point where the tangent to y = x³ is horizontal.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Derivative / Critical Point","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Critical Point"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["horizontal","largest","approximate","limit","increases at"],
				answer: "horizontal"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["where f'(x)=0","maximum","limit","velocity"],
				answer: "where f'(x)=0"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["f'(x)=3x²","y − y₁ = m(x − x₁)","A = lw","P = 2l + 2w"],
				answers: ["f'(x)=3x²"]
			}
		],
		explanation: "‘Horizontal tangent’ → derivative equals zero."
	},
	// 11
	{
		text: "Find limit as x→0 of sin(x)/x.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["limit","largest","approximate","horizontal","increases at"],
				answer: "limit"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["limit value","maximum area","velocity","slope"],
				answer: "limit value"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["lim x→0 sin(x)/x = 1","A = lw","V = (4/3)πr³","y = mx + b"],
				answers: ["lim x→0 sin(x)/x = 1"]
			}
		],
		explanation: "‘Limit as x→0’ → Evaluate known trig limit."
	},
	// 12
	{
		text: "Estimate √(9.2) using linear approximation.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Linear Approximation","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Linear Approximation"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["estimate","approximate","limit","largest","increases at"],
				answer: "estimate"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["approximate value","rate of change","maximum area","velocity"],
				answer: "approximate value"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["dy = f'(x)dx","y − y₁ = m(x − x₁)","A = lw","V = (4/3)πr³"],
				answers: ["dy = f'(x)dx"]
			}
		],
		explanation: "‘Estimate’ → Linear Approximation or Differentials."
	},
	// 13
	{
		text: "A car’s velocity increases from 10 m/s to 30 m/s over 4 seconds. Find its average acceleration.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Motion (Kinematics)","Related Rates","Optimization","Linear Approximation","Limit Evaluation"],
				answer: "Motion (Kinematics)"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["velocity increases","largest","limit","approximate","horizontal"],
				answer: "velocity increases"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["average acceleration","maximum velocity","limit value","slope"],
				answer: "average acceleration"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["a = Δv/Δt","v = v₀ + at","A = lw","V = (4/3)πr³"],
				answers: ["a = Δv/Δt","v = v₀ + at"]
			}
		],
		explanation: "‘Velocity increases’ → derivative or rate-of-change concept from motion."
	},
	// 14
	{
		text: "Find the slope of the curve y = 3x² − 4x + 1 at x = −1.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Tangent Line"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["slope","limit","largest","approximate","increases at"],
				answer: "slope"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["derivative","maximum","limit","velocity"],
				answer: "derivative"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["y' = 6x − 4","y − y₁ = m(x − x₁)","A = lw","V = (4/3)πr³"],
				answers: ["y' = 6x − 4"]
			}
		],
		explanation: "‘Slope’ → Derivative of the function at a specific x."
	},
	// 15
	{
		text: "Find the value of lim(x→2) (x²−4)/(x−2).",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["lim(x→2)","largest","approximate","increases at","horizontal"],
				answer: "lim(x→2)"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["limit value","rate","maximum area","velocity"],
				answer: "limit value"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["factor numerator (x−2)(x+2)","A = lw","V = (4/3)πr³","y = mx + b"],
				answers: ["factor numerator (x−2)(x+2)"]
			}
		],
		explanation: "‘lim(x→2)’ → find limit using algebraic simplification."
	},
	// 16
	{
		text: "Find the tangent line to y = cos(x) at x = π/3.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Derivative / Tangent Line","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Derivative / Tangent Line"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["tangent line","limit","approximate","largest","increases at"],
				answer: "tangent line"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["slope and line equation","maximum area","limit value","velocity"],
				answer: "slope and line equation"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["y' = −sin(x)","y − y₁ = m(x − x₁)","A = lw","V = (4/3)πr³"],
				answers: ["y' = −sin(x)","y − y₁ = m(x − x₁)"]
			}
		],
		explanation: "‘Tangent line’ → find derivative and use point-slope form."
	},
	// 17
	{
		text: "A particle moves so that s(t)=t³−6t²+9t. When is the particle at rest?",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Motion (Kinematics)","Optimization","Related Rates","Linear Approximation","Limit Evaluation"],
				answer: "Motion (Kinematics)"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["at rest","limit","largest","approximate","increases at"],
				answer: "at rest"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["when velocity = 0","maximum position","limit value","slope"],
				answer: "when velocity = 0"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["v(t)=s'(t)","a(t)=v'(t)","A = lw","V = (4/3)πr³"],
				answers: ["v(t)=s'(t)"]
			}
		],
		explanation: "‘At rest’ → velocity = 0 → Motion Kinematics."
	},
	// 18
	{
		text: "Approximate (1.01)⁵ using differentials.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Linear Approximation","Optimization","Related Rates","Motion (Kinematics)","Limit Evaluation"],
				answer: "Linear Approximation"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["approximate","limit","largest","horizontal","increases at"],
				answer: "approximate"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["approximation using derivative","limit value","maximum area","velocity"],
				answer: "approximation using derivative"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["dy=f'(x)dx","f'(x)=5x⁴","A = lw","V = (4/3)πr³"],
				answers: ["dy=f'(x)dx","f'(x)=5x⁴"]
			}
		],
		explanation: "‘Approximate’ → Linear Approximation via differentials."
	},
	// 19
	{
		text: "Find limit as x→1 of (x²−1)/(x−1).",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Limit Evaluation","Optimization","Related Rates","Linear Approximation","Motion (Kinematics)"],
				answer: "Limit Evaluation"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["limit","approximate","largest","horizontal","increases at"],
				answer: "limit"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["limit value","rate","maximum area","velocity"],
				answer: "limit value"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["x²−1=(x−1)(x+1)","A = lw","V = (4/3)πr³","y = mx + b"],
				answers: ["x²−1=(x−1)(x+1)"]
			}
		],
		explanation: "‘Limit as x→1’ → factor and cancel common term."
	},
	// 20
	{
		text: "Find the point where y = x³ − 3x² + 2x has a local minimum.",
		questions: [
			{
				prompt: "What type of problem is this?",
				type: "select",
				options: ["Optimization","Related Rates","Linear Approximation","Motion (Kinematics)","Limit Evaluation"],
				answer: "Optimization"
			},
			{
				prompt: "Which words in the problem helped you decide your answer?",
				type: "select",
				options: ["local minimum","largest","limit","approximate","horizontal"],
				answer: "local minimum"
			},
			{
				prompt: "What quantity are we finding?",
				type: "select",
				options: ["x-value where f'(x)=0 and f''(x)>0","rate of change","limit value","velocity"],
				answer: "x-value where f'(x)=0 and f''(x)>0"
			},
			{
				prompt: "Which equation(s) apply?",
				type: "checkbox",
				options: ["f'(x)=3x²−6x+2","f''(x)=6x−6","A = lw","V = (4/3)πr³"],
				answers: ["f'(x)=3x²−6x+2","f''(x)=6x−6"]
			}
		],
		explanation: "‘Local minimum’ → Optimization using first and second derivatives."
	}
];
