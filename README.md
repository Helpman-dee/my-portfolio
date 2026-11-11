# Dare Aladeokin — Academic & Professional Portfolio Website

> **Positioning:** Data Scientist | Clinical Research Data Analyst | AI & Digital Health Researcher  
> **Affiliations:** University of Ibadan & HPV Consortium, College of Medicine, University of Ibadan  
> **Tagline:** *"Transforming Data into Insights, Research into Impact, and Technology into Solutions."*

---

## 🌟 Executive Overview

This repository houses the modern, high-performance personal portfolio website for **Dare Aladeokin**. The website is engineered to fulfill two high-stakes strategic objectives:

1. **Academic and Scholarship Positioning:** Attract international university admissions teams, prospective doctoral (PhD) advisors, global health research supervisors, and academic fellowship programs.
2. **Professional and Commercial Positioning:** Attract healthcare organizations, NGOs, research consortiums, startups, and private clients who require clinical data management (REDCap/EDC), data quality assurance, healthcare AI/ML research support, and IT infrastructure advisory.

---

## 🏗️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler & Tooling:** Vite 5
- **Styling & Design System:** Tailwind CSS with custom academic palette:
  - Deep Navy: `#101B2D`
  - Royal Blue: `#3157A4`
  - Subtle Gold: `#C5A059` / `#D4AF37`
  - Warm Off-White: `#F7F8FA`
- **Icons:** Lucide React
- **Typography:** Inter (Body/UI), Merriweather (Academic quotes/tagline), Fira Code / JetBrains Mono (Technical metadata)
- **Deployment Targets:** Netlify, Vercel, or custom static hosting.

---

## 📁 Project Architecture & Content Management

The codebase is engineered strictly following modular separation of concerns. **All content is isolated into structured TypeScript data modules in `src/data/`**, so you never need to touch or modify the React UI components to update your achievements, papers, or projects:

```
My Portfolio/
├── public/
│   ├── favicon.svg                       # Custom monogram logo favicon
│   ├── og-image.png                      # Social share Open Graph preview image
│   └── Dare_Aladeokin_Curriculum_Vitae.pdf # Downloadable Curriculum Vitae
├── src/
│   ├── components/                       # Modular UI components
│   │   ├── Navbar.tsx                    # Glassmorphic header with theme toggle & CV button
│   │   ├── Hero.tsx                      # Compelling introduction, affiliations & quick CTAs
│   │   ├── About.tsx                     # Narrative bio, research pillars & metric highlights
│   │   ├── Experience.tsx                # Interactive clinical & research appointment timeline
│   │   ├── Projects.tsx                  # Project cards with category filters
│   │   ├── ProjectModal.tsx              # Deep-dive methodology & compliance modal
│   │   ├── Publications.tsx              # Searchable peer-reviewed papers & DOI links
│   │   ├── Skills.tsx                    # Categorized substantiated competencies (no fake bars)
│   │   ├── Education.tsx                 # MSc & BSc degree timelines from Univ. of Ibadan
│   │   ├── Certifications.tsx            # GCP, REDCap & specialized training with verification
│   │   ├── Achievements.tsx              # Research appointments, awards & community leadership
│   │   ├── Services.tsx                  # 8 commercial/consulting services with CTAs
│   │   ├── Contact.tsx                   # Interactive contact form with auto-subject sync & mailto
│   │   ├── CVModal.tsx                   # In-browser academic CV preview & print engine
│   │   ├── Footer.tsx                    # Quick links, copyright & back-to-top control
│   │   └── Icon.tsx                      # Dynamic Lucide icon mapper
│   ├── context/
│   │   └── ThemeContext.tsx              # Dark/light mode state with localStorage persistence
│   ├── data/                             # EDITABLE CONTENT MODULES (Update anytime here!)
│   │   ├── personalInfo.ts               # Contact info, social links, taglines, affiliations
│   │   ├── about.ts                      # Bio paragraphs, research philosophy & metrics
│   │   ├── experience.ts                 # Employment history & clinical research duties
│   │   ├── projects.ts                   # Featured projects, technical tools & contributions
│   │   ├── publications.ts               # Peer-reviewed journal papers, DOIs & thesis details
│   │   ├── skills.ts                     # Substantiated technical skills grouped by category
│   │   ├── education.ts                  # Degree details, coursework, thesis topics
│   │   ├── certifications.ts             # Accreditations & research ethics credentials
│   │   ├── achievements.ts               # Grants, fellowships & recognitions
│   │   ├── services.ts                   # Consulting service descriptions & deliverables
│   │   └── index.ts                      # Unified data exporter
│   ├── types/
│   │   └── index.ts                      # Strict TypeScript interfaces
│   ├── App.tsx                           # Root application layout & state orchestrator
│   ├── index.css                         # Tailwind CSS, ambient glows & custom scrollbars
│   └── main.tsx                          # React entrypoint
├── netlify.toml                          # Netlify continuous deployment configuration
├── vercel.json                           # Vercel deployment configuration
├── tailwind.config.js                    # Custom palette & typography configuration
└── package.json                          # Dependencies & build scripts
```

---

## ✏️ How to Update Website Content

### 1. Adding a New Publication
Open `src/data/publications.ts` and add an entry:
```typescript
{
  id: "pub-your-new-paper",
  title: "Your Publication Title",
  authors: ["First Author", "Dare Aladeokin", "Senior Author"],
  myAuthorIndex: 1, // Your position in author list (will be highlighted)
  journal: "Journal Name",
  year: 2026,
  doi: "10.xxxx/xxxxxx",
  type: "journal", // 'journal' | 'conference' | 'manuscript' | 'ongoing'
  status: "Published", // 'Published' | 'Under Review' | 'In Preparation'
  abstract: "Brief summary of methodology and results...",
  url: "https://doi.org/10.xxxx/xxxxxx",
  category: "Epidemiology / Oncology / Machine Learning",
  featured: true
}
```

### 2. Adding a New Project
Open `src/data/projects.ts` and add a new item under the `projects` array. Specify title, category (`AI & Healthcare`, `Clinical Data Management`, `Data Engineering`, `Analytics & BI`, or `IT Systems`), full description, and your exact contribution bullets.

### 3. Updating Your Curriculum Vitae PDF
Place your updated CV PDF into the `public/` directory named `Dare_Aladeokin_Curriculum_Vitae.pdf`. The download links and in-browser preview modal will immediately serve your latest document.

### 4. Configuring Contact Form Delivery
In `src/components/Contact.tsx`, replace:
```typescript
access_key: 'YOUR_ACCESS_KEY_HERE'
```
with your free key from [Web3Forms](https://web3forms.com/) (takes 10 seconds to generate with your email `dare.aladeokin29@gmail.com`). If left as-is, the form seamlessly launches the user's default email client (`mailto:dare.aladeokin29@gmail.com`) with the subject and message already pre-filled.

---

## 🚀 Deployment Instructions

### Option A: Deploy to Netlify (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dare Aladeokin Portfolio"
   git branch -M main
   git remote add origin https://github.com/darealadeokin/portfolio.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"** → select your GitHub repository.
4. Netlify will automatically detect settings from the included `netlify.toml`:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**. Your site will be live on a secure HTTPS `.netlify.app` subdomain within 1 minute!

### Option B: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **"Add New Project"** and import your GitHub repository.
3. The included `vercel.json` and Vite presets will handle building automatically.
4. Click **Deploy**.

### Option C: Connecting Your Custom Domain (e.g., `darealadeokin.com`)
1. In your Netlify or Vercel dashboard, navigate to **Domain Management**.
2. Click **Add Custom Domain** and enter your domain name (e.g. `darealadeokin.com`).
3. Update your DNS records with your registrar (e.g., Namecheap, GoDaddy):
   - **CNAME Record:** `www` pointing to your Netlify/Vercel site.
   - **A Record:** pointing to the Netlify or Vercel apex IP address.
4. SSL/TLS certificates will be automatically provisioned for free.

---

## 💻 Local Development Commands

```bash
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Run TypeScript check & build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Confidentiality & Professional Integrity

This portfolio has been built in accordance with strict academic and health data guidelines:
- No sensitive patient data, protected health information (PHI), or proprietary institutional records are exposed.
- All claimed publications correspond directly to verified records (e.g., *BMC Oral Health* 2026, *JIAAPAC* 2026).
- Unverified items are transparently tagged with verification placeholders to uphold total credibility before international scholarship and review committees.

