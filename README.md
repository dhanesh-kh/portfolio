# Dhanesh Khemraj - Personal Portfolio

This is the personal portfolio of Dhanesh Khemraj, showcasing projects, skills, and experience.

Built with:
- Next.js 15
- React 19
- Tailwind CSS v4
- TypeScript
- Framer Motion (for animations)
- MDX (for blog/content pages)

## Project Structure

-   `/app`: Contains the main application routes, pages, and layouts.
    -   `/app/data.ts`: Holds static data for projects, work experience, etc.
    -   `/app/page.tsx`: The main landing page.
    -   `/app/projects/page.tsx`: Dedicated page to showcase projects.
    -   `/app/contact/page.tsx`: Contact page.
-   `/components`: Shared UI components.
    -   `/components/ui/project-media.tsx`: Component for displaying project videos or screenshot slideshows.
    -   `/components/ui/morphing-dialog.tsx`: A dialog component with morphing animations.
-   `/public`: Static assets like images, videos.
-   `/lib`: Utility functions.
-   `eslint.config.mjs`: ESLint configuration.
-   `next.config.mjs`: Next.js configuration.
-   `postcss.config.mjs`: PostCSS configuration (for Tailwind CSS).
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `tsconfig.json`: TypeScript configuration.

## Key Features Implemented

-   **Dynamic Project Display**: Projects can feature either a video or a slideshow of screenshots.
-   **Interactive Project Media**:
    -   Thumbnails for screenshot-based projects automatically cycle through images.
    -   Clicking a thumbnail opens a larger dialog view.
    -   Autoplay on thumbnails pauses when the dialog is open.
    -   Manual navigation (next/previous) is available within the dialog for screenshots.
-   **Smooth Animations**: Utilizes Framer Motion for page transitions and component animations (e.g., morphing dialog, image slideshows).
-   **Responsive Design**: Styled with Tailwind CSS for responsiveness across devices.
-   **Modern Tech Stack**: Leverages the latest features of Next.js, React, and Tailwind CSS.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dhanesh-kh/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    This project uses `pnpm` as the package manager.
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
pnpm build
```

## Linting and Formatting

-   ESLint and Prettier are configured for code quality and consistent formatting.
-   To lint: `pnpm lint`
-   Formatting is typically handled by Prettier on save (if your editor is configured).

## Deployment

This project is configured for easy deployment on Vercel. Pushing to the `main` branch on GitHub will trigger a deployment.
