# Ananya R - AI/ML Engineer Portfolio

A modern, fast, responsive personal portfolio website built for **Ananya R**, B.Tech Computer Science student at RV University (graduating 2027) specializing in NLP, Speech AI, and Multimodal Deep Learning.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS transitions & smooth scroll
- **Content Management**: Single-file content architecture at `src/data/content.js`

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

---

## ✏️ How to Edit Content & Links

All site content, metrics, skills, projects, and social links are kept strictly inside **`src/data/content.js`**. You do not need to modify any component code to update your text or links.

### Adding Project GitHub, Live Demo, or Image Links
Inside `src/data/content.js`:
```javascript
{
  id: "emotion-trend-analysis",
  title: "Emotion Trend Analysis...",
  githubUrl: "https://github.com/Ananyar2006/your-repo-name", // Add your real link here
  demoUrl: "https://your-demo-url.com",                         // Add your demo link here
  imageUrl: "https://your-image-host.com/screenshot.png"       // Add screenshot URL or relative path
}
```
*Note: Any project button whose URL is left empty (`""`) is automatically hidden from the UI.*

### Replacing Resume PDF
Replace the placeholder PDF at `public/Ananya_R_Resume.pdf` with your actual resume PDF file, keeping the filename identical.

### Setting up Formspree Contact Form
1. Create a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g. `xpzgkqlz`).
3. Open `src/data/content.js` and update `formspreeEndpoint`:
```javascript
formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID_HERE"
```

### Updating Domain & SEO Meta Tags
To update the placeholder domain (`https://ananyar2006.github.io/`) to your custom domain:
1. Update `seo.domain` in `src/data/content.js`.
2. Update `<meta property="og:url">` and `<meta property="og:image">` in `index.html`.
3. Update the `<loc>` URL in `public/sitemap.xml`.
4. Update the `Sitemap:` entry in `public/robots.txt`.

---

## 📦 Deployment Instructions

### Option A: Deploy to GitHub Pages (Automated via `gh-pages`)

1. Make sure your project is pushed to a GitHub repository (e.g., `Ananyar2006/portfolio`).
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
   *This automatically builds the app (`npm run build`) and pushes the `dist` folder to the `gh-pages` branch.*
3. On GitHub:
   - Go to **Repository Settings** -> **Pages**.
   - Under **Source**, select **Deploy from a branch** and choose `gh-pages` branch with `/ (root)`.
   - Save. Your website will be live at `https://Ananyar2006.github.io/portfolio/`.

### Option B: Deploy to Vercel

1. Push your code to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will give you a production URL (e.g., `ananya-portfolio.vercel.app`).

---

## ⚡ Performance & Accessibility Features

- **Lighthouse Score**: Optimized to score 90+ in Performance, Accessibility, Best Practices, and SEO.
- **Color Contrast**: Compliant with WCAG 2.1 AA standards for high legibility in both light and dark modes.
- **Keyboard Navigation**: Includes visible focus rings (`focus-visible`) and `Escape` key handlers for modals.
- **Mobile First**: Fluid layouts responsive from 360px viewports to large desktop monitors.
