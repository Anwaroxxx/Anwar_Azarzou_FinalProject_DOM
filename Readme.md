# 🍽️ Yummy Restaurant Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

> A modern, fully responsive restaurant website featuring an interactive menu, booking system, chef profiles, and dynamic image galleries.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Yummy** is a sleek and modern restaurant website designed to provide an engaging user experience. The site showcases delicious food options, allows customers to make reservations with intelligent time-slot management, and features interactive carousels and galleries.

### Key Highlights

✨ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices  
🍔 **Dynamic Menu** - Filter by meal type (Breakfast, Lunch, Dinner, Starters)  
📅 **Smart Booking System** - Prevents double bookings with time conflict detection  
👨‍🍳 **Chef Profiles** - Meet our culinary team with hover effects  
🎬 **Video Integration** - Watch our story through embedded video content  
🖼️ **Image Galleries** - Interactive carousels with auto-slide functionality

---

## ✨ Features

### 🎨 User Interface
- Clean, modern design with smooth animations
- Fully responsive layout using SCSS/SASS
- Custom carousel with navigation arrows and indicators
- Hover effects on chef profiles with social media links

### 📖 Menu System
- **Breakfast** - Start your day right
- **Lunch** - Midday delights
- **Dinner** - Evening specialties
- **Starters** - Appetizers and small plates
- Dynamic menu filtering with visual feedback

### 🔖 Reservation System
- **Smart Time Slot Management** - Prevents overlapping bookings
- **Capacity Control** - Maximum 3 simultaneous reservations
- **Validation** - Ensures end time is after start time
- **Conflict Detection** - Checks for time overlaps before confirming
- Real-time availability checking

### 🎪 Interactive Elements
- **Custom Carousels** - Manual and auto-slide options
- **Gallery Navigation** - Click-to-navigate image galleries
- **Video Modal** - Opens YouTube videos in new tabs
- **Smooth Transitions** - CSS animations throughout

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **SCSS/SASS** | Advanced styling with variables, mixins, and nesting |
| **JavaScript (ES6+)** | Interactive functionality and DOM manipulation |
| **Bootstrap** | Grid system and responsive utilities |

### JavaScript Features
- ✅ Event listeners and delegation
- ✅ Array methods for data management
- ✅ Time conflict detection algorithm
- ✅ Form validation
- ✅ Modal management
- ✅ Dynamic DOM manipulation

### SCSS Features
- ✅ Variables for colors and spacing
- ✅ Nested selectors
- ✅ Mixins for reusable styles
- ✅ Responsive breakpoints
- ✅ Hover and transition effects

---

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- SASS compiler (if modifying styles)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anwaroxxx/Anwar_Azarzou_FinalProject_DOM
   ```

2. **Navigate to project directory**
   ```bash
   cd Anwar_Azarzou_FinalProject_DOM
   ```

3. **Compile SCSS to CSS** (if making changes)
   ```bash
   sass --watch scss:css
   ```
   Or use the Live Sass Compiler extension in VS Code

4. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   npx serve
   ```

---

## 🚀 Usage

### Making a Reservation

1. Click the **"Book a Table"** button
2. Fill in the reservation form:
   - Full Name
   - Food Option (Breakfast/Lunch/Dinner)
   - Start Time
   - End Time
   - Number of People
3. Click **"Submit Reservation"**
4. The system will:
   - ✅ Check for time conflicts
   - ✅ Validate your input
   - ✅ Confirm your booking

### Browsing the Menu

1. Navigate to the Menu section
2. Click on meal categories:
   - **Starters** - Hides menu, shows starters
   - **Breakfast** - Displays breakfast items
   - **Lunch** - Shows lunch options
   - **Dinner** - Reveals dinner menu

### Viewing Galleries

- Use **arrow buttons** to navigate manually
- Click **indicator dots** to jump to specific slides
- **Auto-slide** feature (if enabled) automatically transitions

---

## 📁 Project Structure

```
ANWAR_AZARZOU_FINALPROJECT_DOM/
│
├── node_modules/
│
├── public/
│   ├── css/
│   ├── images/
│   └── js/
│       ├── main.js
│       └── responsivity.js
│
├── src/
│   └── sass/
│       ├── modules/
│       │   ├── _about.scss
│       │   ├── _bookATable.scss
│       │   ├── _chefs.scss
│       │   ├── _contact.scss
│       │   ├── _events.scss
│       │   ├── _footer.scss
│       │   ├── _gallery.scss
│       │   ├── _hero.scss
│       │   ├── _menu.scss
│       │   ├── _modal.scss
│       │   ├── _navbar.scss
│       │   ├── _stats.scss
│       │   ├── _testimonials.scss
│       │   └── _whyUs.scss
│       │
│       ├── _AllFunctions.scss
│       ├── _AllModules.scss
│       ├── _AllVariables.scss
│       └── app.scss
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── Readme.md

```

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Yummy Restaurant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Contact

**Project Maintainer:** Anwar Azarzou

- 📧 Email: anwar.azarzou.6969@gmail.com
- 🐙 GitHub: [@Anwaroxxx](https://github.com/Anwaroxxx)
- 💼 LinkedIn: [Anwar Azarzou](https://www.linkedin.com/in/anwar-azarzou-20b923271/)
- 
---

