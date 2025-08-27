# 🚀 Sagar Waghmare - Personal Portfolio Website

A modern, responsive, and high-performance full-stack portfolio website showcasing my skills, projects, achievements, and experience as a Full Stack Developer. Built with React, TypeScript, and Node.js with a focus on performance, accessibility, and user experience.

![Portfolio Preview](client/public/logo.png)

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: CSS transitions and hover effects for enhanced user experience
- **Accessible UI**: WCAG compliant with proper ARIA labels and keyboard navigation

### ⚡ **Performance Optimized**
- **Lazy Loading**: Images and components load on demand for faster initial page load
- **Optimized Assets**: Compressed images and efficient bundling with Vite
- **SEO Ready**: Custom SEO component with meta tags and structured data
- **Fast Loading**: Optimized React components and efficient state management

### 💼 **Portfolio Sections**
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Me**: Professional background and personal introduction
- **Projects Showcase**: Interactive project cards with live demos and source code
- **Skills & Achievements**: Visual skill roadmap and professional achievements
- **Education**: Academic background and certifications
- **Contact Form**: Functional contact form with backend email integration

### 🔧 **Advanced Features**
- **Real Contact Form**: Backend API with email sending functionality
- **Project Filtering**: Dynamic project showcase with "Read More" functionality
- **Performance Monitoring**: Custom hooks for performance tracking
- **Type Safety**: Full TypeScript implementation for better code quality

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Smooth animations and interactions (optional)
- **Lucide React** - Beautiful and customizable SVG icons

### **Backend**
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast and minimal web framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variables management

### **Tools & Libraries**
- **ESLint** - Code linting and formatting
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **React Intersection Observer** - Efficient scroll-based animations
- **Typed.js** - Dynamic typing animations

## 📁 Project Structure

```
sagar-portfolio/
├── client/                          # Frontend React application
│   ├── public/
│   │   └── logo.png                 # Site favicon and logo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Assets/              # Images, PDFs, and static files
│   │   │   │   ├── ProjectsImg/     # Project screenshots
│   │   │   │   ├── skillsIcons/     # Technology icons
│   │   │   │   ├── profile.png      # Profile picture
│   │   │   │   └── SagarWaghmare.pdf # Resume/CV
│   │   │   ├── layout/              # Layout components
│   │   │   │   ├── Navbar.tsx       # Navigation header
│   │   │   │   └── Footer.tsx       # Site footer
│   │   │   ├── sections/            # Main page sections
│   │   │   │   ├── Hero.tsx         # Landing section
│   │   │   │   ├── About.tsx        # About me section
│   │   │   │   ├── Projects.tsx     # Projects showcase
│   │   │   │   ├── Achievements.tsx # Achievements display
│   │   │   │   ├── Education.tsx    # Education background
│   │   │   │   └── Contact.tsx      # Contact form
│   │   │   └── ui/                  # Reusable UI components
│   │   │       ├── Button.tsx       # Custom button component
│   │   │       ├── ProjectCard.tsx  # Project display card
│   │   │       ├── LazyImage.tsx    # Optimized image loading
│   │   │       ├── SEOHead.tsx      # SEO meta tags
│   │   │       └── ...              # Other UI components
│   │   ├── context/
│   │   │   └── ThemeContext.tsx     # Dark/Light theme provider
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useContactForm.ts    # Contact form logic
│   │   │   ├── useOptimizedScroll.ts # Scroll optimization
│   │   │   └── usePerformance.ts    # Performance monitoring
│   │   ├── App.tsx                  # Main application component
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles
│   ├── .env                         # Frontend environment variables
│   ├── package.json                 # Dependencies and scripts
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── tsconfig.json                # TypeScript configuration
│   └── vite.config.ts               # Vite build configuration
├── server/                          # Backend Node.js application
│   ├── utils/
│   │   └── email.js                 # Email service configuration
│   ├── .env                         # Backend environment variables
│   ├── index.js                     # Express server entry point
│   └── package.json                 # Server dependencies
└── README.md                        # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Gmail account** (for contact form email functionality)

### 1. Clone the Repository

```bash
git clone https://github.com/SagarSuryakantWaghmare/sagar-portfolio.git
cd sagar-portfolio
```

### 2. Setup Environment Variables

#### Frontend Environment (`client/.env`)
```env
# API Configuration
VITE_API_URL=http://localhost:5000

# For production, change to your deployed backend URL:
# VITE_API_URL=https://your-backend-domain.com
```

#### Backend Environment (`server/.env`)
```env
# Email Configuration
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password

# Server Configuration
PORT=5000
```

> **Important**: Use a Gmail App Password, not your regular Gmail password. Enable 2-factor authentication and generate an app password in your Google Account settings.

### 3. Install Dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 4. Run the Development Environment

#### Start the Backend Server
```bash
cd server
npm run dev
```
The API will be available at `http://localhost:5000`

#### Start the Frontend Development Server
```bash
cd client
npm run dev
```
The website will be available at `http://localhost:5173`

## 📧 Contact Form Setup

The contact form integrates with a Node.js backend to send emails via Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account → Security → App passwords
   - Generate a new app password for "Mail"
   - Use this password in your `server/.env` file
3. **Configure Environment Variables** as shown above
4. **Test the Setup** using the contact form or API directly

### API Endpoint
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "Your Name",
  "email": "your.email@example.com",
  "subject": "Subject Line",
  "message": "Your message content"
}
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the frontend**:
   ```bash
   cd client
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service

3. **Update environment variables**:
   - Set `VITE_API_URL` to your deployed backend URL

### Backend Deployment (Render/Railway/Heroku)

1. **Deploy the `server` folder** to your Node.js hosting service

2. **Configure environment variables** on your hosting platform:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT` (usually set automatically by the hosting service)

## 📦 Available Scripts

### Frontend Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend Scripts
| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |

## 🎯 Performance Features

- **Lazy Loading**: Images and components load on scroll
- **Code Splitting**: Automatic route-based code splitting with Vite
- **Optimized Images**: Compressed images with proper alt tags
- **SEO Optimization**: Meta tags, structured data, and semantic HTML
- **Accessible Design**: WCAG compliant with proper ARIA labels

## 🔧 Customization

### Adding New Projects
1. Add project images to `client/src/components/Assets/ProjectsImg/`
2. Update the projects array in `client/src/components/sections/Projects.tsx`

### Modifying Styles
- Global styles: `client/src/index.css`
- Tailwind config: `client/tailwind.config.js`
- Component-specific styles: Use Tailwind classes

### Updating Content
- About section: `client/src/components/sections/About.tsx`
- Skills: `client/src/components/sections/SkillDevelopment.tsx`
- Achievements: `client/src/components/sections/Achievements.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Contact Form Not Working**
   - Verify Gmail App Password is correct
   - Check server logs for email sending errors
   - Ensure CORS is properly configured

2. **Build Errors**
   - Check TypeScript errors with `npm run lint`
   - Verify all imports and file paths are correct
   - Ensure environment variables are set

3. **Styling Issues**
   - Clear browser cache
   - Verify Tailwind CSS is properly configured
   - Check for conflicting CSS classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sagar Suryakant Waghmare**
- Portfolio: [https://sagar-portfolio-dun.vercel.app](https://sagar-portfolio-dun.vercel.app)
- LinkedIn: [https://www.linkedin.com/in/sagarwaghmare44/](https://www.linkedin.com/in/sagarwaghmare44/)
- GitHub: [https://github.com/SagarSuryakantWaghmare](https://github.com/SagarSuryakantWaghmare)
- Email: sagarwaghmare1384@gmail.com

## 🙏 Acknowledgments

- [React](https://react.dev/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Nodemailer](https://nodemailer.com/) - Email sending library
- [Lucide](https://lucide.dev/) - Beautiful SVG icons
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

---

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by Sagar Suryakant Waghmare
