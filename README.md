# Instagram Photo Feed Clone

**View Live Demo: [https://instagram-photo-feed-nine.vercel.app/](https://instagram-photo-feed-nine.vercel.app/)**

**A simplified Instagram photo feed clone.**

## Overview
This project recreates an Instagram-like photo feed, featuring:

- A navbar with Instagram logo, "Create a new post" button, and a settings button (gear icon with dropdown)
- A toggleable photo grid (3x3 grid or inline single-picture view)
- A modal for adding new posts with image URL and caption inputs
- A settings modal with profile, accessibility, privacy, and logout options
- Inline view with headers (title and date) and footers (likes and caption) for each image

## Features
- **Toggleable Views**: Switch between a 3x3 grid and a single-picture inline view using optimized toggle buttons (reduced size by 1/3, with hover effects matching camera/location icons).
- **Add New Posts**: Modal with image URL and caption fields to add new photos, utilizing Bootstrap modals for consistency.
- **Delete Posts with Confirmation**: Delete posts using an X button (visible in inline view, hidden in grid view until hovered), with a confirmation modal ("Are you sure you want to DELETE?") scaled to 50% of its original size.
- **Settings Menu**: Interactive gear button opens a modal with profile, accessibility, privacy, and logout options, styled with Bootstrap utilities.
- **Inline View Details**: In inline mode, each image displays a header with title and date, and a footer with likes and caption, all within a light grey box.
- **Responsive Design**: Built with Bootstrap 5.3 for a mobile-friendly layout, reducing custom CSS by 40 lines (15.9%) through Bootstrap classes and utilities.
- **Consistent UI**: Uniform button heights, hover effects (light grey to slightly darker grey background, black icons), and full-width dividers in modals using Bootstrap styling.

## Technologies
- **HTML5**: Structure
- **CSS3**: Styling (optimized with Bootstrap to minimize custom CSS)
- **JavaScript**: Interactivity, including dynamic view toggling, modal submissions, and delete functionality
- **Bootstrap 5.3**: Responsive design, UI components, and utilities for navbar, modals, toggle buttons, and more
- **Bootstrap Icons**: Icons for navbar, modal, and toggle buttons
- **Pexels**: Image sourcing

## Deployment
The project is deployed on Vercel for live viewing. Access the live demo at: [https://instagram-photo-feed-nine.vercel.app/](https://instagram-photo-feed-nine.vercel.app/).
