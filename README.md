# Slideshow Project

A simple slideshow built using HTML, CSS, and JavaScript. This project allows users to navigate between slides manually using controls or automatically via an interval timer.

## Features

- **Responsive Design**: The slideshow adjusts to different screen sizes.
- **Manual Controls**: Navigate slides using "Previous" and "Next" buttons.
- **Auto-Sliding**: Slides automatically transition every 5 seconds.
- **Wrap-Around Navigation**: Moving past the first or last slide loops back to the other end.

## Demo

![Slideshow Preview](https://via.placeholder.com/800x400?text=Slideshow+Preview)

## How It Works

1. **HTML**: Each slide is wrapped inside a `div` with the class `slide`. Only the active slide is displayed at any given time.
2. **CSS**: Styles ensure only the active slide is visible, with smooth transitions and styled navigation buttons.
3. **JavaScript**:
   - Toggles the `active` class on slides for manual navigation.
   - Automatically transitions slides every 5 seconds using `setInterval`.
