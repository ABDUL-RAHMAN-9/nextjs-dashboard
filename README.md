<h1 align="center">🏛️ Acme Fintech Dashboard</h1>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js" alt="Next.js">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  </a>
</p>

<p align="center">
  A professional-grade administrative dashboard built to master the **Next.js App Router** architecture. This project demonstrates modern full-stack capabilities, focusing on type-safe data fetching, server-side mutations, and optimized user experiences.
</p>

---

## 🛠️ Technical Architecture

This project implements the **"Architect Path,"** utilizing the most advanced features of the Next.js ecosystem:

### 1. Core Framework & Language
*   **Next.js 15 (App Router):** Leveraging Server Components for reduced client-side JavaScript bundle sizes.
*   **TypeScript:** Strict type-checking for enterprise-level stability and developer productivity.

### 2. Data Management & Performance
*   **PostgreSQL (Vercel Postgres):** A relational database layer for complex financial data.
*   **Server-Side Data Fetching:** Optimized database queries performed directly within Server Components.
*   **Streaming & Suspense:** Implementing granular loading states to prevent UI blocking.
*   **Partial Prerendering (PPR):** Combining static and dynamic content for sub-second page loads.

### 3. State & Security
*   **Server Actions:** Direct, secure data mutations without the need for traditional REST API endpoints.
*   **Zod:** Schema-based validation for robust form handling and data integrity.
*   **NextAuth.js:** Secure authentication layer protecting sensitive administrative routes.

---

## 🚀 Learning Milestones (Architect Perspective)

This repository serves as a technical log of my mastery over the following concepts:

- [x] **Optimized UI:** Responsive layout logic using Tailwind CSS and the `clsx` library.
- [x] **Asset Optimization:** Next-generation font and image handling to prevent Layout Shift (CLS).
- [x] **Dynamic Routing:** Nested layouts and parallel routing for complex admin views.
- [x] **Full-Stack Mutations:** Implementing the Create/Update/Delete cycle using Server Actions.
- [x] **SEO & Metadata:** Dynamic metadata generation for enterprise-level search engine optimization.

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ABDUL-RAHMAN-9/nextjs-dashboard.git

2. **Install dependencies (using pnpm):**
   ```bash
    pnpm install

3. **Configure Environment Variables:**
    ```bash
    Rename `.env.example` to `.env`
    ```
- Note: After running this, add your database credentials to the new .env file.
   
4. **Run Development Server:**
   ```bash
    pnpm dev

---

## 👨‍💻 Developer

**[Abdul Rahman](https://github.com/ABDUL-RAHMAN-9)**  
*Full-Stack Developer focusing on Next.js Architecture.*
