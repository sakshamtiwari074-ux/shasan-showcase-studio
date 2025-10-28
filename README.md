# Dr. Syed Hasan Saeed - Academic Portfolio Website

## Project info

**URL**: https://lovable.dev/projects/30703619-93d1-409c-a002-d6cbfb0464d9

## Overview

This is a professional academic portfolio website for Dr. Syed Hasan Saeed, Professor and Head of Department in Electronics & Communication Engineering at Integral University, Lucknow.

## Content Management Guide

### How to Update Book Information

The book cards are located in `src/pages/Books.tsx`. Each book card displays a cover image, title, publisher, year, description, and a clickable link to the book's purchase page.

#### Step 1: Update Book Details

1. Open `src/pages/Books.tsx`
2. Find the `publishedBooks` array (around line 6)
3. Update each book object with your actual information:

```typescript
{
  title: "Your Actual Book Title",                    // Replace with your book's title
  description: "Book description",                     // Add a brief description
  publisher: "Publisher Name",                         // Add publisher name
  year: "2024",                                       // Publication year
  link: "https://amazon.com/your-book",               // Link to where book can be purchased
  coverImage: "/placeholder.svg",                     // Path to book cover image
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
  coverImage: "/path/to/your/book-cover.jpg",        // Use your actual image path
}
```

#### Step 2: Add Book Cover Images

You have three options for adding book cover images:

**Option A: Upload images to the public folder (Recommended)**
1. Save your book cover images (preferably in JPG or PNG format)
2. Upload them to the `public` folder in your project
3. Reference them in the code like this:
   ```typescript
   coverImage: "/book-covers/circuit-theory.jpg"
   ```
   (This will look for the file at `public/book-covers/circuit-theory.jpg`)

**Option B: Use image URLs from the web**
1. Find the book cover image URL online (right-click on image → Copy Image Address)
2. Use the direct URL:
   ```typescript
   coverImage: "https://example.com/path/to/book-cover.jpg"
   ```

**Option C: Upload to src/assets folder**
1. Save images to `src/assets/book-covers/` folder
2. Import them at the top of `Books.tsx`:
   ```typescript
   import circuitTheoryBook from "@/assets/book-covers/circuit-theory.jpg";
   ```
3. Use the imported variable:
   ```typescript
   coverImage: circuitTheoryBook
   ```

**Recommended Image Specifications:**
- Aspect Ratio: 3:4 (portrait, typical book cover ratio)
- Minimum Resolution: 600x800 pixels
- Format: JPG or PNG
- File Size: Under 500KB for optimal loading

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
Located in two places:
1. `src/components/Footer.tsx` (line 24):
   ```typescript
   href="https://www.iul.ac.in"
   ```
2. `src/pages/Resources.tsx` (line 56):
   ```typescript
   url: "https://www.iul.ac.in"
   ```

#### YouTube Channel Link
Located in `src/pages/Home.tsx` (line 133):
```typescript
href="https://www.youtube.com/@s.h.tutorials"
```

#### Udemy Profile Link
Located in `src/pages/Courses.tsx` (around line 194):
```typescript
href="https://www.udemy.com/user/your-profile"
```
Replace `your-profile` with your actual Udemy username.

### How to Update Contact Information

#### Email Address
The email `hasansaeedcontrol@gmail.com` is displayed in:
1. `src/pages/Contact.tsx` (line 79-83) - Contact page email display
2. `src/components/Footer.tsx` (line 56-60) - Footer email link

To change the email, update both locations with your new email address.

#### Other Contact Details
Located in `src/pages/Contact.tsx`:
- Office address (lines 65-70)
- Location (lines 92-94)
- Office hours (lines 107-117)

### How to Setup Email Notifications for Contact Form

The contact form currently shows a success toast message when submitted. To receive actual email notifications when someone submits the form, you can use **Mailchimp** or other email services. Here's how:

#### Option 1: Using Mailchimp (Recommended)

1. **Create a Mailchimp Account**
   - Go to [mailchimp.com](https://mailchimp.com) and sign up for a free account
   - Create a new audience/list for contact form submissions

2. **Get Your Mailchimp API Key**
   - Go to Account → Extras → API Keys
   - Create a new API key and copy it

3. **Enable Lovable Cloud** (Required for backend functionality)
   - Click on the Cloud tab in Lovable
   - Follow the prompts to enable Lovable Cloud
   - This will give you access to edge functions for backend processing

4. **Add Mailchimp Secret**
   - In Lovable, go to Cloud → Secrets
   - Add a new secret named `MAILCHIMP_API_KEY`
   - Paste your Mailchimp API key

5. **Create an Edge Function**
   - Create a new edge function called `send-contact-email`
   - Use the Mailchimp API to send notifications when form is submitted
   - Update the form in `src/pages/Contact.tsx` to call this edge function

#### Option 2: Using Resend (Alternative)

1. **Create a Resend Account**
   - Go to [resend.com](https://resend.com) and sign up
   - Verify your domain (or use their test domain for development)

2. **Get Your Resend API Key**
   - Go to API Keys section in Resend dashboard
   - Create and copy your API key

3. **Enable Lovable Cloud & Add Secret**
   - Enable Lovable Cloud in your project
   - Add a secret named `RESEND_API_KEY` with your API key

4. **Create Edge Function**
   - Create a `send-contact-email` edge function
   - Use Resend's API to send email notifications
   - Update form submission handler in `src/pages/Contact.tsx`

#### Option 3: Using Formspree (No Code Solution)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint URL
3. Update the form in `src/pages/Contact.tsx`:
   ```typescript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Formspree will forward all submissions to your email

**Note:** For a complete email integration tutorial, refer to the Lovable Cloud documentation at [docs.lovable.dev](https://docs.lovable.dev/features/cloud)

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
