# appscrip
Absolutely 👍 — here’s a **clean, professional, production-ready `README.md`** for your project.

It’s tailored for your full-stack **MERN + Next.js eCommerce UI project** with responsiveness, SEO, filters, toggle logic, and deployment support.

---

## 🛍️ **Mettā Muse — E-Commerce UI Clone**

A modern, pixel-perfect, responsive **e-commerce web application** built using **Next.js (React)**.
This project focuses on **clean UI**, **high performance**, and **SEO optimization**, designed to replicate a premium shopping experience.

---

### 🚀 **Live Demo**

👉 [View on Netlify](https://your-site-name.netlify.app) *(replace after deployment)*

---

## 📦 **Features**

### 🧩 **Frontend**

* Built with **Next.js + React 18**
* Fully **responsive** across all devices
* **Filter toggle system** with dynamic column layout:

  * 3 products per row (when filter visible)
  * 4 products per row (when filter hidden)
* **Favorite (heart) toggle** — instant UI feedback
* **Product grid with loader** until API data is fetched
* **Pixel-perfect Topbar** with “Show / Hide Filter” and “Recommended” dropdown
* **Fully functional accordion filters** (e.g. Ideal For, Occasion, Work, etc.)
* **Dynamic Footer** with instant accordion toggle for mobile
* Optimized **SEO tags & Schema markup**

---

### ⚙️ **SEO & Optimization**

* Page Title & Meta Description
* Proper usage of `<h1>` / `<h2>` hierarchy
* Product Schema (`https://schema.org/Product`)
* Lazy-loaded images with `alt` text & SEO-friendly names
* Accessibility tags (`aria-*`)
* Code-splitting and memoization for performance

---

### 🎨 **Tech Stack**

| Category   | Technology                                 |
| ---------- | ------------------------------------------ |
| Framework  | **Next.js 14**                             |
| UI Library | **React + CSS Modules**                    |
| Icons      | **react-icons**                            |
| Deployment | **Netlify**                                |
| API        | [FakeStore API](https://fakestoreapi.com/) |

---

## 🧠 **Core Logic**

* **Filter Toggle:**
  Hides or shows the left filter column.
  Automatically updates product grid layout (`3 → 4` columns).

* **Responsive Topbar:**
  Displays “Filter” and “Recommended” adaptively below 426px.

* **Footer Accordion:**
  Auto-collapses on small screens with instant toggle — no animation delay.

* **Loader Component:**
  Displays shimmer/loading cards until products are fetched from API.

---

## 🛠️ **Setup & Installation**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/mettamuse-ui.git
cd mettamuse-ui
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Visit → [http://localhost:3000](http://localhost:3000)

---

## 🧱 **Build for Production**

```bash
npm run build
npm run start
```

If using **static export**:

```bash
npm run build && npm run export
```

Your static files will be inside the `out/` folder.

---

## 🌐 **Deployment (Netlify)**

### Using GitHub Integration:

1. Push your code to GitHub.
2. Log into [Netlify](https://app.netlify.com/).
3. Click **"New site → Import from Git"**.
4. Select your repo.
5. Set:

   ```
   Build command: npm run build && npm run export
   Publish directory: out
   ```
6. Click **Deploy Site** 🚀

Your site will be live at
👉 `https://your-project-name.netlify.app`

---

## 📂 **Project Structure**

```
├── components/
│   ├── Filter/
│   ├── Footer/
│   ├── Loader/
│   ├── Main/
│   ├── Products/
│   ├── Topbar/
│   └── ...
├── public/
│   └── images/
│       ├── usa.webp
│       ├── gpay.png
│       └── ...
├── styles/
│   └── globals.css
├── pages/
│   └── index.js
├── package.json
├── netlify.toml
└── README.md
```

---

## 🧩 **Future Improvements**

* Add product detail page
* Add authentication (NextAuth / Firebase)
* Integrate shopping cart & checkout
* Dark mode toggle
* Real API for products

---


