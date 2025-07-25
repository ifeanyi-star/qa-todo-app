# Test Plan: React + Node.js Todo App

## Objective
To validate core functionality of a simple task management web app through automated UI and API testing.

## Scope
- Functional UI testing using Playwright
- API request validation using Supertest

## Features Tested
- User login (positive & negative)
- Create, Read, Update, Delete (CRUD) tasks

## Tools Used
- Playwright for UI testing
- Supertest + Jest for API testing

## How to Run Tests

### UI Tests
```bash
npx playwright install
npx playwright test
