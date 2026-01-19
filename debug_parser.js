// Standalone parser debugger for testing

function gcd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

class Rational {
	constructor(num, den = 1) {
		if (den === 0) throw new Error('Division by zero');
		const g = gcd(Math.abs(num), Math.abs(den));
		this.num = num / g;
		this.den = den / g;
		if (this.den < 0) {
			this.num = -this.num;
			this.den = -this.den;
		}
	}
	
	add(r) {
		if (!(r instanceof Rational)) r = new Rational(r);
		return new Rational(this.num * r.den + r.num * this.den, this.den * r.den);
	}
	
	sub(r) {
		if (!(r instanceof Rational)) r = new Rational(r);
		return new Rational(this.num * r.den - r.num * this.den, this.den * r.den);
	}
	
	mul(r) {
		if (!(r instanceof Rational)) r = new Rational(r);
		return new Rational(this.num * r.num, this.den * r.den);
	}
	
	div(r) {
		if (!(r instanceof Rational)) r = new Rational(r);
		return new Rational(this.num * r.den, this.den * r.num);
	}
	
	toString() {
		if (this.den === 1) return this.num.toString();
		return this.num + '/' + this.den;
	}
}

class Radical {
	constructor(coeffs = {}) {
		this.coeffs = {};
		for (let k in coeffs) {
			if (coeffs[k].num !== 0) {
				this.coeffs[k] = coeffs[k];
			}
		}
	}
	
	static of(n) {
		if (typeof n === 'number') n = new Rational(n);
		const r = new Radical();
		r.coeffs[1] = n instanceof Rational ? n : new Rational(n);
		return r;
	}
	
	add(r) {
		const result = new Radical(this.coeffs);
		for (let k in r.coeffs) {
			result.coeffs[k] = (result.coeffs[k] || new Rational(0)).add(r.coeffs[k]);
			if (result.coeffs[k].num === 0) delete result.coeffs[k];
		}
		return result;
	}
	
	sub(r) {
		const result = new Radical(this.coeffs);
		for (let k in r.coeffs) {
			result.coeffs[k] = (result.coeffs[k] || new Rational(0)).sub(r.coeffs[k]);
			if (result.coeffs[k].num === 0) delete result.coeffs[k];
		}
		return result;
	}
	
	mul(r) {
		if (!(r instanceof Radical)) r = Radical.of(r);
		const result = new Radical();
		
		for (let k1 in this.coeffs) {
			for (let k2 in r.coeffs) {
				const radicand_and_coeff = multiplyRadicands(parseInt(k1), parseInt(k2));
				const radicand = radicand_and_coeff.radicand;
				const outer_coeff = radicand_and_coeff.coeff;
				
				const coeff = this.coeffs[k1].mul(r.coeffs[k2]).mul(outer_coeff);
				result.coeffs[radicand] = (result.coeffs[radicand] || new Rational(0)).add(coeff);
				if (result.coeffs[radicand].num === 0) delete result.coeffs[radicand];
			}
		}
		return result;
	}
	
	div(r) {
		if (!(r instanceof Radical)) r = Radical.of(r);
		
		const denom_keys = Object.keys(r.coeffs).map(x => parseInt(x)).sort();
		
		if (denom_keys.length === 1 && denom_keys[0] === 1) {
			const denom_rational = r.coeffs[1];
			const result = new Radical();
			for (let k in this.coeffs) {
				result.coeffs[k] = this.coeffs[k].div(denom_rational);
			}
			return result;
		}
		
		if (denom_keys.length === 1 && denom_keys[0] !== 1) {
			const radical_key = denom_keys[0];
			const coeff = r.coeffs[radical_key];
			
			const sqrtn = new Radical();
			sqrtn.coeffs[radical_key] = new Rational(1);
			
			const new_num = this.mul(sqrtn);
			const new_den = r.mul(sqrtn);
			
			const den_coeff = new_den.coeffs[1];
			const result = new Radical();
			for (let k in new_num.coeffs) {
				result.coeffs[k] = new_num.coeffs[k].div(den_coeff);
			}
			return result;
		}
		
		if (denom_keys.length === 2 && denom_keys[0] === 1) {
			const radical_key = denom_keys[1];
			const a = r.coeffs[1];
			const b = r.coeffs[radical_key];
			
			const conj = new Radical();
			conj.coeffs[1] = a;
			conj.coeffs[radical_key] = b.mul(new Rational(-1));
			
			const new_num = this.mul(conj);
			const new_den = r.mul(conj);
			
			const den_coeff = new_den.coeffs[1];
			const result = new Radical();
			for (let k in new_num.coeffs) {
				result.coeffs[k] = new_num.coeffs[k].div(den_coeff);
			}
			return result;
		}
		
		throw new Error('Cannot divide: complex denominator');
	}
	
	pow(n) {
		if (n === 0) return Radical.of(1);
		if (n === 1) return new Radical(this.coeffs);
		if (n < 0) return Radical.of(1).div(this.pow(-n));
		if (n > 10) throw new Error('Exponent too large (max 10)');
		
		let result = Radical.of(1);
		for (let i = 0; i < n; i++) {
			result = result.mul(this);
		}
		return result;
	}
	
	toLatex() {
		const keys = Object.keys(this.coeffs).map(k => parseInt(k)).sort((a, b) => a - b);
		if (keys.length === 0) return '0';
		
		let parts = [];
		for (let k of keys) {
			const c = this.coeffs[k];
			const isNeg = c.num < 0;
			const absNum = Math.abs(c.num);
			const cStr = c.den === 1 ? absNum.toString() : '\\frac{' + absNum + '}{' + c.den + '}';
			
			if (k === 1) {
				parts.push(isNeg ? '-' + cStr : cStr);
			} else {
				const radical = k === 2 ? '\\sqrt{2}' : k === 3 ? '\\sqrt{3}' : k === 5 ? '\\sqrt{5}' : '\\sqrt{' + k + '}';
				if (absNum === 1 && c.den === 1) {
					parts.push(isNeg ? '-' + radical : radical);
				} else {
					parts.push((isNeg ? '-' : '') + cStr + radical);
				}
			}
		}
		
		let result = parts[0];
		for (let i = 1; i < parts.length; i++) {
			if (parts[i][0] === '-') {
				result += parts[i];
			} else {
				result += '+' + parts[i];
			}
		}
		return result;
	}
}

function multiplyRadicands(a, b) {
	let prod = a * b;
	let simplified = 1;
	for (let i = 2; i * i <= prod; i++) {
		while (prod % (i * i) === 0) {
			simplified *= i;
			prod /= i * i;
		}
	}
	return { radicand: prod, coeff: new Rational(simplified) };
}

function parseLatex(latex) {
	latex = latex.replace(/\s+/g, '');
	console.log("Cleaned LaTeX:", latex);
	return parseExpression(latex, 0).value;
}

function parseExpression(latex, pos) {
	let left = parseTerm(latex, pos);
	pos = left.pos;
	
	while (pos < latex.length && (latex[pos] === '+' || latex[pos] === '-')) {
		const op = latex[pos];
		pos++;
		const right = parseTerm(latex, pos);
		pos = right.pos;
		left.value = op === '+' ? left.value.add(right.value) : left.value.sub(right.value);
	}
	
	return { value: left.value, pos };
}

function parseTerm(latex, pos) {
	let left = parseFactor(latex, pos);
	pos = left.pos;
	
	while (pos < latex.length) {
		// Check for explicit multiplication operators
		if (latex[pos] === '*' || latex.substr(pos, 5) === '\\cdot') {
			if (latex[pos] === '\\') pos += 5;
			else pos++;
			const right = parseFactor(latex, pos);
			pos = right.pos;
			left.value = left.value.mul(right.value);
		}
		// Check for implicit multiplication (next char is \ or ( or digit)
		else if (pos < latex.length && (latex[pos] === '\\' || latex[pos] === '(' || /\d/.test(latex[pos]))) {
			const right = parseFactor(latex, pos);
			pos = right.pos;
			left.value = left.value.mul(right.value);
		}
		else {
			break;
		}
	}
	
	return { value: left.value, pos };
}

function parseFactor(latex, pos) {
	// Handle unary minus
	let negate = false;
	if (pos < latex.length && latex[pos] === '-') {
		negate = true;
		pos++;
	}
	
	let base = parsePrimary(latex, pos);
	pos = base.pos;
	
	if (negate) {
		base.value = base.value.mul(Radical.of(-1));
	}
	
	if (pos < latex.length && latex[pos] === '^') {
		pos++;
		let exp = '';
		if (latex[pos] === '{') {
			pos++;
			let depth = 1;
			while (depth > 0 && pos < latex.length) {
				if (latex[pos] === '{') depth++;
				else if (latex[pos] === '}') depth--;
				if (depth > 0) exp += latex[pos];
				pos++;
			}
		} else {
			exp = latex[pos];
			pos++;
		}
		
		console.log(`    Exponent: "${exp}"`);
		
		// Parse exponent
		if (exp.includes('\\frac')) {
			// Handle \frac{num}{den} format
			const fracMatch = exp.match(/\\frac\{(\d+)\}\{(\d+)\}/);
			if (fracMatch) {
				const num = parseInt(fracMatch[1]);
				const den = parseInt(fracMatch[2]);
				console.log(`    Fractional exponent: ${num}/${den}`);
				if (den === 2) {
					base.value = sqrtRadical(base.value);
					if (num !== 1) base.value = base.value.pow(num);
				} else {
					throw new Error('Fractional exponents other than 1/2 not supported');
				}
			} else {
				throw new Error('Cannot parse fractional exponent: ' + exp);
			}
		} else if (exp.includes('/')) {
			const [num, den] = exp.split('/').map(x => parseInt(x));
			if (den === 2) {
				base.value = sqrtRadical(base.value);
				if (num !== 1) base.value = base.value.pow(num);
			} else {
				throw new Error('Fractional exponents other than 1/2 not supported');
			}
		} else {
			const n = parseInt(exp);
			console.log(`    Integer exponent: ${n}`);
			base.value = base.value.pow(n);
		}
	}
	
	return { value: base.value, pos };
}

function parsePrimary(latex, pos) {
	console.log(`parsePrimary at pos ${pos}: "${latex.substr(pos, 20)}..."`);
	
	if (pos < latex.length && latex[pos] === '\\') {
		// Handle \left( ... \right)
		if (latex.substr(pos, 5) === '\\left') {
			console.log("  Found \\left");
			pos += 5;
			if (latex[pos] === '(') {
				pos++; // skip the (
				// Find matching \right)
				let depth = 1;
				let exprStart = pos;
				while (depth > 0 && pos < latex.length) {
					if (latex.substr(pos, 6) === '\\left(') {
						depth++;
						pos += 6;
					} else if (latex.substr(pos, 6) === '\\right') {
						depth--;
						if (depth === 0) break;
						pos += 6;
					} else {
						pos++;
					}
				}
				const exprStr = latex.substring(exprStart, pos);
				console.log("  Content between \\left( and \\right):", exprStr);
				if (latex.substr(pos, 6) === '\\right') pos += 6;
				if (latex[pos] === ')') pos++;
				const expr = parseExpression(exprStr, 0).value;
				return { value: expr, pos };
			}
		}
		
		if (latex.substr(pos, 5) === '\\frac') {
			console.log("  Found \\frac");
			let depth = 0, endPos = pos + 5;
			let numPart = '';
			// Find {numerator}
			endPos++;
			depth = 1;
			while (depth > 0) {
				numPart += latex[endPos];
				if (latex[endPos] === '{') depth++;
				else if (latex[endPos] === '}') depth--;
				endPos++;
			}
			numPart = numPart.slice(0, -1);
			
			let denPart = '';
			endPos++;
			depth = 1;
			while (depth > 0) {
				denPart += latex[endPos];
				if (latex[endPos] === '{') depth++;
				else if (latex[endPos] === '}') depth--;
				endPos++;
			}
			denPart = denPart.slice(0, -1);
			
			console.log(`    Numerator: "${numPart}", Denominator: "${denPart}"`);
			
			const num = parseExpression(numPart, 0).value;
			const den = parseExpression(denPart, 0).value;
			return { value: num.div(den), pos: endPos };
		} else if (latex.substr(pos, 5) === '\\sqrt') {
			console.log("  Found \\sqrt");
			let depth = 0, endPos = pos + 6;
			let inner = '';
			depth = 1;
			while (depth > 0) {
				inner += latex[endPos];
				if (latex[endPos] === '{') depth++;
				else if (latex[endPos] === '}') depth--;
				endPos++;
			}
			inner = inner.slice(0, -1);
			console.log(`    Inner: "${inner}"`);
			const rad = parseExpression(inner, 0).value;
			return { value: sqrtRadical(rad), pos: endPos };
		}
	}
	
	if (pos < latex.length && latex[pos] === '(') {
		console.log("  Found (");
		const expr = parseExpression(latex, pos + 1);
		return { value: expr.value, pos: expr.pos + 1 };
	}
	
	const m = /^\d+/.exec(latex.substr(pos));
	if (m) {
		console.log("  Found number:", m[0]);
		return { value: Radical.of(new Rational(parseInt(m[0]))), pos: pos + m[0].length };
	}
	
	throw new Error('Cannot parse at: ' + latex.substr(pos, 20));
}

function sqrtRadical(r) {
	if (Object.keys(r.coeffs).length === 1 && r.coeffs[1]) {
		const n = r.coeffs[1].num;
		const d = r.coeffs[1].den;
		if (d !== 1) throw new Error('Cannot take square root of non-integer');
		
		if (n < 0) throw new Error('Cannot take square root of negative');
		
		let simplified = 1;
		let under = n;
		for (let i = 2; i * i <= under; i++) {
			while (under % (i * i) === 0) {
				simplified *= i;
				under /= i * i;
			}
		}
		
		const result = new Radical();
		result.coeffs[under] = new Rational(simplified);
		return result;
	}
	throw new Error('Cannot take square root of complex radical');
}

// Test
const latex = '\\frac{1}{8\\sqrt{3}}\\left(\\frac{10}{3}\\cdot5^{\\frac{3}{2}}-\\frac{2}{5}\\cdot5^{\\frac{5}{2}}\\right)';
console.log("Input LaTeX:", latex);
console.log("\n=== Starting parse ===\n");
try {
	const result = parseLatex(latex);
	console.log("\nSuccess!");
	console.log("Result coeffs:", result.coeffs);
	console.log("Result LaTeX:", result.toLatex());
} catch(e) {
	console.log("\nError:", e.message);
	console.log(e.stack);
}
