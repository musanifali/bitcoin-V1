# 🚀 Bitcoin.org Landing Page

A modern, responsive landing page for Bitcoin.org built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project recreates the Ethereum.org design philosophy with Bitcoin-specific content and branding.

![Bitcoin.org Landing Page](https://via.placeholder.com/1200x600/f97316/ffffff?text=Bitcoin.org+Landing+Page)

## ✨ Features

### 🎨 Design & UX
- **Premium Aesthetic**: Clean, minimal design with generous white space
- **Bitcoin Branding**: Orange (#f97316) color scheme with elegant accents  
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark/Light Mode**: Theme switching with system preference detection
- **Smooth Animations**: Framer Motion with `prefers-reduced-motion` support

### 🛠️ Technical Excellence
- **Next.js 14 App Router**: Latest React framework with optimal performance
- **TypeScript Strict Mode**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **shadcn/ui Components**: Accessible, customizable UI components
- **Performance Optimized**: Image optimization, code splitting, and more

### 📱 Accessibility
- **WCAG 2.1 AA Compliant**: High contrast ratios and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Friendly**: Proper ARIA labels and semantic structure
- **Reduced Motion**: Respects user motion preferences

## 🏗️ Project Structure

```
src/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts and metadata
│   └── page.tsx                  # Home page composition
├── components/
│   ├── ui/                       # Reusable UI components (shadcn/ui)
│   │   └── button.tsx           # Button component with variants
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx           # Navigation with theme/language toggles
│   │   └── Footer.tsx           # Site footer with links and utilities
│   └── sections/                 # Page sections
│       ├── Hero.tsx             # Welcome message and key stats
│       ├── QuickActions.tsx     # Action cards (wallet, get BTC, etc.)
│       ├── UseCases.tsx         # Real-world Bitcoin applications
│       ├── Activity.tsx         # Network statistics and metrics
│       ├── Learn.tsx            # Educational content
│       ├── Values.tsx           # Bitcoin core principles
│       ├── Builders.tsx         # Developer resources
│       ├── Community.tsx        # Community involvement
│       ├── EcosystemBlog.tsx    # Latest news and updates
│       ├── Events.tsx           # Conferences and meetups
│       └── JoinBitcoin.tsx      # Contribution opportunities
├── lib/
│   └── utils.ts                 # Utility functions (cn, etc.)
└── styles/
    └── globals.css              # Global styles and CSS variables
```

## 📦 Installation & Setup

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bitcoin-org-landing.git
   cd bitcoin-org-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler |

## 🎯 Page Sections Overview

### 1. 🏠 Header/Navigation
- Global navigation with Learn, Use, Build, Participate, Community
- Search functionality
- Theme toggle (light/dark mode)
- Language selector
- Mobile-responsive hamburger menu

### 2. 🚀 Hero Section
- "Welcome to Bitcoin" headline
- Key value proposition
- Network statistics (21M cap, nodes, years of security)
- Call-to-action buttons

### 3. ⚡ Quick Actions
4-card grid for common user actions:
- **Choose a Wallet**: Get started with Bitcoin storage
- **Get Bitcoin**: Buy or earn your first Bitcoin
- **Use Bitcoin**: Learn to send and receive
- **Start Contributing**: Join the community

### 4. 🌍 Use Cases
Real-world Bitcoin applications:
- Peer-to-peer payments
- Store of value / digital gold
- Remittances and cross-border transfers
- Censorship-resistant donations
- Financial inclusion

### 5. 📊 Network Activity
Live Bitcoin network statistics:
- Hash rate (400+ EH/s)
- Daily transactions (300K+)
- Active nodes (15,000+)
- Links to network explorers and mining guides

### 6. 📚 Learn Section
Educational content and resources:
- What is Bitcoin?
- How Bitcoin works
- Security best practices
- Frequently asked questions

### 7. 💎 Values
Bitcoin's core principles:
- **21M Supply Cap**: Fixed, deflationary monetary policy
- **Decentralization**: No single point of control
- **Open Participation**: Permissionless network access
- **Financial Freedom**: Censorship-resistant transactions

### 8. 👨‍💻 Builders
Developer resources and tools:
- API documentation and guides
- GitHub repositories (Bitcoin Core, ecosystem projects)
- Learning resources and tutorials
- Development tools and libraries

### 9. 🤝 Community
Community involvement opportunities:
- GitHub contributions
- Community forums and discussions
- IRC chat for real-time communication
- Local meetups and events

### 10. 📰 Ecosystem Blog
Curated content and updates:
- Bitcoin.org announcements
- Bitcoin Core release notes
- Developer mailing list highlights
- Foundation updates

### 11. 🎪 Events
Bitcoin conferences and meetups:
- Major conferences (Bitcoin Conference, Adopting Bitcoin)
- Local meetups and workshops
- Developer gatherings
- Educational events

### 12. 🤲 Join Bitcoin.org
Ways to contribute to the project:
- **Translation**: Make Bitcoin.org accessible globally
- **Documentation**: Improve guides and tutorials
- **Design**: Create visual content and improve UX
- **Development**: Contribute code and features

### 13. 📋 Footer
Comprehensive site footer:
- Sitemap with all major sections
- Legal and privacy links
- Theme and language toggles
- Social media and community links
- GitHub repository link

## 🎨 Design System

### Color Palette
```css
/* Primary Bitcoin Colors */
--bitcoin-500: #f97316;  /* Primary orange */
--bitcoin-600: #ea580c;  /* Hover state */
--bitcoin-50: #fff7ed;   /* Light background */

/* Semantic Colors */
--background: hsl(0 0% 100%);      /* Light mode background */
--foreground: hsl(222.2 84% 4.9%); /* Text color */
--muted: hsl(210 40% 96%);         /* Muted background */
--border: hsl(214.3 31.8% 91.4%);  /* Border color */
```

### Typography
- **Display Font**: Cal Sans (headings)
- **Body Font**: Inter (body text)
- **Font Scales**: Fluid typography with responsive scaling

### Spacing & Layout
- **Container**: Max-width 7xl (1280px)
- **Padding**: Responsive padding (4-8 spacing units)
- **Grid**: CSS Grid and Flexbox for layouts

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing & Quality

### Code Quality Tools
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for quality gates

### Performance
- **Next.js Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Dead code elimination
- **Gzip Compression**: Reduced bundle sizes

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature-name`
3. **Make** your changes
4. **Test** your changes: `npm run lint && npm run type-check`
5. **Commit** your changes: `git commit -am 'Add feature'`
6. **Push** to the branch: `git push origin feature-name`
7. **Submit** a pull request

### Code Standards
- Use TypeScript for all new code
- Follow the existing code style (Prettier enforced)
- Add JSDoc comments for public APIs
- Ensure accessibility standards are met
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bitcoin Community**: For creating and maintaining Bitcoin
- **Bitcoin.org**: For the inspiration and educational mission
- **Ethereum.org**: For the design inspiration
- **Vercel**: For the excellent Next.js framework
- **Tailwind CSS**: For the utility-first styling approach

---

**Built with ❤️ for the Bitcoin community**

*Made by developers, for developers. Contributions welcome!*
