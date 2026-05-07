# 🚀 Ashish Turan — Futuristic Portfolio Website

A modern, responsive, and futuristic personal portfolio website built for **Ashish Turan**, Founder & Lead Coding Educator at **TuranCodes**. This portfolio highlights technical skills, teaching experience, project-based learning, AI-focused work, education, certifications, and contact information in a clean professional layout.

---

## 🌟 Live Preview

🔗 **Website:** `https://educator-ashish-portfolio.vercel.app/`

> Replace the link above if your GitHub username or repository name is different.

---

## ✨ Key Features

✅ Modern futuristic UI design
✅ Dark mode and light mode toggle
✅ Green/emerald theme for dark mode
✅ Blue/cyan theme for light mode
✅ Fully responsive layout for desktop, tablet, and mobile
✅ AI-style portfolio FAQ assistant
✅ Skills filtering system
✅ Experience timeline
✅ Education and certification sections
✅ TuranCodes services section
✅ Contact section with copy email functionality
✅ Smooth animations using Framer Motion
✅ Professional icons using Lucide React
✅ Built with clean React components

---

## 🧑‍💻 About Me

Hi, I’m **Ashish Turan**, a technology professional, coding educator, and founder of **TuranCodes**. I help students and beginners build strong foundations in **Python, Web Development, Computer Science, AI concepts, and problem-solving** through structured, project-based learning.

My background includes experience in coding education, AI training and evaluation, frontend development, mathematics tutoring, IT support, and computer science education.

---

## 🛠️ Tech Stack

This portfolio is built using:

* ⚛️ **React.js**
* ⚡ **Vite**
* 🎨 **Tailwind CSS**
* 🎭 **Framer Motion**
* 🧩 **Lucide React Icons**
* 🌐 **GitHub Pages**

---

## 📌 Website Sections

### 🏠 Hero Section

A strong personal introduction with professional branding, call-to-action buttons, and profile highlights.

### 🧠 Skills Matrix

Interactive skill filtering across teaching, development, AI, and data-related skills.

### 💼 Experience Timeline

Professional work experience including TuranCodes, Outlier, STEM Montessori Academy of Canada, Natural Kids Movement, and Third Space Learning.

### 🎓 Education

Academic background including Humber Polytechnic, Chitkara University, and Harvard CS50x.

### 🏆 Certifications

Professional and technical certifications related to programming, CSS, responsive design, and computer science fundamentals.

### 🤖 AI FAQ Assistant

A smart portfolio FAQ assistant that answers questions about Ashish’s skills, experience, teaching style, education, TuranCodes, and contact details.

### 📩 Contact Section

Clean contact area with email, LinkedIn, phone, and TuranCodes details.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/TuranAshish/ashish-portfolio.git
```

### 2️⃣ Move Into the Project Folder

```bash
cd ashish-portfolio
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

The website will usually run at:

```bash
http://localhost:5173
```

---

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌍 Deploy on GitHub Pages

### 1️⃣ Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

### 2️⃣ Update `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ashish-portfolio/",
  plugins: [react(), tailwindcss()],
});
```

### 3️⃣ Add Deploy Scripts in `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4️⃣ Deploy

```bash
npm run deploy
```

Then enable GitHub Pages from:

```text
Repository Settings → Pages → Deploy from branch → gh-pages → /root
```

---

## 🔐 Important Note About OpenAI API

The current AI FAQ assistant is frontend-safe and does not expose any private API key.

If you want to connect a real OpenAI API assistant later, the API key should be stored securely in a backend/serverless function, not directly inside React frontend code.

---

## 📁 Project Structure

```text
ashish-portfolio/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📬 Contact

📧 **Email:** [contact.ashish.turan@gmail.com](mailto:contact.ashish.turan@gmail.com)
🔗 **LinkedIn:** [https://www.linkedin.com/in/ashish-turan/](https://www.linkedin.com/in/ashish-turan/)
🌐 **TuranCodes:** [https://turancodes.vercel.app](https://turancodes.vercel.app)

---

## ⭐ Support

If you like this portfolio, feel free to star the repository and share feedback.

---

## 📄 License

This project is created for personal portfolio and educational branding purposes.

© 2026 Ashish Turan. All rights reserved.
