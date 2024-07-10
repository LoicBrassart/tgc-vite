# Backend

## S07 - Tests

### E2E Tests - Playwright

- Initialize PWright in a new "e2e" folder
  - `npm init playwright@latest` (default options)
  - replace the content of e2e/tests/example.spec.ts with unit tests for our app
  - `npx playwright test`
- Dockerize e2e
  - Copy compose.yaml into a new `compose.e2e.yaml` file
  - Add a "e2e" service using Playwright once the other services are up
  - Add a Dockerfile in `e2e` (the only folder you need is `tests`)
- Fix and bump misc files
- Fix seed script
- Fix and bump other files (more than I thought!)
