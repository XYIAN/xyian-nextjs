# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.2.0] - 2024-12-01

### Added

-   **Major Style System Overhaul**

    -   Centralized SCSS variables in `_variables.scss` partial
    -   Implemented `@use` imports across all SCSS files for better organization
    -   Added global color palette, font imports, and common mixins
    -   Improved mobile-first responsive design patterns

-   **Enhanced Image Loading UX**

    -   Added PrimeReact Skeleton components as placeholders for all images
    -   Implemented loading states for Project Gallery, Team, and About sections
    -   Improved user experience during image loading across the application

-   **SEO & Performance Improvements**

    -   Added comprehensive `sitemap.xml` for better search engine indexing
    -   Created `robots.txt` for proper crawler guidance
    -   Updated all page metadata with optimized titles and descriptions
    -   Enhanced OpenGraph and Twitter card metadata
    -   Updated company references from "Xyian Engineering" to "Xyian Software"

-   **About Section Redesign**
    -   Complete overhaul of About page layout and content structure
    -   Enhanced content organization with improved readability
    -   Updated company messaging and branding consistency

### Changed

-   **Style Architecture**

    -   Refactored all SCSS files to use centralized variables
    -   Removed duplicate color and font definitions
    -   Improved maintainability and consistency across components

-   **Component Structure**
    -   Updated image components to use modern loading patterns
    -   Improved component organization and reusability
    -   Enhanced TypeScript type safety

### Fixed

-   **Image Loading Issues**

    -   Resolved image loading performance with skeleton placeholders
    -   Fixed layout shifts during image loading
    -   Improved accessibility with proper alt text

-   **SEO Issues**
    -   Fixed missing meta tags and descriptions
    -   Corrected company name references throughout the application
    -   Added proper canonical URLs and structured data

### Technical Improvements

-   **Build System**

    -   Updated to Next.js 15.3.3
    -   Improved build performance and optimization
    -   Enhanced TypeScript configuration

-   **Code Quality**
    -   Removed unused imports and dependencies
    -   Improved code organization and maintainability
    -   Enhanced error handling and user feedback

## [3.0.0] - 2024-06-15

### Added

-   Initial release of Xyian Software website
-   Core pages: Home, About, Team, Project Gallery, Login
-   Responsive design with mobile-first approach
-   PrimeReact component integration
-   Basic SEO and performance optimization

### Changed

-   Company rebrand from "Xyian Engineering" to "Xyian Software"
-   Updated visual identity and branding materials

---

## Version History

-   **4.2.0** - Major overhaul with style system, image loading UX, and SEO improvements
-   **3.0.0** - Initial release with core functionality and responsive design

---

For detailed information about changes in each version, please refer to the git commit history and pull request discussions.
