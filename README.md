# ChainPaye Landing Page

<div align="center">
  <h3>💬 Banking on WhatsApp, Simplified</h3>
  <p>The official landing page for ChainPaye - a revolutionary WhatsApp banking bot that enables instant global money transfers through simple chat commands.</p>
</div>

---

## 📋 Table of Contents

- [About ChainPaye](#about-chainpaye)
- [Landing Page Features](#landing-page-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Components](#components)
- [Development](#development)
- [Build & Deployment](#build--deployment)

---

## 💡 About ChainPaye

**ChainPaye** is a WhatsApp-based banking bot that revolutionizes how people send and receive money globally. No apps to download, no complex interfaces - just chat with our bot on WhatsApp to:

- 💸 **Send Money Globally** - Transfer funds to anyone, anywhere, instantly
- 💱 **Currency Exchange** - Convert between USD, NGN, and other currencies seamlessly
- 🔐 **Secure Transactions** - Bank-grade security with end-to-end encryption
- 📱 **WhatsApp Native** - Works entirely within WhatsApp - no app installation needed
- ⚡ **Instant Processing** - Real-time transfers with immediate confirmations
- 🌍 **Multi-Currency Support** - Handle multiple currencies in one conversation
- 📊 **Transaction History** - Track all your transfers within the chat
- 🤖 **AI-Powered** - Natural language processing for intuitive commands

### How It Works

1. **Start a Chat** - Message ChainPaye on WhatsApp
2. **Simple Commands** - Type natural commands like "send $100 to John"
3. **Instant Transfer** - Money moves in seconds with real-time notifications
4. **Done!** - No apps, no websites, just simple WhatsApp banking

---

## 🎯 Landing Page Overview

This repository contains the **marketing landing page** for ChainPaye, designed to showcase the product's features and drive user adoption. Built with Next.js 16 and React 19, it delivers a premium, high-performance web experience.

### Key Highlights

- ⚡ **Blazing Fast**: Server-side rendering with Next.js 16 for instant page loads
- 🎨 **Premium Design**: Modern UI with smooth animations and micro-interactions
- 📱 **Fully Responsive**: Pixel-perfect across mobile, tablet, and desktop (375px - 1920px+)
- 🌗 **Dark Mode**: Complete theme system with smooth transitions
- ♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- 🎭 **Smooth Scrolling**: Lenis integration for buttery-smooth scroll experiences
- 🎬 **Animated**: Framer Motion for engaging, performant animations
- 📊 **SEO Optimized**: Meta tags, semantic structure, and performance optimization

---

## ✨ Landing Page Features

### Sections & Content

#### **Hero Sections**

- **Primary Hero**: Eye-catching introduction with animated text showcasing ChainPaye's core value proposition
- **Secondary Hero**: Detailed feature highlights with engaging visuals
- **Flip Words Animation**: Dynamic text that cycles through key benefits ("Instant", "Secure", "Global")

#### **Feature Showcase**

- **Interactive Cards**: Highlight key features of the WhatsApp banking bot
  - Send money globally
  - Currency conversion
  - Transaction tracking
  - Security features
- **Hover Effects**: Smooth animations on card interactions
- **Icon Integration**: Lucide and Tabler icons for visual clarity

#### **Process Visualization**

- **Multi-Step Cards**: Step-by-step guide showing how to use ChainPaye
  1. Start a WhatsApp chat
  2. Send simple commands
  3. Complete instant transfers
- **Progressive Disclosure**: Animated transitions between steps
- **Mobile-Optimized**: Touch-friendly interactions

#### **Feature Carousel**

- **Infinite Scroll**: Continuous showcase of platform capabilities
- **Auto-Play**: Smooth, automatic card rotation
- **Responsive Cards**: Adapts to all screen sizes

#### **API Documentation Section**

- **Developer-Focused**: Shows how easy it is to integrate ChainPaye
- **Live Code Snippets**: Syntax-highlighted JavaScript examples
- **Interactive Demo**: Real code showing ChainPaye widget initialization
- **Feature List**:
  - Quick setup (under 30 minutes)
  - Flexible APIs for any payment use case
  - Production-ready implementation
- **CTA Button**: "Get Started" with API integration

#### **Chat Demonstrations**

- **Chat Message Component**: Simulates WhatsApp conversation with the bot
- **Video Integration**: Shows real-world usage scenarios
- **Interactive Elements**: Demonstrates natural language commands

#### **Navigation & Footer**

- **Responsive Navbar**: Adaptive menu with mobile hamburger
- **Theme Toggle**: Switch between light/dark modes
- **Smooth Scroll**: Lenis-powered navigation to sections
- **Comprehensive Footer**: Links, social media, company info

### Technical Features

- **Server-Side Rendering (SSR)**: Fast initial page loads with Next.js
- **Static Generation**: Pre-rendered pages for optimal performance
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Font Optimization**: Self-hosted Manrope with automatic subsetting
- **Code Splitting**: Automatic route-based and component-level splitting
- **CSS Optimization**: Purged Tailwind CSS for minimal bundle size
- **TypeScript**: Full type safety across the entire codebase
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Meta tags, Open Graph, structured data
- **Analytics Ready**: Easy integration with Google Analytics, Mixpanel, etc.

---

## 🛠 Tech Stack

### Core Framework

#### **[Next.js 16.0.4](https://nextjs.org/)** - React Framework

The foundation of the landing page, providing:

- **App Router**: Modern file-based routing with layouts
- **Server Components**: Faster initial page loads
- **Image Optimization**: Automatic image compression and WebP conversion
- **Font Optimization**: Self-hosting and subsetting of Google Fonts
- **SEO**: Built-in meta tag and sitemap support

#### **[React 19.2.0](https://react.dev/)** - UI Library

Latest React version with:

- **Improved Performance**: Faster rendering and reconciliation
- **Server Components**: Better server-side rendering
- **Concurrent Features**: Smoother animations and transitions

#### **[TypeScript 5](https://www.typescriptlang.org/)** - Type Safety

Ensures code quality with:

- **Static Type Checking**: Catch errors before runtime
- **IntelliSense**: Better developer experience with autocomplete
- **Refactoring Safety**: Confident code changes

---

### Styling & UI Framework

#### **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-First CSS

Powers the entire visual design:

- **Utility Classes**: Rapid UI development
- **Custom Design System**: CSS variables for colors, spacing, typography
- **Responsive Design**: Mobile-first breakpoints
- **Dark Mode**: Built-in theme switching
- **JIT Compiler**: Fast builds with on-demand CSS generation

#### **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animation Utilities

Extends Tailwind with pre-built animations:

- **Fade Effects**: Smooth element transitions
- **Slide Animations**: Engaging content reveals
- **Bounce & Pulse**: Attention-grabbing effects
- **Custom Keyframes**: Tailwind-compatible animations

#### **[Radix UI](https://www.radix-ui.com/)** - Accessible Component Primitives

Unstyled, accessible components:

- **[@radix-ui/react-avatar](https://www.radix-ui.com/primitives/docs/components/avatar)**: User profile images with fallbacks
- **[@radix-ui/react-dropdown-menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu)**: Accessible navigation menus
- **[@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot)**: Composition utility for merging props
- **Why Radix?**: WCAG compliant, keyboard navigation, screen reader support

#### **[class-variance-authority (CVA)](https://cva.style/)** - Component Variants

Manages component styling variations:

- **Type-Safe Variants**: Define button sizes, colors, states
- **Composable**: Combine multiple variants
- **IntelliSense**: Autocomplete for variant names

#### **[clsx](https://github.com/lukeed/clsx)** - Conditional Classes

Tiny utility for conditional className strings:

```tsx
clsx("base-class", isActive && "active-class", "another-class");
```

#### **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Class Merging

Intelligently merges Tailwind classes:

- **Conflict Resolution**: Prevents duplicate utilities
- **Component Composition**: Clean prop spreading

```tsx
twMerge("px-2 py-1", "px-4"); // Result: 'py-1 px-4'
```

---

### Animation & Interaction

#### **[Motion (Framer Motion) 12.23.24](https://motion.dev/)** - Animation Library

Production-ready animations:

- **Declarative Animations**: Simple syntax for complex animations
- **Gesture Support**: Drag, hover, tap interactions
- **Layout Animations**: Smooth element position changes
- **Scroll Animations**: Parallax and scroll-triggered effects
- **Performance**: Hardware-accelerated transforms
- **Used For**: Hero animations, card reveals, page transitions

#### **[Lenis 1.3.15](https://lenis.darkroom.engineering/)** - Smooth Scroll

Premium smooth scrolling experience:

- **Buttery Smooth**: 60fps scroll performance
- **Momentum Scrolling**: Natural physics-based easing
- **Scroll Anchoring**: Prevents layout shifts
- **Mobile Disabled**: Prevents conflicts with native scroll
- **Used For**: Desktop smooth scrolling throughout the site

---

### Icons & Visual Assets

#### **[Lucide React 0.554.0](https://lucide.dev/)** - Icon Library

Beautiful, consistent icons:

- **800+ Icons**: Comprehensive icon set
- **Customizable**: Size, color, stroke width
- **Tree-Shakeable**: Only bundle icons you use
- **Used For**: Feature icons (Settings, Braces, Clock), UI elements (ArrowRight)

#### **[Tabler Icons React 3.35.0](https://tabler.io/icons)** - Additional Icons

Complementary icon set:

- **5000+ Icons**: Extended icon library
- **Consistent Style**: Matches Lucide aesthetic
- **Used For**: Specialized icons not in Lucide

---

### Theme Management

#### **[next-themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Dark Mode

Seamless theme switching:

- **System Preference**: Respects OS dark mode setting
- **Persistent**: Remembers user choice in localStorage
- **No Flash**: Prevents theme flicker on page load
- **SSR Compatible**: Works with Next.js server rendering
- **Used For**: Light/dark mode toggle in navbar

---

### Development Tools

#### **[@tailwindcss/postcss 4](https://tailwindcss.com/)** - CSS Processing

Tailwind CSS v4 PostCSS plugin:

- **JIT Compilation**: On-demand CSS generation
- **CSS Optimization**: Minification and purging

#### **ESLint 9** - Code Linting

Code quality enforcement:

- **Next.js Config**: Optimized rules for Next.js
- **Type Checking**: Works with TypeScript
- **Auto-Fix**: Automatic code formatting

---

### Why These Dependencies?

**Performance First**: Every dependency is chosen for bundle size and runtime performance

- Motion: Tree-shakeable, only 30kb gzipped
- Lenis: Lightweight smooth scroll, 5kb gzipped
- Lucide: Icon tree-shaking reduces bundle size

**Accessibility**: Radix UI ensures WCAG compliance without extra effort

**Developer Experience**: TypeScript + Tailwind + CVA = Fast, type-safe development

**User Experience**: Smooth animations (Motion + Lenis) create a premium feel

**Maintainability**: Well-documented, actively maintained libraries with strong communities

---

## 📁 Project Structure

```
chainpaye-landing/
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (landing)/        # Landing page route group
│   │   │   ├── layout.tsx    # Landing layout
│   │   │   └── page.tsx      # Main landing page
│   │   ├── business/         # Business page route
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles & design tokens
│   │
│   ├── components/           # Reusable components
│   │   ├── ui/              # UI primitives
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── flip-words.tsx
│   │   │   ├── infinite-moving-cards.tsx
│   │   │   └── resizable-navbar.tsx
│   │   ├── figma/           # Figma integration components
│   │   ├── Cards.tsx        # Feature cards component
│   │   ├── ChatMessage.tsx  # Chat message component
│   │   ├── ChatVideo.tsx    # Video chat component
│   │   ├── CodeSnipppet.tsx # Code snippet with syntax highlighting
│   │   ├── FeatureCards.tsx # Feature carousel
│   │   ├── ScrollContext.tsx # Lenis scroll provider
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── hero-section-demo-1.tsx
│   │
│   ├── sections/            # Page sections
│   │   ├── ApiSection.tsx   # API documentation section
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Primary hero section
│   │   ├── Hero2.tsx        # Secondary hero section
│   │   ├── MultiStepCard.tsx # Multi-step process cards
│   │   └── Navbar.tsx       # Navigation bar
│   │
│   └── lib/                 # Utilities
│       └── utils.ts         # Helper functions
│
├── .gitignore
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (recommended)
- **pnpm**, **npm**, **yarn**, or **bun** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chainpaye-landing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

---

## 🎨 Design System

### Color Palette

The application uses a comprehensive Material Design 3 inspired color system with full dark mode support.

#### Light Mode

- **Primary**: `#003def` (Blue)
- **Secondary**: `#545f73` (Slate)
- **Tertiary**: `#006c68` (Teal)
- **Error**: `#d32f2f` (Red)
- **Background**: `#ffffff` (White)
- **Surface**: `#ffffff` (White)

#### Dark Mode

- **Primary**: `#7da2ff` (Light Blue)
- **Secondary**: `#bdc2d9` (Light Slate)
- **Tertiary**: `#6fd0c8` (Light Teal)
- **Error**: `#f28b82` (Light Red)
- **Background**: `#121212` (Near Black)
- **Surface**: `#1a1a1a` (Dark Gray)

### Typography

**Font Family**: [Manrope](https://fonts.google.com/specimen/Manrope) - A modern, geometric sans-serif

#### Type Scale (Mobile-First)

| Token         | Size | Line Height | Letter Spacing | Usage             |
| ------------- | ---- | ----------- | -------------- | ----------------- |
| `display-lg`  | 38px | 50px        | -0.02em        | Large headings    |
| `display-md`  | 32px | 42px        | -0.01em        | Medium headings   |
| `display-sm`  | 28px | 36px        | -0.01em        | Small headings    |
| `headline-lg` | 24px | 32px        | -              | Section titles    |
| `headline-md` | 20px | 28px        | -              | Card titles       |
| `headline-sm` | 16px | 26px        | -              | Small titles      |
| `body-lg`     | 15px | 22px        | -              | Large body text   |
| `body-md`     | 13px | 20px        | -              | Default body text |
| `body-sm`     | 11px | 18px        | -              | Small body text   |
| `label-lg`    | 13px | 18px        | 0.05em         | Large labels      |
| `label-md`    | 11px | 16px        | 0.05em         | Default labels    |
| `label-sm`    | 10px | 16px        | 0.05em         | Small labels      |

### Spacing Scale

```css
--spacing-2xs: 2px
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 24px
--spacing-2xl: 32px
--spacing-3xl: 40px
--spacing-4xl: 64px
```

### Border Radius

```css
--radius-xs: 2px
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

### Using Design Tokens

```tsx
// In your components
<h1
  style={{
    fontSize: "var(--font-size-display-md)",
    lineHeight: "var(--line-height-display-md)",
    letterSpacing: "var(--letter-spacing-display-md)",
  }}
>
  Heading Text
</h1>
```

---

## 🧩 Components

### Sections

#### **ApiSection**

Interactive API documentation section with:

- Responsive two-column layout (mobile: stacked, desktop: side-by-side)
- Feature list with colored icons
- Syntax-highlighted code snippet
- CTA button
- Uses CSS custom properties for consistent typography

#### **Hero & Hero2**

Primary landing sections featuring:

- Animated text with flip words effect
- Engaging visuals and CTAs
- Responsive layouts

#### **MultiStepCard**

Step-by-step process visualization:

- Progressive disclosure
- Animated transitions
- Mobile-optimized

#### **Navbar**

Responsive navigation with:

- Mobile hamburger menu
- Theme toggle
- Smooth scroll integration

#### **Footer**

Comprehensive footer with:

- Links and social media
- Company information
- Responsive grid layout

### UI Components

#### **Cards**

Feature showcase cards with:

- Hover effects
- Gradient backgrounds
- Icon integration

#### **CodeSnippet**

Syntax-highlighted code display:

- Line numbers
- Color-coded syntax
- Dark/light theme support
- Rounded corners with glassmorphism

#### **FeatureCards (CardCarousel)**

Infinite scrolling carousel:

- Auto-play animation
- Smooth transitions
- Responsive card sizing

#### **ChatMessage & ChatVideo**

Interactive demo components:

- Real-time chat simulation
- Video integration
- Responsive design

### Utilities

#### **ScrollContext**

Lenis smooth scroll provider:

- Buttery-smooth scrolling
- Disabled on mobile (prevents conflicts)
- React context integration

#### **ThemeProvider**

Dark/light mode management:

- System preference detection
- Persistent theme selection
- Smooth transitions

---

## 💻 Development

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Formatting**: Consistent code style across the project

### Best Practices

1. **Component Organization**

   - Keep components small and focused
   - Use composition over inheritance
   - Extract reusable logic into custom hooks

2. **Styling**

   - Use Tailwind utilities first
   - Leverage CSS custom properties for design tokens
   - Avoid inline styles except for dynamic values

3. **Performance**

   - Use `"use client"` directive only when necessary
   - Optimize images with Next.js Image component
   - Implement code splitting for large components

4. **Accessibility**
   - Use semantic HTML
   - Ensure keyboard navigation
   - Provide ARIA labels where needed
   - Maintain sufficient color contrast

### Adding New Components

1. Create component in appropriate directory (`components/` or `sections/`)
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Use design tokens from `globals.css`
5. Ensure responsive design
6. Test in both light and dark modes

### Customizing the Design System

Edit `src/app/globals.css` to modify:

- Color palette (`:root` and `.dark` selectors)
- Typography scale
- Spacing values
- Border radius values

---

## 🏗 Build & Deployment

### Production Build

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/chainpaye-landing)

### Environment Variables

Currently, no environment variables are required. If you add external APIs or services, create a `.env.local` file:

```bash
# .env.local
NEXT_PUBLIC_API_URL=your_api_url
```

### Build Optimization

The project is configured for optimal production builds:

- Automatic code splitting
- Image optimization
- Font optimization (Manrope)
- CSS minification
- JavaScript minification
- Tree shaking

---

## 📱 Responsive Breakpoints

The application uses Tailwind's default breakpoints:

| Breakpoint | Min Width | Usage          |
| ---------- | --------- | -------------- |
| `sm`       | 640px     | Small tablets  |
| `md`       | 768px     | Tablets        |
| `lg`       | 1024px    | Laptops        |
| `xl`       | 1280px    | Desktops       |
| `2xl`      | 1536px    | Large desktops |

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

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

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lenis](https://lenis.darkroom.engineering/) - Smooth scroll
- [Lucide](https://lucide.dev/) - Beautiful icons

---

## 📞 Support

For questions or support, please contact the development team.

---

<div align="center">
  <p>Built with ❤️ using Next.js and React</p>
  <p>© 2025 ChainPaye. All rights reserved.</p>
</div>
