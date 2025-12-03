# ChainPaye Landing Page

<div align="center">
  <h3>💬 Banking on WhatsApp, Simplified</h3>
  <p>Modern landing page for ChainPaye - a WhatsApp banking bot enabling instant global money transfers through simple chat commands.</p>
</div>

---

## 📋 Table of Contents

- [About ChainPaye](#about-chainpaye)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Key Features](#key-features)
- [Development](#development)
- [Deployment](#deployment)

---

## 💡 About ChainPaye

**ChainPaye** is a WhatsApp-based banking bot that revolutionizes global money transfers. No apps to download, no complex interfaces - just chat with our bot on WhatsApp.

### Core Features

- 💸 **Send Money Globally** - Instant transfers to anyone, anywhere
- 💱 **Currency Exchange** - Seamless conversion between USD, NGN, and more
- 🔐 **Bank-Grade Security** - End-to-end encryption for all transactions
- 📱 **WhatsApp Native** - Works entirely within WhatsApp
- ⚡ **Real-Time Processing** - Instant transfers with immediate confirmations
- 🌍 **Multi-Currency Support** - Handle multiple currencies in one chat
- 📊 **Transaction History** - Track all transfers within the conversation

### How It Works

1. **Start a Chat** - Message ChainPaye on WhatsApp
2. **Simple Commands** - Type natural commands like "send $100 to John"
3. **Instant Transfer** - Money moves in seconds with real-time notifications

---

## 🛠 Tech Stack

### Core

- **[Next.js 16.0.4](https://nextjs.org/)** - React framework with App Router, SSR, and image optimization
- **[React 19.2.0](https://react.dev/)** - UI library with server components and concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and enhanced developer experience

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS with JIT compilation
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled component primitives
  - `@radix-ui/react-avatar` - User profile images with fallbacks
  - `@radix-ui/react-dropdown-menu` - Accessible navigation menus
  - `@radix-ui/react-slot` - Component composition utility
- **[class-variance-authority](https://cva.style/)** - Type-safe component variants
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Intelligent Tailwind class merging

### Animation & Interaction

- **[Motion (Framer Motion) 12.23.24](https://motion.dev/)** - Production-ready animations with gesture support
- **[Lenis 1.3.15](https://lenis.darkroom.engineering/)** - Buttery-smooth scroll (desktop only)

### Icons & Theme

- **[Lucide React 0.554.0](https://lucide.dev/)** - 800+ beautiful, tree-shakeable icons
- **[Tabler Icons React 3.35.0](https://tabler.io/icons)** - 5000+ additional icons
- **[next-themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Dark mode with system preference support

### Development Tools

- **[@tailwindcss/postcss 4](https://tailwindcss.com/)** - CSS processing and optimization
- **[tw-animate-css 1.4.0](https://www.npmjs.com/package/tw-animate-css)** - Pre-built Tailwind animations
- **[ESLint 9](https://eslint.org/)** - Code linting with Next.js config

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm**, **npm**, **yarn**, or **bun**

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd chainpaye-landing

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
pnpm dev      # Development server with hot reload
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## 📁 Project Structure

```
chainpaye-landing/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── (landing)/        # Landing page route group
│   │   │   ├── layout.tsx    # Landing layout
│   │   │   └── page.tsx      # Main landing page
│   │   ├── business/         # Business page route
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles & design tokens
│   │
│   ├── components/           # Reusable components
│   │   ├── ui/              # UI primitives (avatar, button, card, etc.)
│   │   ├── providers/       # Context providers (theme, scroll)
│   │   ├── Cards.tsx        # Feature cards
│   │   ├── ChatMessage.tsx  # Chat message component
│   │   ├── ChatVideo.tsx    # Video chat component
│   │   └── CodeSnipppet.tsx # Syntax-highlighted code
│   │
│   ├── sections/            # Page sections
│   │   ├── ApiSection.tsx   # API documentation
│   │   ├── FeatureCards.tsx # Feature carousel
│   │   ├── Footer.tsx       # Footer
│   │   ├── Hero.tsx         # Primary hero
│   │   ├── Hero2.tsx        # Secondary hero
│   │   ├── MultiStepCard.tsx # Multi-step process
│   │   ├── Navbar.tsx       # Navigation
│   │   └── StepsCard.tsx    # Steps component
│   │
│   └── lib/
│       └── utils.ts         # Helper functions
│
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md
```

---

## 🎨 Design System

### Color Palette

Material Design 3 inspired color system with full dark mode support.

**Light Mode:**

- Primary: `#003def` (Blue)
- Secondary: `#545f73` (Slate)
- Tertiary: `#006c68` (Teal)
- Background: `#ffffff`

**Dark Mode:**

- Primary: `#7da2ff` (Light Blue)
- Secondary: `#bdc2d9` (Light Slate)
- Tertiary: `#6fd0c8` (Light Teal)
- Background: `#121212`

### Typography

**Font:** [Manrope](https://fonts.google.com/specimen/Manrope) - Modern geometric sans-serif

**Type Scale:**

| Token         | Size | Line Height | Usage             |
| ------------- | ---- | ----------- | ----------------- |
| `display-lg`  | 38px | 50px        | Large headings    |
| `display-md`  | 32px | 42px        | Medium headings   |
| `display-sm`  | 28px | 36px        | Small headings    |
| `headline-lg` | 24px | 32px        | Section titles    |
| `headline-md` | 20px | 28px        | Card titles       |
| `body-lg`     | 15px | 22px        | Large body text   |
| `body-md`     | 13px | 20px        | Default body text |
| `label-lg`    | 13px | 18px        | Large labels      |

### Spacing & Radius

```css
/* Spacing */
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 24px
--spacing-2xl: 32px
--spacing-4xl: 64px

/* Border Radius */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

### Using Design Tokens

```tsx
<h1
  style={{
    fontSize: "var(--font-size-display-md)",
    lineHeight: "var(--line-height-display-md)",
  }}
>
  Heading Text
</h1>
```

---

## ✨ Key Features

### Landing Page Highlights

- ⚡ **Blazing Fast** - Server-side rendering with Next.js 16
- 🎨 **Premium Design** - Modern UI with smooth animations
- 📱 **Fully Responsive** - Pixel-perfect across all devices (375px - 1920px+)
- 🌗 **Dark Mode** - Complete theme system with smooth transitions
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🎭 **Smooth Scrolling** - Lenis integration for desktop
- 📊 **SEO Optimized** - Meta tags and semantic structure

### Page Sections

1. **Hero Sections** - Animated introductions with flip words effect
2. **Feature Cards** - Interactive cards showcasing key features
3. **Multi-Step Process** - Step-by-step guide with animations
4. **Feature Carousel** - Infinite scrolling showcase
5. **API Documentation** - Developer-focused integration guide with syntax-highlighted code
6. **Chat Demonstrations** - WhatsApp conversation simulations
7. **Responsive Navigation** - Mobile hamburger menu with theme toggle
8. **Comprehensive Footer** - Links, social media, company info

---

## 💻 Development

### Best Practices

**Component Organization:**

- Keep components small and focused
- Use composition over inheritance
- Extract reusable logic into custom hooks

**Styling:**

- Use Tailwind utilities first
- Leverage CSS custom properties for design tokens
- Avoid inline styles except for dynamic values

**Performance:**

- Use `"use client"` directive only when necessary
- Optimize images with Next.js Image component
- Implement code splitting for large components

**Accessibility:**

- Use semantic HTML
- Ensure keyboard navigation
- Provide ARIA labels where needed
- Maintain sufficient color contrast

### Adding New Components

1. Create component in `components/` or `sections/`
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Use design tokens from `globals.css`
5. Ensure responsive design
6. Test in both light and dark modes

### Customizing Design

Edit `src/app/globals.css` to modify:

- Color palette (`:root` and `.dark` selectors)
- Typography scale
- Spacing values
- Border radius values

---

## 🏗 Deployment

### Production Build

```bash
pnpm build    # Create optimized build
pnpm start    # Start production server
```

### Deploy on Vercel

1. Push code to GitHub/GitLab/Bitbucket
2. Import repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and configures build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build Optimizations

- Automatic code splitting
- Image optimization (WebP conversion, lazy loading)
- Font optimization (Manrope self-hosted)
- CSS minification and purging
- JavaScript minification
- Tree shaking

---

## 📱 Responsive Breakpoints

| Breakpoint | Min Width | Usage          |
| ---------- | --------- | -------------- |
| `sm`       | 640px     | Small tablets  |
| `md`       | 768px     | Tablets        |
| `lg`       | 1024px    | Laptops        |
| `xl`       | 1280px    | Desktops       |
| `2xl`      | 1536px    | Large desktops |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Motion](https://motion.dev/) - Animation library
- [Lenis](https://lenis.darkroom.engineering/) - Smooth scroll
- [Lucide](https://lucide.dev/) - Icon library

---

<div align="center">
  <p>Built with ❤️ using Next.js 16 and React 19</p>
  <p>© 2025 ChainPaye. All rights reserved.</p>
</div>
