# Next.js 15: useRouter Hook Error Outside Functional Component

This repository demonstrates a common error in Next.js 15 when using the `useRouter` hook outside a functional component. The `useRouter` hook is designed to be used within functional components that utilize the React context. Attempting to use it in other contexts will result in a runtime error.

## The Problem

The provided `about.js` file attempts to use the `useRouter` hook within a non-functional component, leading to an error. The error will be thrown at runtime because the context is not available in this non-functional component.

## The Solution

The `aboutSolution.js` file demonstrates the correct usage of `useRouter` within a functional component.  This solves the error by ensuring the hook is used in the appropriate context.

## How to reproduce the error

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Navigate to `/about`.  You will encounter the runtime error.

## How to fix the error

Modify your component to be a functional component (as in `aboutSolution.js`), ensuring that you can use `useRouter` correctly.