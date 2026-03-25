# Changelog

All notable changes to the StellarForms project will be documented in this file.

## [1.1.0] - 2026-03-25

### Added
- **Premium Design System**: New `main.css` with advanced UI components and micro-interactions.
- **Layout Management**: Integrated `express-ejs-layouts` for consistent page structure.
- **404 Page**: Custom designed Error 404 view.
- **Environment Configuration**: Added `dotenv` support for secure environment variables.
- **MVC Structure**: Refactored the entire project for better scalability.

### Changed
- **Database Logic**: Moved connection setup to `config/db.js`.
- **User Model**: Updated `phone` field to String and added stricter validation.
- **Form Submission**: Refactored logic into `user.controller.js` with AJAX support.
- **README**: Full overhaul with updated information and structure.

### Optimized
- Refactored `app.js` to focus on initialization and middleware.
- Simplified template logic using EJS partials.
- Improved file upload validation in `config/multer.js`.

### Removed
- Redundant root-level `db.js`.
- Inline Tailwind classes in favor of a dedicated CSS system.
