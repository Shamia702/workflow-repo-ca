# Workflow repo for the CA

A project created for the Workflow Course Assignment.
This repository demonstrates setting up development tools, linting, formatting, and testing (unit and end-to-end) using **Vitest** and **Playwright**.

---

## Getting Started

### Install dependencies
```bash
npm install
```

### Running the project
```bash
npm start
```

This will start the development server (usually at http://localhost:5500).

## Running tests

### Unit Tests (Vitest)
```bash
npm run test:unit
```

### End-to-End Tests (Playwright)
```bash
npm run test:playwright:headed
```

To open the Playwright test report:
```bash
npm run test:playwright:report
```

### Environment Variables

This project uses environment variables.
Create a .env file in the root of your project using this format:

TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=your-password


Also include a .env.example file with the same variable names (but without real values).
Make sure .env is listed in .gitignore.

## Available Scripts

npm start – Start the development server

npm run lint – Run ESLint

npm run format – Format code with Prettier

npm run test:unit – Run unit tests with Vitest

npm run test:playwright – Run Playwright tests

npm run test:playwright:headed – Run Playwright tests in headed mode

npm run test:playwright:report – View Playwright test report

## Technologies Used

JavaScript

HTML / CSS

ESLint

Prettier

Vitest

Playwright

Husky (for pre-commit hooks)

## Author

Shamia Hashim