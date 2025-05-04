# Instagram Photo Feed Clone

**View Live Demo: [https://instagram-photo-feed-nine.vercel.app/](https://instagram-photo-feed-nine.vercel.app/)**

**A simplified Instagram photo feed clone.**

## Overview

This project recreates an Instagram-like photo feed, featuring:

- A navbar with Instagram logo, "Create a new post" button, and a settings button (gear icon with dropdown)
- A toggleable photo grid (3x3 grid or inline single-picture view)
- A modal for adding new posts with title, image URL, and caption inputs
- A settings modal with profile, accessibility, privacy, and logout options
- Inline view with headers (title and date) and footers (likes and caption) for each image

## Features

- **Toggleable Views**: Switch between a 3x3 grid and a single-picture inline view using optimized toggle buttons (reduced size by 1/3, with hover effects matching camera/location icons).
- **Add New Posts**: Modal with title, image URL, and caption fields to add new photos, utilizing Bootstrap modals for consistency. The modal is scaled to 70% of its original size for a compact design. Form validation ensures all fields are required, preventing submission without user input.
- **Delete Posts with Confirmation**: Delete posts using an X button with a grey background, centered "X", and hover effects (darker grey background). The button is always visible in inline view and hidden in grid view until hovered, with a confirmation modal ("Are you sure you want to DELETE?") scaled to 50% of its original size.
- **Settings Menu**: Interactive gear button opens a modal with profile, accessibility, privacy, and logout options, styled with Bootstrap utilities.
- **Inline View Details**: In inline mode, each image displays a header with title and date, and a footer with likes and caption, all within a light grey box.
- **Responsive Design**: Built with Bootstrap 5.3 for a mobile-friendly layout, reducing custom CSS by 40 lines (15.9%) through Bootstrap classes and utilities. Features a responsive navbar with a hamburger menu on mobile (collapsing "Create a new post" and settings buttons), and media queries to adjust toggle buttons’ positioning for visibility on mobile devices in both portrait and landscape modes.
- **Consistent UI**: Uniform button heights, hover effects (light grey to slightly darker grey background, black icons), and full-width dividers in modals using Bootstrap styling.

## Technologies

- **HTML5**: Structure
- **CSS3**: Styling (optimized with Bootstrap to minimize custom CSS)
- **JavaScript**: Interactivity, including dynamic view toggling, modal submissions, and delete functionality
- **Bootstrap 5.3**: Responsive design, UI components, and utilities for navbar, modals, toggle buttons, and more
- **Bootstrap Icons**: Icons for navbar, modal, and toggle buttons
- **Pexels**: Image sourcing

## Setup and Testing

- **Local Development**: Clone the repository (`https://github.com/Cyberbot777/instagram-photo-feed`) and open in VS Code.
- **Run Locally**: Use the Live Server extension to launch a local server (e.g., `http://127.0.0.1:5500`).
- **Mobile Testing Pre-Deployment**: Install the MobileView extension in VS Code to preview the app in a mobile viewport (e.g., iPhone X). Start MobileView, enter your local server URL, and test in both portrait and landscape modes to ensure toggle buttons and navbar are responsive.

## Deployment

The project is deployed on Vercel for live viewing. Access the live demo at: [https://instagram-photo-feed-nine.vercel.app/](https://instagram-photo-feed-nine.vercel.app/).
