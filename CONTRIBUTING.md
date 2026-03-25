# Contributing to StellarForms

Thank you for your interest in contributing to StellarForms! We welcome contributions that improve the UI/UX, performance, or functionality of the platform.

## How to Contribute

1. **Fork the Repository**: Create a personal fork of the project on GitHub.
2. **Clone the Project**: Download your fork to your local machine.
3. **Create a Branch**: Use a descriptive name for your branch (e.g., `feature/modern-buttons` or `fix/email-validation`).
4. **Make Your Changes**: Follow the project's coding standards and design principles.
5. **Test Your Changes**: Ensure the application runs correctly and new features work as expected.
6. **Commit & Push**: Commit your changes with clear messages and push them to your fork.
7. **Submit a Pull Request**: Provide a detailed description of your changes and why they are valuable.

## Coding Standards

- **Architecture**: Always follow the MVC pattern.
- **Controllers**: Keep controllers thin and move complex logic to services or models if needed.
- **Styling**: Use the existing CSS variable system in `public/css/main.css` for consistency.
- **Models**: Use Mongoose validation for all data entry points.
- **Naming**: Use camelCase for variables and functions, and PascalCase for models and classes.

## Design Principles

- **Simplicity**: Keep the interface clean and uncluttered.
- **Accessibility**: Ensure all form elements have proper labels and high contrast.
- **Feedback**: Provide visual cues for every user action (loading states, success messages, errors).

We appreciate your help in making StellarForms better!
