// Standalone test of the exact arithmetic system

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
		
		throw new Error('Complex denominator division not yet tested');
	}
	
	pow(n) {
		if (n === 0) return Radical.of(1);
		if (n === 1) return new Radical(this.coeffs);
		
		let result = Radical.of(1);
		for (let i = 0; i < n; i++) {
			result = result.mul(this);
		}
		return result;
	}
	
	toString() {
		const keys = Object.keys(this.coeffs).map(k => parseInt(k)).sort((a, b) => a - b);
		let parts = [];
		for (let k of keys) {
			const c = this.coeffs[k];
			if (k === 1) {
				parts.push(`${c.toString()}`);
			} else {
				const rad = `√${k}`;
				parts.push(`${c.toString()}${rad}`);
			}
		}
		return parts.join(' + ').replace(/ \+ -/g, ' - ');
	}
}

function multiplyRadicands(a, b) {
	// √a * √b = √(ab), then simplify
	// Returns { radicand: simplified_radicand, coeff: extracted_perfect_square }
	// So √a * √b = coeff * √radicand
	let prod = a * b;
	let simplified = 1;
	for (let i = 2; i * i <= prod; i++) {
		while (prod % (i * i) === 0) {
			simplified *= i;
			prod /= i * i;
		}
	}
	// Now prod = inner radicand (after simplification), simplified = coefficient
	return { radicand: prod, coeff: new Rational(simplified) };
}

// TEST 1: Simple sqrt
console.log("=== TEST 1: √3 ===");
const sqrt3 = new Radical();
sqrt3.coeffs[3] = new Rational(1);
console.log("√3 =", sqrt3.toString());

// TEST 2: √3 / 3
console.log("\n=== TEST 2: √3 / 3 ===");
const three = Radical.of(3);
const sqrt3_over_3 = sqrt3.div(three);
console.log("√3 / 3 =", sqrt3_over_3.toString());

// TEST 3: √6 (which is 6^{1/2})
console.log("\n=== TEST 3: √6 ===");
const sqrt6 = new Radical();
sqrt6.coeffs[6] = new Rational(1);
console.log("√6 =", sqrt6.toString());

// TEST 4: (√6)^5
console.log("\n=== TEST 4: (√6)^5 ===");
const sqrt6_pow2 = sqrt6.mul(sqrt6);
console.log("(√6)^2 = √6 * √6 =", sqrt6_pow2.toString(), "(should be 6)");
const sqrt6_pow3 = sqrt6_pow2.mul(sqrt6);
console.log("(√6)^3 = 6 * √6 =", sqrt6_pow3.toString(), "(should be 6√6)");
const sqrt6_pow4 = sqrt6_pow3.mul(sqrt6);
console.log("(√6)^4 = 6√6 * √6 =", sqrt6_pow4.toString(), "(should be 36)");
const sqrt6_pow5 = sqrt6_pow4.mul(sqrt6);
console.log("(√6)^5 = 36 * √6 =", sqrt6_pow5.toString(), "(should be 36√6)");

// TEST 5: 2 * (√6)^5
console.log("\n=== TEST 5: 2 * (√6)^5 ===");
const two = Radical.of(2);
const two_times_sqrt6_pow5 = two.mul(sqrt6_pow5);
console.log("2 * (√6)^5 =", two_times_sqrt6_pow5.toString());

// TEST 6: [2 * (√6)^5] / 5
console.log("\n=== TEST 6: [2 * (√6)^5] / 5 ===");
const five = Radical.of(5);
const numerator = two_times_sqrt6_pow5.div(five);
console.log("[2 * (√6)^5] / 5 =", numerator.toString());

// TEST 7: (√3/3) * ([2 * (√6)^5] / 5)
console.log("\n=== TEST 7: (√3/3) * [2 * (√6)^5 / 5] ===");
const part1 = sqrt3_over_3.mul(numerator);
console.log("(√3/3) * [2 * (√6)^5 / 5] =", part1.toString());

// TEST 8: 4 * (√6)^3
console.log("\n=== TEST 8: 4 * (√6)^3 ===");
const sqrt6_pow3_again = sqrt6.pow(3);
console.log("(√6)^3 via pow =", sqrt6_pow3_again.toString());
const four = Radical.of(4);
const part2 = four.mul(sqrt6_pow3_again);
console.log("4 * (√6)^3 =", part2.toString());

// TEST 9: FINAL RESULT
console.log("\n=== TEST 9: FINAL RESULT ===");
const result = part1.sub(part2);
console.log("Final:", result.toString());
console.log("Expected: 72/5√2 - 24√6");
