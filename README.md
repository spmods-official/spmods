# SPMods

SPMods is developed with [React](https://react.dev/), [Redux](https://redux.js.org/), [Tailwind](https://tailwindcss.com/) and [CVA](https://cva.style/docs)

## Getting Started

To get started with this project, make sure you have the following installed:

- [Node.js (LTS version)](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

Then install all the dependencies with:

```sh
pnpm install
```
To start the development server, simply run:

```sh
pnpm dev
```

The application should now be running at [http://localhost:5173]

## Project Structure
    ├── public/                - Static assets
    └── src/
        ├── apis/              - Functions for interacting with external APIs
        ├── app/               - Core application setup
        ├── entry/             - Application entry point and root components
        ├── resources/         - Suspense resources and related loaders
        ├── slices/            - Redux slices
        ├── styles/            - CSS Custom Properties
        ├── types/             - Type definitions
        ├── utils/             - Utility functions and classes
        └── views/
            ├── components/    - Reusable components
            ├── hooks/         - React Hooks for managing state and side effects
            ├── layout/        - Global layout components
            ├── routes/        - Routing related components
            ├── settings/      - Settings page component
            └── static/        - Static pages that do not change frequently
