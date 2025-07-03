<p align="center">
  <img src="https://github.com/XYIANSoftware/images/blob/main/logos_XYIAN/2AB0307C-9BC8-4823-947A-30AA6BA79E09.png?raw=true" alt="Primary" />
</p>

# XYIAN Software Official Site

XYIAN is a software company specializing in creating cutting-edge web and mobile apps. We bring innovative ideas to life by building powerful, user-friendly digital solutions that help businesses thrive in the modern world. Whether you need a sleek website or a custom mobile app, XYIAN is your go-to partner for all things digital.

## Project Gallery (v4.4.0)

-   Fully redesigned, animated, and responsive Project Gallery
-   Projects are defined in `src/constants/projectList.ts` using a rich data model
-   Each project card displays title, description, year, status, category, and technologies
-   Advanced filtering and search for category, status, and keywords
-   Clicking a card or "View Details" opens a dynamic project detail page at `/projectGallery/[projectname]`
-   Detail pages show long description, features, technologies, and action buttons
-   All images use Next.js `<Image>` for optimal performance
-   Custom SCSS for modern, dark, and accessible design

### Adding or Editing Projects

-   Edit `src/constants/projectList.ts` to add, remove, or update projects
-   Each project supports:
    -   `title`, `description`, `longDetails`, `imgSrc`, `url`, `technologies`, `features`, `category`, `status`, `year`, and optional `githubUrl`/`demoUrl`
-   The gallery and detail pages update automatically from this list

### Developer Notes

-   All project-related components are documented with JSDoc
-   The gallery is fully accessible and keyboard-navigable
-   Animations and transitions use PrimeReact and custom SCSS

## Frameworks, Languages, Libraries & Dependencies

-   Typescript
-   Next.js
-   React
-   Axios
-   Prime React UI Library
-   Font Awesome
-   GA4
