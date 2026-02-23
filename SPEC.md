# Nihal Mishra Portfolio - Technical Specification

## 1. Project Overview

**Project Name:** Nihal Mishra Portfolio
**Type:** Personal Portfolio Website
**Core Functionality:** A modern, responsive portfolio showcasing UI/UX design work and technical skills for a designer/MCA student
**Target Users:** Recruiters, hiring managers, potential clients, and collaborators

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections:**
1. Navigation (Fixed)
2. Hero Section
3. About Section
4. Projects Section
5. Skills Section
6. Contact Section
7. Footer

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**

*Light Mode:*
- Background: `#FAFAFA`
- Surface: `#FFFFFF`
- Primary Text: `#0A0A0A`
- Secondary Text: `#525252`
- Accent Primary: `#6366F1` (Indigo)
- Accent Secondary: `#8B5CF6` (Violet)
- Accent Gradient: `linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)`

*Dark Mode:*
- Background: `#0A0A0A`
- Surface: `#171717`
- Primary Text: `#FAFAFA`
- Secondary Text: `#A3A3A3`
- Accent Primary: `#818CF8` (Lighter Indigo)
- Accent Secondary: `#A78BFA` (Lighter Violet)
- Accent Gradient: `linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)`

**Typography:**
- Headings: "Plus Jakarta Sans" (Google Fonts) - weights 600, 700
- Body: "Plus Jakarta Sans" - weight 400, 500
- Hero Name: 72px desktop, 48px mobile
- Section Titles: 48px desktop, 32px mobile
- Body Text: 16px / 1.7 line-height

**Spacing System:**
- Section Padding: 120px vertical (desktop), 80px (mobile)
- Container Max Width: 1280px
- Component Gap: 24px
- Card Padding: 32px

**Visual Effects:**
- Card Shadows: `0 4px 24px rgba(0,0,0,0.08)` (light), `0 4px 24px rgba(0,0,0,0.4)` (dark)
- Glassmorphism on navbar: `backdrop-blur-md bg-white/70` (light), `backdrop-blur-md bg-black/70` (dark)
- Border Radius: 16px (cards), 12px (buttons), 8px (small elements)

### Components

**1. Navigation Bar:**
- Logo/Name on left
- Nav links: About, Projects, Skills, Contact
- Theme toggle button (sun/moon icon)
- Mobile: Hamburger menu with slide-in drawer

**2. Hero Section:**
- Large animated name with gradient text
- Animated title with typing effect
- Tagline paragraph
- Two CTA buttons with hover scale effect
- Floating decorative elements (abstract shapes)

**3. About Section:**
- Two-column layout (image placeholder + content)
- Skills tags with hover effects
- Timeline for education with animated connectors

**4. Projects Section:**
- Tab or filter navigation (optional)
- Card-based project display
- Each card expands to show full case study
- Project cards with image, title, description, tags

**5. Skills Section:**
- Animated progress bars or skill cards
- Categories: Design Tools, Technical Skills, Soft Skills

**6. Contact Section:**
- Contact form (name, email, message)
- Social links with icon buttons
- Background with subtle gradient animation

**7. Footer:**
- Copyright text
- Social links
- Back to top button

### Animations (Framer Motion)

- Page load: Staggered fade-in from bottom
- Scroll: Elements animate in when viewport enters
- Hover: Scale, translate, color transitions
- Theme toggle: Smooth color transitions (0.3s)
- Project cards: Flip or expand animation
- Navigation: Slide-in for mobile menu

---

## 3. Functionality Specification

### Core Features

1. **Dark/Light Mode Toggle:**
   - Persists to localStorage
   - Respects system preference initially
   - Smooth transition between themes

2. **Responsive Navigation:**
   - Desktop: Horizontal nav links
   - Mobile: Hamburger menu with animated drawer
   - Smooth scroll to sections on link click

3. **Contact Form:**
   - Client-side validation
   - Visual feedback on submit
   - Note: Form submission requires backend (can use formspree or similar)

4. **Smooth Scrolling:**
   - All anchor links scroll smoothly
   - Active section highlighting in nav

5. **Performance:**
   - Next.js Image optimization
   - Lazy loading for below-fold content
   - Code splitting

### User Interactions

- Click nav link → Smooth scroll to section
- Click theme toggle → Switch dark/light mode
- Hover project card → Scale up with shadow
- Click project card → Expand to show details
- Submit contact form → Show success message
- Click CTA buttons → Navigate to projects/download resume

### Data Handling

- Static content (no CMS)
- Resume can be a static file in public folder
- Projects data stored in JSON/array in code

---

## 4. Project Structure

```
digital-portfolio/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js
│       ├── Projects.js
│       ├── Skills.js
│       ├── Contact.js
│       └── Footer.js
├── public/
│   ├── resume.pdf (placeholder)
│   └── images/ (project images)
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Navigation is fixed and has glassmorphism effect
- [ ] Hero section displays name with gradient text animation
- [ ] Theme toggle switches between dark/light mode smoothly
- [ ] All sections have proper spacing and typography
- [ ] Project cards display with hover effects
- [ ] Skills section has animated elements
- [ ] Contact form has proper styling and validation
- [ ] Footer displays correctly with social links

### Functional Checkpoints
- [ ] All nav links scroll to correct sections
- [ ] Mobile menu opens/closes properly
- [ ] Theme preference persists on reload
- [ ] All animations are smooth (60fps)
- [ ] Website is fully responsive
- [ ] No console errors on load
- [ ] Lighthouse performance score > 90

### Content Checkpoints
- [ ] Name: Nihal Mishra
- [ ] Title: UI/UX Designer & MCA Student
- [ ] Skills listed: Figma, Power BI, SQL, React, UX Research, Wireframing
- [ ] 3 Projects with full case study details
- [ ] Contact links: Email, LinkedIn, GitHub
