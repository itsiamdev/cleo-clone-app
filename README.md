# Cleo Clone App

> The AI financial assistant that talks to you about money. Honest, sharp, always there.

A complete clone of the Cleo mobile app, built with modern technologies to deliver a personalized financial experience through natural conversations.

## 🌟 Overview

Cleo is a revolutionary financial management app that transforms how you interact with your money. Instead of boring charts and spreadsheets, you get a friendly AI assistant that talks to you about finances in a natural language, offering advice, automated savings, and total transparency.

## ✨ Key Features

### 🚗 **Autopilot**
- **Smart Saving**: Automatically moves the right amount on the right day
- **Set-and-forget**: Set it once and forget about it
- **Visible Progress**: Watch your savings grow over time

### 🧠 **Money IQ**
- **Conversational Analytics**: Chat with AI about your spending
- **Honest Feedback**: See exactly where your money goes
- **Personalized Recommendations**: Set limits and budgets through dialogue

### 💳 **The Card**
- **Smart Card**: Built-in budgeting and real-time insights
- **Zero Hidden Fees**: Complete transparency
- **Instant Control**: Manage everything with one tap

## 🛠️ Technologies Used

### Frontend
- **React 19** with advanced Hooks
- **TypeScript** for strict typing
- **Tailwind CSS** + **shadcn/ui** for components
- **Radix UI** - accessible components
- **Framer Motion** - smooth animations

### Architecture
- **TanStack Router** - type-safe routing
- **TanStack React Query** - state management and synchronization
- **TanStack React Start** - full-stack framework

### Utilities
- **Zod** - schema validation
- **React Hook Form** + **Zod** - typed forms
- **Date-fns** - date manipulation
- **Recharts** - data visualization

## 🚀 Installation and Running

### Prerequisites
- Node.js (v20+ recommended)
- npm / yarn / pnpm
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/[user]/cleo-clone-app.git
cd cleo-clone-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run in development mode**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Vercel

1. **Push to GitHub** (required for Vercel Git integration):
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[user]/cleo-clone-app.git
git push -u origin main
```

2. **Import project on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" → "Import Git Repository"
   - Select your GitHub repository

3. **Configure project**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build:vercel` (optional - default `npm run build` works)
   - Output Directory: `dist/client/client`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Your app will be live at `https://[project-name].vercel.app`

**Manual Vercel CLI deployment** (alternative):
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

#### Quick Deploy (one-time setup)

1. **Install gh-pages** (already added as dependency):
```bash
npm install gh-pages --save-dev
```

2. **Update repository name** in `package.json` - Replace `[username]` in the `homepage` field with your GitHub username:
```json
"homepage": "https://<your-username>.github.io/cleo-clone-app",
```

3. **Deploy using GitHub Actions (recommended)**:
   - Push your code to GitHub
   - Go to **Settings → Pages** in your repository
   - Under "Build and deployment", select **GitHub Actions** as the source
   - Select the `main` branch → `/ (root)` folder
   - The workflow will automatically build and deploy on every push to `main`

4. **Or deploy manually**:
```bash
npm run predeploy:gh
npm run deploy:gh
```

5. **Enable GitHub Pages**:
   - Repository → Settings → Pages
   - Source: **GitHub Actions**
   - Your site will be available at: `https://<your-username>.github.io/cleo-clone-app`

## 📋 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Radix + shadcn)
│   └── site/           # Site-specific components
├── routes/             # Application routes
├── lib/
│   └── utils.ts        # Utilities and helper functions
├── hooks/              # Custom hooks
├── styles.css          # Global styles
└── router.tsx          # Router configuration
```

## 🎨 Design and UX

- **Dark Mode Interface**: Optimized to reduce eye strain
- **Smooth Animations**: Framer Motion for natural transitions
- **Responsive Design**: Works perfectly on all devices
- **Accessibility**: Built with WCAG standards using Radix UI

## 🤖 How the AI Works

The app simulates interaction with a virtual financial assistant through:

1. **Chat Bubbles**: Messages displayed in conversational style
2. **Phone Mock**: Visualization in mobile device context
3. **Contextual Feedback**: Personalized responses based on scenarios

## 📊 Statistics

- **1M+** Users
- **£280M** Saved
- **4.8★** App Store Rating

## 🔧 Configuration

### ESLint
```bash
npm run lint
```

### Prettier
```bash
npm run format
```

### TypeScript
Automatic type-checking during development

## 🌐 Deployment

The app is configured for Cloudflare Pages:
- Optimized build with Vite
- Integrated Cloudflare plugins
- Ready for SSR and edge functions

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more details.

## 📞 Contact

Project created as a case study to demonstrate modern technology capabilities in web application development.

## ⭐ Show Your Support

If you liked this project, give it a star ⭐️!

---