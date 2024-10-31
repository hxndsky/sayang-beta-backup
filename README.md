# Sayang-Beta

## How to
1. Create project 
```
npx create-react-app sayang-beta-backup
cd sayang-beta-backup
```
2. Install
```
npm install -D tailwindcss
npx tailwindcss init
npm install react-icons
npm install react-router-dom
npm install aos
npm install rippleui
npm install @fortawesome/fontawesome-free
```
3. Import Tailwindcss ke index.css jika belum ada
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. Pastikan isi tailwind.config.js sama seperti berikut
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/rippleui/**/*.js',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1600px',
    },
    extend: {},
  },
  plugins: [require("rippleui")],
}
```
4. Cek isi package.json lalu pastikan isi "dependencies" sama dengan ini:
```
{
"dependencies": {
    "@fortawesome/fontawesome-free": "^6.6.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "aos": "^2.3.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "rippleui": "^1.12.1",
    "web-vitals": "^2.1.4"
  },
}
```
5. Run app
```
npm start
```
6. Figma
https://www.figma.com/design/0YLMtLayvN7lYBCiToAYBK/Sayang-Beta-(New)?node-id=21-265&t=LUQ391TkahOnbMpH-1
