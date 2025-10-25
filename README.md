# Portfolio Website

A modern, minimalist developer portfolio built with Next.js, React, and Tailwind CSS. Designed with a dark theme to showcase your professional work and skills.

## Features

- **Dark Theme Design**: Professional dark background with clean typography
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Five Main Sections**:
  - Hero: Personal introduction and call-to-action
  - Skills: Categorized technical skills
  - Projects: Portfolio showcase with links
  - Experience: Professional work history timeline
  - Contact: Email and social media links with icons
- **Fast Performance**: Built with Next.js for optimal speed
- **SEO Ready**: Server-side rendering for better search engine optimization
- **Minimalist Design**: Clean, professional aesthetic inspired by top tech companies

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Customization

### Update Personal Information

Edit `lib/data.ts` to customize:

- **Personal Info**: Name, title, description, email, and social links
- **Skills**: Add or modify skill categories and items
- **Projects**: Update project titles, descriptions, technologies, and links
- **Experience**: Add or update work experience entries
- **Contact**: Update email and social media links

### Styling

The project uses Tailwind CSS with custom dark theme colors defined in `tailwind.config.ts`. Adjust the color palette in the config file if needed.

### Navigation

Navigation items are defined in `components/Navigation.tsx` and link to section IDs defined in the respective components.

## Deployment on Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and answer the questions about your project.

### Option 2: Using Git Integration

1. Push your code to GitHub (or GitLab/Bitbucket)

2. Go to [vercel.com](https://vercel.com/) and sign up

3. Click "New Project" and select your repository

4. Configure your project settings (auto-detected for Next.js)

5. Click "Deploy"

Vercel will automatically deploy your project and provide a live URL.

### Custom Domain

1. In Vercel dashboard, go to your project settings

2. Navigate to "Domains"

3. Add your custom domain

4. Configure DNS records according to Vercel's instructions

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx      # Experience timeline
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── lib/
│   └── data.ts             # Personal data and configuration
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel configuration
└── package.json            # Project dependencies
```

## Design Principles

- **Simplicity First**: Clean, minimal design without unnecessary animations
- **Professional**: Inspired by leading tech companies
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized images, code splitting, and lazy loading
- **Responsive**: Mobile-first approach

## Performance Tips

- Compress images before adding to the portfolio
- Use lazy loading for images in projects section
- Optimize animations and transitions
- Minimize third-party scripts

## License

This project is open source and available under the MIT License.

## Support

For issues, suggestions, or questions, please open an issue in the repository.
