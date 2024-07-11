# Backend

## S07 - Tests

_NB: This branch went a bit out of control and contains code meant for other features (auth, cart management, ...), please examine it carefully 🙏_

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

### Unit Tests - Vitest

- Initialize Vitest
  - Install Vitest as a devDependancy in your frontend
  - Add a "test" command in your package.json
- Setup your test file
  - Add a file to contain your function (ie. `src/lib/getTva.ts`), exporting your function
  - Add a file to contain your tests (ie. `src/lib/tests/getTva.spec.ts`), import your function and `test` it
    _To take a TDD approach, write your tests first, **then** try to write an implementation !_
- Setup additional packages for integration tests
  - ⚠️ I added a bunch of unrelated files here, sorry for that!
