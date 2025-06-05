# Contributing

Hi there, ready to help make SPMods even better?

Here are some ways you can contribute:
- Write code
- Improve documentation
- Report bugs
- Submit feature requests

If you're new to some of the technical terms here, fret not. Take it one step at a time and do some self-research. You can also get in touch with us if you need any help.

If you're an experienced developer, you can skip this guide as our development process is similar to other open source projects.

## Technical Prerequisites

A basic familiarity with the following technologies would be very helpful:

- Git: The software we use for collaboration. Learn more about it in the [Atlassian's Git Tutorials](https://www.atlassian.com/git/tutorials).

- JavaScript: The programming language which SPMods uses. Find out more in the [Mozilla's Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

- TypeScript: A superset of JavaScript, i.e. JavaScript but with more features. Check out the [TypeScript Documentation](https://www.typescriptlang.org/docs/home.html).

## Repository Overview

This repository contains all of SPMods's source code. Below is the overall project structure:

### Project Structure
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

## Development Tools 

Before you begin developing, ensure you have the following installed:

- [Node.js (LTS version)](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

The main dependencies used in SPMods include:

- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [Tailwind](https://tailwindcss.com/)
- [CVA](https://cva.style/docs)

## Proposing Changes

If you intend to make any non-trivial change to the UI or implementation of the project, please open an issue first. This allows us to reach an agreement on your proposal before you begin implementation.

If you're only fixing a bug, you can submit a pull request right away but we still recommend opening an issue first with details about what you're fixing. This helps us track bugs more effectively.

## Branch Organisation

We follow a trunk-based development workflow, with all our deployments located in the `main` branch. We will do our best to keep the `main` branch in good shape, with tests passing at all times.

## Your First Pull Request

Tackling your first pull request? Check out this free video series:

[Contributing to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

### Good first issues

To get you familiarised with our contribution process, we have a list of issues which contains bugs/enhancements that have a relatively limited scope.

### Claiming an issue:

Before you begin working on an issue, please ensure that you check the comment thread in case somebody else is already working on it.

- If no one is working on the issue at the moment, please leave a comment indicating that you intend to work on it so that others are aware of it.

- If somebody has claimed an issue but has not made progress in over two weeks, you're free to take it over, just leave a comment to let everyone know.




