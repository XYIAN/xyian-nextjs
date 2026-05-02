# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.2] - 2026-05-02

### Changed

-   **Node.js**: Local **nvm** default upgraded from v22.11.0 to **v22.22.2** (satisfies ESLint 9+ engine `^22.13.0`). Added **`.nvmrc`** with `22` so `nvm use` / `nvm install` tracks the Node 22 LTS line. Declared **`engines.node`** `>=22.13.0` in `package.json` for CI and tooling alignment.

## [5.0.1] - 2026-05-02

### Changed

-   **Git**: Fast-forward merged `facelift` into `main` so the default branch matches the modernized app stack.
-   **Dependencies**: Ran `npm update` to refresh the lockfile within existing semver ranges. Installed **Next.js 16.2.4** and **React 19.2.5** (was 16.1.6 / 19.2.4 in lockfile). Raised declared `next` and `eslint-config-next` ranges in `package.json` to `^16.2.4`.
-   **ESLint (Next.js 16)**: `next lint` was removed in Next.js 16; the `lint` script now runs `eslint .`. Migrated `eslint.config.mjs` to flat config using `eslint/config` plus `eslint-config-next/core-web-vitals` and `typescript` entrypoints (dropped `@eslint/eslintrc` / `FlatCompat`). Pinned **ESLint 9.x** for compatibility with `eslint-plugin-react` bundled by `eslint-config-next`. Ignored `public/**/*.tsx` (non-source assets) and disabled `@typescript-eslint/no-require-imports` for `server/**/*.js`. Several `react-hooks/*` compiler rules are set to **warn** until refactors land.
-   **Lint fixes**: Removed empty `Props` interfaces on About and Team pages; aligned `XYButton` `useMemo` dependency array with React Compiler expectations (`other.style`).

## [5.0.0] - 2026-02-28

### Major Upgrades

-   **React** 18 -> 19.2.x
    -   Migrated to React 19 with updated type definitions
    -   Fixed `React.FC` usage for components using `children` prop (CloudBackground)
    -   Updated all `@types/react` and `@types/react-dom` to v19
-   **Next.js** 15.1.2 -> 16.1.6
    -   Turbopack now default bundler with SVG loader configuration
    -   Updated `netlify.toml` Node version from 18 to 22
    -   Fixed PrimeFlex import path for Turbopack compatibility
    -   Removed problematic favicon.ico (icon.png used as favicon)
    -   Removed `optimizeCss` experimental flag (required removed `critters` dep)
-   **ESLint** 8 -> 10
    -   Migrated from `.eslintrc.json` to flat config (`eslint.config.mjs`)
    -   Added `@typescript-eslint/no-explicit-any` as error rule
    -   Added `@typescript-eslint/no-unused-vars` as warning rule
-   **PrimeReact** 10.8.5 -> 10.9.7 (latest stable; v11 still alpha)

### Added

-   **Routes**
    -   Added `/projectGallery` route with ProjectGrid component (filtering, search, responsive grid)
-   **Hooks**
    -   Created `useNavigation` shared hook replacing duplicated navigation patterns
-   **Barrel Exports**
    -   Added `projects` and `forms` barrel exports to `src/components/index.ts`
    -   Created `src/components/projects/index.ts` barrel file

### Changed

-   **Project Structure**
    -   Renamed `src/API` directory to `src/services`
-   **Export Consistency**
    -   Converted `LoginLink`, `BackToHome`, `LoadMask` from default to named exports
    -   Updated consumer imports to use named import syntax
-   **Dependencies Removed** (unused)
    -   `core-js`, `critters`, `font-awesome` (v4), `next-images`, `npm`, `primefaces`, `react-helmet`, `react-refresh`, `react-transition-group`, `express` (from frontend)
-   **Dependencies Updated**
    -   `sass`, `axios`, `react-hook-form`, `sharp`, `@svgr/webpack`, `nodemon` to latest stable

### Fixed

-   **Performance**
    -   Fixed `XYButton` calling `setState` during render (replaced with `useMemo`)
-   **SSR Compatibility**
    -   Replaced `window.location.pathname` with Next.js `usePathname()` in `HamburgerMenuList` and `CommonFunctions`
-   **Code Quality**
    -   Replaced `require()` with static import in home page
    -   Replaced `any` type with `PanelHeaderTemplateOptions` in `ProjectGrid`
-   **Security**
    -   Moved hardcoded Stripe API key to environment variable in `server/server.js`
    -   Zero npm vulnerabilities in production build

### Refactored

-   **Privacy Page**
    -   Extracted content into `src/constants/PRIVACY_POLICY.ts` as typed constant arrays
    -   Created reusable `PolicySectionList` component for data-driven rendering
    -   Reduced from 258 lines to ~95 lines
-   **Dead Code Cleanup**
    -   Removed fully commented-out `XyInputText.tsx`
    -   Removed empty `server/index.ts` and `server/store/storeServer.ts`
    -   Removed placeholder `NewClientForm.tsx`, starter `Header.tsx` and `Footer.tsx`
    -   Cleaned commented-out code from `MainLinks`, `HamburgerMenu`, `TEAM_LIST`, `store` constants, `about/page`
    -   Cleaned `ContactMe.tsx` of commented-out form JSX

## [4.3.1] - 2024-12-01

### Fixed

-   **Security Vulnerabilities**
    -   Fixed critical vulnerability in form-data package
    -   Resolved unsafe random function issue in form-data boundary selection

### Changed

-   **Dependency Updates**
    -   Updated @types/node, @types/react, @types/react-dom, sharp
    -   Verified build success with all updated dependencies

## [4.3.0] - 2024-12-01

### Added

-   **Codebase Indexing and Documentation**
    -   Comprehensive analysis and documentation of the entire XYIAN Software Next.js codebase
    -   Updated project name from "first-next-proj" to "xyian-nextjs"
-   **Public-Facing README**
    -   Complete redesign of README.md for public audience

### Changed

-   **Documentation Structure**
    -   Moved technical development details from README to internal documentation
    -   Focused README on business value and company information

---

## Version History

-   **5.0.0** - Major modernization: React 19, Next.js 16, ESLint 10, code review fixes, structural refactoring
-   **4.3.1** - Dependency updates and security fixes
-   **4.3.0** - Codebase indexing, documentation updates, and public README redesign

---

For detailed information about changes in each version, please refer to the git commit history and pull request discussions.
