# DevBloom Lab — React Interview Study Site

A beginner-friendly React + Vite study website using React Router DOM, hooks, forms, arrays/objects, JavaScript DOM concepts, Tailwind-inspired water-green / purple / water-gray styling, and localStorage.

## Features
- Demo login page and sign-out
- Login notification dropdown
- Dashboard with 8 learning topics
- Reading material with syntax and expected behaviour
- 30 interview questions: 10 easy, 10 medium, 10 hard (JavaScript + React)
- Search and filter questions by difficulty/technology
- Expandable solutions, copy syntax, mark completed
- JavaScript playground with editable code and console output
- Progress page saved in localStorage
- Responsive layout for desktop, tablet and mobile
- React Router DOM navigation

## Run on Windows
1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP.
3. Open the extracted `React_Interview_Study_Site` folder in VS Code.
4. Open Terminal and run:
   ```bash
   npm.cmd install
   npm.cmd run dev
   ```
5. Open the local URL Vite prints (usually `http://localhost:5173`).

If PowerShell blocks `npm`, use `npm.cmd` as shown above.

## Important demo limitations
- The login is a front-end demo only. It stores a display name/email in this browser; it does not verify identity or create a secure account.
- localStorage is local to one browser profile and is editable by the user. Do not store passwords, JWT secrets or sensitive personal data there.
- The playground runs plain JavaScript with `new Function` for this local learning demo. Do not paste untrusted code. It is not a secure sandbox and does not run JSX, React hooks or API requests.
- For a real backend project, add a server API, database, server-side input validation, password hashing, session/JWT handling, authorization checks, HTTPS and rate limiting.
- The project uses custom CSS with a Tailwind-inspired palette, not the Tailwind CSS package itself. This keeps setup simple. Tailwind can be added as a next step.

## Main concepts
- `useState`: state and controlled forms
- `useEffect`: storage sync, effects and cleanup
- `useRef`: DOM references and mutable values (in reading material)
- `useContext`: shared values (in reading material)
- React Router DOM: page navigation
- `map`, `filter`, `reduce`, object spread and immutable updates
- localStorage JSON persistence
