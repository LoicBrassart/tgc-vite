# Backend

## S04 - Docker & Microservices

- Add Dockerfiles to frontend and backend
  - [Backend] Fix an error in seed.ts about date format
  - [Frontend] Downgrade the `graphql-request` version because of lack of support in `@graphql-codegen/typescript-graphql-request`
- Add compose.yaml file to project root describing where to find services' dockerfiles and `.env` file to mutualize configuration
  - Use env variables instead of hardcoded values
  - [Frontend] Add the "--host" option to startup command to allow network connection
  - [Frontend] Environment variables must be prefixed with "VITE\_" to be accessible from our webapp. On the plus side, dotenv is available OotB with Vite, no need to install it
- Replace SQLite with a PostGreSQL database, an Adminer interface for it, and add an NGinx gateway to expose a unique port for our project
  - Add and fix env variables
- Bonus: Add a Makefile to store useful/common commands
- Bonus: Add restart policy, healthchecks & dependencies, and DCompose profiles to compose.yaml
- Fix: Add a volume for data persistence
