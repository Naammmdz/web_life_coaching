# LifeCoach Pro 🧠

A comprehensive personality assessment and life coaching platform built with Next.js, TypeScript, and Tailwind CSS.

![LifeCoach Pro](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-teal?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Current Assessments
- **MBTI (Myers-Briggs Type Indicator)** ✅ - Fully implemented with 20 questions
- **Big Five Personality Test** 🚧 - Coming soon
- **DISC Assessment** 🚧 - Coming soon  
- **Enneagram Test** 🚧 - Coming soon
- **Strengths Assessment** 🚧 - Coming soon

### Key Capabilities
- 🎯 **Scientific Assessments**: Research-backed personality tests
- 📊 **Detailed Results**: Comprehensive personality insights and recommendations
- 💾 **Progress Saving**: Auto-save functionality to prevent data loss
- 📱 **Responsive Design**: Optimized for all devices
- ♿ **Accessibility**: WCAG compliant with screen reader support
- 🎨 **Modern UI**: Beautiful animations and smooth transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lifecoach-pro.git
   cd lifecoach-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── assessments/        # Assessment pages
│   │   ├── mbti/          # MBTI assessment
│   │   ├── big-five/      # Big Five (placeholder)
│   │   ├── disc/          # DISC (placeholder)
│   │   ├── enneagram/     # Enneagram (placeholder)
│   │   └── strengths/     # Strengths (placeholder)
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable UI components
│   ├── assessments/       # Assessment-specific components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # Base UI components (Shadcn/ui)
├── data/                 # Static data and questions
├── lib/                  # Utility functions
├── store/                # Zustand state management
└── types/                # TypeScript type definitions
```

## 🛠 Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 18](https://react.dev/)** - UI library with latest features

### UI & Animation
- **[Shadcn/ui](https://ui.shadcn.com/)** - High-quality component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### State Management
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **Local Storage** - Session persistence

## 🎯 Assessment System

### MBTI Assessment Flow
1. **Start Assessment** - User selects MBTI from dashboard
2. **Answer Questions** - 20 carefully crafted questions with progress tracking
3. **Auto-Save** - Answers saved in real-time to prevent data loss
4. **Calculate Results** - Scientific scoring algorithms determine personality type
5. **View Results** - Comprehensive personality profile with insights

### Question Structure
```typescript
interface MBTIQuestion {
  id: number;
  question: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    text: string;
    weight: string;
    value: number;
  }[];
}
```

### Results Include
- **Personality Type** (e.g., INTJ, ENFP)
- **Type Description** with detailed traits
- **Strengths** and core capabilities
- **Growth Areas** for development
- **Career Insights** and recommendations
- **Relationship Dynamics** and tips

## 🎨 Design System

### Color Palette
- **Primary**: Brand colors for CTAs and highlights
- **Secondary**: Supporting colors for accents  
- **Muted**: Subtle backgrounds and secondary text
- **Destructive**: Error states and warnings

### Components
All components built with:
- ✅ TypeScript interfaces
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Responsive design
- ✅ Consistent styling with Tailwind

## 📱 Mobile Experience

- **Mobile-First Design** - Optimized for touch interfaces
- **Responsive Layouts** - Adapts to all screen sizes
- **Touch-Friendly** - Large tap targets and intuitive gestures
- **Fast Loading** - Optimized for mobile networks

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**
- **Screen Reader Compatible**
- **Keyboard Navigation**
- **High Contrast Support**
- **Semantic HTML**
- **ARIA Labels and Roles**

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Run TypeScript compiler
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```bash
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Optional: Email service
EMAIL_SERVICE_API_KEY=your_api_key
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing scale
- Custom animation utilities
- Dark mode support

## 📊 Performance

### Optimization Features
- ⚡ **Next.js Automatic Optimizations**
  - Code splitting
  - Image optimization
  - Font optimization
- 🎯 **Bundle Optimization**
  - Tree shaking
  - Minimal dependencies
  - Efficient imports
- 💾 **Caching Strategy**
  - Static generation where possible
  - Efficient state management

### Core Web Vitals
- **LCP** < 2.5s - Large Contentful Paint
- **FID** < 100ms - First Input Delay
- **CLS** < 0.1 - Cumulative Layout Shift

## 🔐 Privacy & Security

### Data Handling
- **Local Storage Only** - Assessment data stored locally
- **No Tracking** - Privacy-first approach
- **Secure by Design** - No sensitive data transmission
- **GDPR Compliant** - User data protection

## 🧪 Testing

### Current Status
- ✅ Manual testing for MBTI flow
- ✅ UI component validation
- ✅ Responsive design testing
- ✅ Accessibility validation

### Future Testing
- [ ] Unit tests with Jest
- [ ] Integration tests with Playwright
- [ ] E2E testing for assessment flows
- [ ] Performance testing

## 🚧 Roadmap

### Phase 1: Core Assessments (Q1 2025)
- [ ] Complete Big Five implementation
- [ ] Add DISC assessment
- [ ] Build Enneagram test
- [ ] Create Strengths assessment

### Phase 2: Enhanced Features (Q2 2025)
- [ ] User authentication system
- [ ] Assessment history and tracking
- [ ] PDF result exports
- [ ] Email result sharing

### Phase 3: Advanced Analytics (Q3 2025)
- [ ] User progress tracking
- [ ] Assessment completion analytics
- [ ] Popular insights dashboard
- [ ] Admin content management

### Phase 4: Social & Personalization (Q4 2025)
- [ ] Result sharing capabilities
- [ ] Community insights
- [ ] Personalized recommendations
- [ ] Goal setting and tracking

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- TypeScript for all new code
- ESLint and Prettier for formatting
- Accessibility-first component design
- Comprehensive testing for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Development Status](DEVELOPMENT_STATUS.md) - Detailed implementation status
- [API Documentation](docs/API.md) - Component and utility documentation
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment instructions

### Getting Help
- 📧 Email: support@lifecoachpro.com
- 💬 GitHub Issues: Report bugs and request features
- 📖 Documentation: Comprehensive guides and examples

## 🙏 Acknowledgments

- **Shadcn/ui** for the amazing component library
- **Vercel** for hosting and deployment platform
- **Next.js Team** for the incredible framework
- **Tailwind CSS** for the utility-first approach
- **Open Source Community** for inspiration and tools

---

**Built with ❤️ by the LifeCoach Pro Team**

*Empowering personal growth through self-awareness*
