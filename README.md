# Dr. Syed Hasan Saeed - Academic Portfolio Website

## Project info

**URL**: https://lovable.dev/projects/30703619-93d1-409c-a002-d6cbfb0464d9

## Overview

This is a professional academic portfolio website for Dr. Syed Hasan Saeed, Professor and Head of Department in Electronics & Communication Engineering at Integral University, Lucknow.

## Content Management Guide

### How to Update Book Information

The book cards are located in `src/pages/Books.tsx`. To update book details:

1. Open `src/pages/Books.tsx`
2. Find the `publishedBooks` array (around line 6)
3. Update each book object with your actual information:

```typescript
{
  title: "Your Actual Book Title",           // Replace with your book's title
  description: "Book description",            // Add a brief description
  publisher: "Publisher Name",                // Add publisher name
  year: "2024",                              // Publication year
  link: "https://amazon.com/your-book",      // Link to where book can be purchased
}
```

**Example:**
```typescript
{
  title: "Advanced Circuit Theory",
  description: "Comprehensive guide to AC/DC circuits and network analysis",
  publisher: "McGraw-Hill Education",
  year: "2023",
  link: "https://www.amazon.in/dp/YOURCODE",
}
```

### How to Update Udemy Course Information

The course cards are located in `src/pages/Courses.tsx`. To update course details:

1. Open `src/pages/Courses.tsx`
2. Find the `udemyCourses` array (around line 6)
3. Update each course object with your actual information:

```typescript
{
  title: "Your Course Title",                           // Actual course name
  description: "Course description",                    // Brief description
  level: "Beginner",                                   // Beginner/Intermediate/Advanced
  duration: "10 hours",                                // Total course duration
  students: "1,000+",                                  // Number of students enrolled
  rating: "4.5",                                       // Course rating
  link: "https://www.udemy.com/course/your-course",   // Actual Udemy course link
}
```

**Example:**
```typescript
{
  title: "Mastering Digital Electronics",
  description: "Complete guide to digital logic design and microprocessors",
  level: "Intermediate",
  duration: "15 hours",
  students: "2,500+",
  rating: "4.7",
  link: "https://www.udemy.com/course/digital-electronics-complete",
}
```

### How to Update Links

#### Integral University Link
Located in `src/components/Footer.tsx` (line 23):
```typescript
href="https://www.iul.ac.in"
```

#### YouTube Channel Link
Located in `src/pages/Home.tsx` (line 133):
```typescript
href="https://www.youtube.com/@s.h.tutorials"
```

#### Udemy Profile Link
Located in `src/pages/Courses.tsx` (line 194):
```typescript
href="https://www.udemy.com/user/your-profile"
```
Replace `your-profile` with your actual Udemy username.

### How to Update Contact Information

Located in `src/pages/Contact.tsx`:
- Update email address
- Update phone number
- Update office address
- Update office hours

## Project Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd <YOUR_PROJECT_NAME>
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```sh
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/           # Images and static files
├── components/       # Reusable UI components
│   ├── ui/          # shadcn-ui components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Research.tsx
│   ├── Teaching.tsx
│   ├── Books.tsx       # Book cards page
│   ├── Courses.tsx     # Udemy courses page
│   ├── Resources.tsx
│   └── Contact.tsx
├── App.tsx          # Main app component with routing
└── main.tsx         # Entry point
```

## Technologies Used

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Navigation and routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - UI component library
- **Lucide React** - Icon library

## Customization

### Design System
The color scheme and design tokens are defined in:
- `src/index.css` - CSS variables and global styles
- `tailwind.config.ts` - Tailwind configuration

### Color Palette
- Primary: Deep Navy Blue
- Secondary: Teal
- Accent: Golden/Orange
- Background: Light gray (light mode) / Dark blue (dark mode)

## Deployment

### Deploy with Lovable
Simply open [Lovable](https://lovable.dev/projects/30703619-93d1-409c-a002-d6cbfb0464d9) and click on Share → Publish.

### Deploy to Other Platforms
After building (`npm run build`), you can deploy the `dist` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains in Lovable
2. Click Connect Domain
3. Follow the DNS configuration instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Support

For questions or issues:
- Contact through the website's contact page
- Visit [Lovable Documentation](https://docs.lovable.dev/)
- Join [Lovable Discord Community](https://discord.com/channels/1119885301872070706/1280461670979993613)

## License

© 2025 Dr. Syed Hasan Saeed. All rights reserved.
