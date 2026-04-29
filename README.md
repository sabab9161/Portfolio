# Sabab Hussain Portfolio

Professional React + Tailwind portfolio built with Vite and prepared for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. The current GitHub Pages base path is `/Portfolio/` for `https://sabab9161.github.io/Portfolio/`. If your repository name changes, update `base` in `vite.config.js`.

You can also deploy manually with:

```bash
npm run deploy
```
