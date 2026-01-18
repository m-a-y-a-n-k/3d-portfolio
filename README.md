# 3D Portfolio

Interactive 3D portfolio website built with **React**, **Three.js (R3F)**, **GSAP**, **Tailwind CSS**, and **Vite**.

![Preview](public/images/readme.png)

## Highlights

- **3D scenes & models** (React Three Fiber + Drei)
- **Smooth animations** (GSAP)
- **Responsive layout** (Tailwind CSS)
- **Contact form** via **EmailJS** (optional)

## Tech stack

- React 19 + Vite
- three / @react-three/fiber / @react-three/drei
- gsap / @gsap/react
- tailwindcss
- @emailjs/browser (optional)

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Environment variables (optional)

Only needed if you want the **Contact** form to send emails via EmailJS.

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run deploy
```

## GitHub Pages

- **Recommended (automatic)**: this repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
  - In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
  - Then push to `main` and it will deploy.
- **Alternative (manual)**: run `npm run deploy` to publish the `dist/` folder to the `gh-pages` branch.
  - In GitHub: **Settings → Pages → Deploy from a branch → gh-pages / (root)**.

## Customize content

- Update site content/data in `src/constants/index.js`
- Replace images in `public/images`
- Replace 3D models in `public/models`
