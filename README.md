# PKS Services Inc. — Premium Cleaning Portfolio

A premium, highly interactive, and responsive portfolio website designed and engineered for **PKS Services Inc.** (also operating under **ProClean Solutions**), a premier commercial, residential, and facility cleaning service provider based in **Markham, Ontario, Canada**.

Built using the cutting-edge **Next.js 16 (React 19)** App Router and styled with the next-generation **Tailwind CSS v4**, this portfolio showcases a modern glassmorphism design, bespoke scroll-triggered animations via **Framer Motion**, and rigorous mobile-first optimizations for seamless customer interaction.

---

## 🌟 Key Features

### 1. Dynamic Interactive Landing Page
* **Hero Banner**: A visually stunning header using an high-fidelity background layout with animated slide-up headings and action triggers.
* **Why Choose Us Grid**: Features cards displaying company attributes (Reliability, Trained Professionals, Eco-Friendliness, Quality Assurance) with spring hover animations.
* **Featured Services Grid**: Summarizes major clean offerings with custom svg icons and scaling transitions.
* **Industries Showcase**: Features hover-zoom interactive cards of served sectors (Corporate Offices, Auto Dealerships, Property Management).
* **Our Seamless Process**: An elegant 4-step interactive timeline tracking our workflow from inspection to final quality assurance checks.
* **Client Testimonials**: A responsive carousal/grid showcasing five-star ratings and client reviews.

### 2. Tailored Service Suite (`/services`)
* **Commercial Cleaning**: Deep dive into Office Cleaning, Auto Dealerships, and Heavy-duty Industrial/Factory sanitation (degreasing, floor scrubbing, vents).
* **Residential Services**: Spotlighting Scheduled Maintenance, exhaustive top-to-bottom Deep Cleans, and tenant Move-in/Move-out details.
* **Bespoke Accordion FAQs**: An elegant custom-built, physics-based FAQ accordion component answering general inquiries about employee screening, eco-friendly supplies, and booking flexibility.

### 3. "About PKS Services" Backstory (`/about`)
* **Core Value Cards**: Highlights Integrity, Consistency, Professionalism, and Customer Satisfaction.
* **Company Milestones**: Over a decade of operational excellence serving over 500+ active clients.
* **Interactive Team Section**: Displays our executive team structure with responsive scale grids.

### 4. Interactive Quote Request (`/contact`)
* **Form Validation**: Strict user validation parameters ensuring clean inquiries.
* **Contact Cards**: Easy click-to-connect details for phones, emails, and address points.
* **Google Maps Integration**: Sleek, modern grayscaled maps mapping coverage limits.

---

## 🎨 Advanced Architecture & Styling Highlights

### ⚡ Lock Dark-Mode Strategy
To preserve the brand's sophisticated primary navy-and-light-gray aesthetic, this project utilizes a custom class-based dark mode control strategy within Tailwind CSS v4:
```css
/* lock dark-mode to class strategy: only activates when .dark-mode-active is on the root */
@variant dark (.dark-mode-active &);
```
This guarantees that all `dark:` classes remain gracefully disabled and clean across all operating system settings, unless a `.dark-mode-active` class is explicitly appended to the document root.

### 📱 Responsive & Accessibility Overrides (`app/globals.css`)
Our stylesheet features custom mobile overrides designed to enhance user experience on smaller form factors:
* **iOS Auto-Zoom Prevention**: Inputs, selects, and textareas enforce a minimum `16px` font size on mobile screens to stop iOS Safari from scaling the viewport upon focus.
* **Optimized Touch Targets**: Clickable elements (links, buttons, navigation pills) enforce a strict minimum size boundary of `44px x 44px` on screen widths under `768px`, ensuring seamless touch ergonomics.
* **Flexible Grids & Layouts**: Adapts grid-cols from 4-columns (desktop) down to 2-columns (tablet) and single-column stacks (mobile) using high-priority overrides.

---

## 🛠️ Tech Stack & Dependencies

| Dependency | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.2.3` | React meta-framework, App Router, Image optimization, SEO defaults |
| **React** | `19.2.4` | Core view library utilizing React 19 concurrent features |
| **Tailwind CSS** | `^4.0.0` | High performance utility styling with CSS theme configurations |
| **Framer Motion** | `^12.38.0` | High-fidelity scroll animations, gestures, and state-based page transitions |
| **Lucide React** | `^0.468.0` | Vector icon suite for clean typography and UI layout |
| **TypeScript** | `^5.0.0` | Strong type checking and developer ergonomics |

---

## 📁 Project Directory Structure

```text
cleaning-portfolio/
├── app/                      # Next.js App Router root
│   ├── about/                # About Us page layout & elements
│   ├── contact/              # Contact form & service areas
│   ├── services/             # Specialized services & FAQ Accordions
│   ├── favicon.ico           # Application favicon
│   ├── globals.css           # Tailwind v4 import, custom layers & media overrides
│   ├── layout.tsx            # Main HTML layout, fonts & meta-headers
│   └── template.tsx          # Fading page transition wrappers
├── components/               # Modular & Reusable layout pieces
│   ├── CTA.tsx               # Primary conversion sections
│   ├── Footer.tsx            # Contact information, quick navigation links & social icons
│   ├── Hero.tsx              # Split responsive hero with animated content & badges
│   ├── Industries.tsx        # Highlight cards serving auto, office, and properties
│   ├── Navbar.tsx            # Scroll-locking glassmorphic navigation header
│   ├── Process.tsx           # Step-by-step progress component
│   ├── ServicesOverview.tsx  # Grid display of primary features
│   ├── Testimonials.tsx      # Star ratings and client comments
│   └── WhyChooseUs.tsx       # Highlights features with spring animations
├── public/                   # Static assets, branding logo & vector badges
│   └── assets/Images/        # High-definition cleaning visual assets
├── utils/                    # Utility scripts
│   └── animations.ts         # Animation metadata config
├── package.json              # App scripts and core packages
└── tsconfig.json             # TypeScript rules configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.x` or higher
* **Package Manager**: `npm` (v10+ recommended)

### Installation
1. Clone the repository to your local system:
   ```bash
   git clone <repository-url>
   cd cleaning-portfolio
   ```

2. Install the system dependencies:
   ```bash
   npm install
   ```

3. Launch the hot-reloading development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

### Production Build & Deployment
To package the app for standard production environments:
```bash
# Compile and build Next.js site
npm run build

# Start the compiled production build
npm run start

# Run ESLint validation check
npm run lint
```

---

## 🏢 Business Identity & Operations

* **Official Business Name**: PKS Services Inc. (ProClean Solutions)
* **Regional Headquarters**: Markham, Ontario, Canada
* **Website**: [pksservices.ca](https://pksservices.ca)
* **Direct Line**: `647 466 6658`
* **Contact Email**: [pksservicesinc@gmail.com](mailto:pksservicesinc@gmail.com)
* **Active Coverage**: Markham, GTHA (Greater Toronto and Hamilton Area), Beverly Hills, and surrounding premium service regions.

---

## 📄 License
This project is private and proprietary. All rights reserved by **PKS Services Inc.** © 2026.
