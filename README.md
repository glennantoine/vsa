# Aviation CTO Website

A professional Angular Material website for Aviation CTO/CISO services. This website is designed to be responsive, mobile-friendly, and showcase specialized technology leadership services for the aerospace and aviation industry.

## Features

- Modern, clean design with a professional color scheme
- Responsive layout for desktop and mobile devices
- Angular Material components for a consistent look and feel
- Four main pages:
  - Home page with services overview, testimonials, and call-to-action
  - Services page with detailed service descriptions
  - About page with company information and team profiles
  - Contact page with contact form and FAQs
- Optimized performance

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
```bash
git clone https://github.com/glennantoine/aviation-cto.git
cd aviation-cto
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## Customization

### Content

Update the content in the component HTML files to match your specific service offerings and company information:

- Home page: `src/app/components/home/home.component.html`
- Services page: `src/app/components/services/services.component.html`
- About page: `src/app/components/about/about.component.html`
- Contact page: `src/app/components/contact/contact.component.html`

### Images

Replace the placeholder images in the `src/assets/images` directory with your own:

1. Team member photos (team-1.jpg, team-2.jpg, etc.)
2. Client testimonial photos (client-1.jpg, client-2.jpg, etc.)
3. SVG illustrations for various sections

### Styling

Customize the color scheme and styling in:

- Global styles: `src/styles.scss`
- Component-specific styles: Each component has its own SCSS file

## Deployment

To build the project for production:

```bash
ng build
```

This will create a `dist/` directory with the compiled assets ready for deployment. You can then deploy to your preferred hosting provider:

- AWS S3 and CloudFront
- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages

## Built With

- [Angular](https://angular.dev/) - The web framework used
- [Angular Material](https://material.angular.io/) - Material Design components
- [SCSS](https://sass-lang.com/) - For styling

## License

This project is licensed under the MIT License - see the LICENSE file for details