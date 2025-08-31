# Contributing to sagar-portfolio

Thank you for your interest in improving this portfolio! Your contributions—big or small—are what keep this project growing. Feel free to submit updates, bug fixes, or enhance documentation. Let’s collaborate!

---

## Getting Started

1. **Fork the Repository**
   - Click the **Fork** button on the top right of the GitHub page.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/SagarSuryakantWaghmare/sagar-portfolio.git
   cd sagar-portfolio
````

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Install Dependencies**

   ```bash
   # Frontend
   cd client && npm install

   # Backend
   cd ../server && npm install
   ```

5. **Set Up Environment**

   * Copy `.env.example` (if available) or create:

     * For frontend (`client/.env`):

       ```
       VITE_API_URL=http://localhost:5000
       ```
     * For backend (`server/.env`):

       ```env
       EMAIL_USER=your_gmail_address@gmail.com
       EMAIL_PASS=your_app_password
       PORT=5000
       ```

6. **Run Locally**

   ```bash
   # Backend
   cd server && npm run dev

   # Frontend (in a separate terminal)
   cd ../client && npm run dev
   ```

   The frontend runs on `http://localhost:5173` and backend on `http://localhost:5000`.

---

## Contribution Workflow

* Make your enhancements or fixes.
* Run tests or check full functionality (e.g., contact form, responsive design).
* Stage and commit your changes:

  ```bash
  git commit -m "Describe your change briefly"
  ```
* Push to your fork:

  ```bash
  git push origin feature/your-feature-name
  ```
* Open a Pull Request (PR) to the `main` branch with a clear title and description of your enhancement.

---

## Areas to Contribute

* **Add Projects**: Add new project visuals under `client/src/components/Assets/ProjectsImg/` and update `Projects.tsx`.
* **Improve Accessibility**: Add proper ARIA attributes, improve keyboard navigation, enhance color contrast.
* **Optimize Performance**: Better lazy loading, optimize images, reduce bundle size.
* **UI/UX Enhancements**: Add new animations (Framer Motion), transitions, themes, or responsive tweaks.
* **Documentation**: Improve README, add screenshots, explain deployment steps.
* **Bug Fixes**: Fix broken layouts, forms, or environment configuration.

---

## Coding & Styling Guidelines

* Adhere to existing styles (React + Tailwind + TypeScript).
* Write clean, well-commented code.
* Run `npm run lint` and fix any linting issues before committing.
* Maintain feature-focused commits.

---

## Support & Communication

* **Issues & PRs**: Use GitHub’s issues to discuss ideas before implementation.
* **Contact**: For major suggestions, feel free to reach out via email or LinkedIn (see project README).

---

## Code of Conduct

By contributing, you agree to the project’s [Code of Conduct](CODE_OF_CONDUCT.md). Let’s keep the environment welcoming, respectful, and inclusive.

---

Thanks for helping make this portfolio shine! ✨

```


