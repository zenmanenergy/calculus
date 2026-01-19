# Exact Numeric Simplifier (Calc 2 Focus)

## Purpose

This algorithm exists to solve a very specific and very common problem in **Calculus II and earlier math courses**:

> *Students need exact answers, not decimals, and standard calculators either over-evaluate or obscure structure.*

The goal is **not** to build a full computer algebra system (CAS).  
The goal is to provide a **deterministic, classroom-appropriate simplifier** that mirrors how students are expected to simplify expressions by hand.

---

## What Problem This Algorithm Solves

Most calculators:
- evaluate numerically too early
- return floating-point approximations
- destroy algebraic structure
- hide cancellation and factoring

For example, a calculator might return:

648.4798223537877


when the expected answer is:

\[
\frac{1872\sqrt{3}}{5}
\]

This algorithm ensures:
- **exact arithmetic**
- **symbolic structure is preserved**
- **results match instructor expectations**

---

## Scope (Intentional Constraints)

This algorithm is **deliberately limited**.

It handles:
- integers
- rational numbers (fractions)
- integer powers
- square roots of integers

It does **not** handle:
- variables
- symbolic equations
- trigonometric simplification
- algebraic identities
- rationalization rules unless explicitly coded
- floating-point arithmetic

These constraints are intentional and pedagogically motivated.

---

## Design Philosophy

### 1. Exact Arithmetic Only
- No floating point numbers
- No decimal evaluation
- All operations occur on integers

### 2. Structural Simplification, Not Evaluation
- Cancels common factors
- Applies exponent rules
- Factors and reduces
- Stops before representation changes

### 3. Deterministic Stopping Rules
- Simplification continues **only while an integer invariant strictly decreases**
- No heuristic “guessing”
- No equivalence-only transformations

### 4. Classroom Fidelity
- Matches what students are taught to do by hand
- Produces forms instructors expect
- Avoids CAS “cleverness”

---

## Why This Is Not a CAS

A CAS attempts to:
- reason symbolically
- explore equivalence classes
- apply deep algebraic transformations

That power is **unnecessary and harmful** at the Calc 2 level.

This algorithm:
- applies a **small, explicit rule set**
- avoids ambiguity
- guarantees termination
- prioritizes clarity over generality

---

## Why the UI Matters

The algorithm is paired with:
- raw text input (easy typing)
- formatted math rendering (readability)
- exact output display

This separation ensures:
- students can **type naturally**
- students can **see structure clearly**
- the algorithm never interferes with input

---

## Intended Use Cases

- Calculus I / II homework checking
- Exam practice tools
- Teaching demonstrations
- Student-built math utilities
- Situations where *exact form matters more than numeric value*

---

## Non-Goals

This project explicitly does **not** aim to:
- replace Wolfram Alpha
- solve symbolic equations
- simplify arbitrary expressions
- guess user intent
- “outsmart” students

---

## Summary

This algorithm exists because:

> **Exact simplification is a pedagogical task, not a numerical one.**

By limiting scope, freezing rules, and avoiding evaluation, the algorithm produces results that are:
- exact
- readable
- predictable
- appropriate for Calc 2

It does less — and that is precisely why it works.