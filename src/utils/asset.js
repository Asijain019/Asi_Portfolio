/**
 * Resolve a file from /public against Vite's base URL so it works on any host:
 * Vercel/Netlify (served at "/") and GitHub Pages project sites ("/repo-name/").
 *   asset('/photos/me.jpg') -> '/photos/me.jpg' or './photos/me.jpg'
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
