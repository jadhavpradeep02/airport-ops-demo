# AirportOps frontend skeleton

React + Vite shell with React Router, Axios, TanStack Query, and SCSS. Business pages are placeholders. No backend is included.

## Run

Use Node.js 22.12+.

```sh
npm install
npm run dev
```

On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

```sh
npm run build
npm run preview
```

Copy `.env.example` to `.env` if you need to change the API URL. `src/api/healthApi.js` exposes `getHealth()` through the shared Axios client. It is not called automatically because this skeleton has no backend.

## Routes

- `/login`
- `/turnaround`
- `/turnaround/:flightId`
- `/turnaround/:flightId/dependencies`
- `/turnaround/:flightId/details`
- `/sla-dashboard`
- `/templates`
- `/reports`
- `*` — Not Found

`/` redirects to the board. Operational routes require an in-memory demo session. Select a role on the login placeholder; no credentials or real authentication are implemented. Refreshing resets the session. Opening a protected URL before login returns you to that URL after demo sign-in.

For flight placeholder navigation, open `/turnaround/demo-flight`.

The desktop sidebar becomes a compact sidebar on tablet and a bottom navigation placeholder below 768px. Flight tabs share a parent layout. Design tokens are in `src/styles/_tokens.scss`.

Production hosting must rewrite application routes to `index.html` for BrowserRouter deep links.

## Deliberately deferred

Flight/task data, business forms, delay capture, dependency graphs, analytics, template editing, real authentication, and backend implementation.
