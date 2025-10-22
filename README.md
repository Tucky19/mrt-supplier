# MRT Supplier — Next.js + Tailwind (SEO + GA + Splash)

## Quick Start
1) Install dependencies:
```bash
npm install
```
2) Start dev server:
```bash
npm run dev
```
3) Open http://localhost:3000

## Google Analytics
Create `.env.local` in the project root:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Splash Screen
- Shows every visit
- Typewriter text: "Welcome to MRT Supplier"
- Waits 3s after typing completes, then fades out
- Edit behavior in `components/Splash.tsx`

## Build
```bash
npm run build
npm start
```
