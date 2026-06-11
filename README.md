# Portfolio Version 2.1 — Full-Stack AI Engineer Portfolio

A premium, high-performance, and responsive single-page developer portfolio designed to showcase Data Science, Machine Learning, and Full-Stack AI engineering capabilities. Built using a pure vanilla stack (HTML5, custom CSS3, and modern ES6 JavaScript) to ensure sub-second page loads, excellent SEO scoring, and zero external dependency bloat.

---

## 🆕 Release Updates (v2.1)

This release brings design updates, math rendering corrections, and tag cleanup:

- **Redesigned Resume Page (`resume.html`)**
- **added the hashnode section in the portfolio **

---

## 🛠️ Technology Stack

- **Markup & Structure**: Semantic HTML5 (header, section, footer, form, canvas)
- **Design System & Styling**: Custom CSS3 variables, HSL color tokens, CSS grid/flexbox layouts, glassmorphic filters, and hardware-accelerated animations
- **Logic & Interactions**: Modern Vanilla JavaScript (wrapped in an IIFE closure to prevent global namespace pollution)
- **Vector Assets**: Custom inline SVG graphics, gradients, and animated avatars
- **Graphics Rendering**: HTML5 Canvas API (interactive particle physics system)

---

## ✨ Core Features & Micro-Animations

1. **Space-Black Visual Theme**: Modern high-contrast aesthetic with neon blue (`--a1`), violet (`--a2`), and emerald green (`--a3`) accents.
2. **Interactive Background Canvas**: A responsive node-link particle network rendered on HTML5 Canvas. Particles interact magnetically with the mouse pointer, forming connecting lines within a radius.
3. **Hero Mouse Spotlight**: An interactive spotlight effect that follows the user's cursor across the hero header using CSS variables custom-mapped dynamically.
4. **Hero Role Typewriter**: Cycles through various engineering titles (`Data Scientist`, `Full-Stack AI Engineer`, `Applied Data Scientist`, `Predictive Analytics Developer`) before locking on the primary title.
5. **Seamless Tech Marquee**: A continuous, endless looped infinite marquee displaying the technical skill stack.
6. **3D Tilt & Glow Cards**: Product cards and expertise boxes detect mouse movement to calculate tilt offsets (`rotateX` / `rotateY`) and move a glowing radial gradient overlay matching the cursor position.
7. **Smooth Scroll Accordion**: FAQ item wrapper toggles active heights using dynamic JavaScript `scrollHeight` measurements and CSS transitions.
8. **Contact Form & Client-Centric Placeholders**: Uses instructional placeholders (`"write your full name here"`, `"write your email here"`) to guide user input rather than generic placeholder names. Integrates form inputs directly, opening a pre-filled Gmail compose client window with a clean markdown mail layout.
9. **Streamlined UX Scoping**: Removed unnecessary components ("MLOps Live Pipeline Monitor", "Calculate your AI savings", and "AI Pipeline Architect") to prioritize core portfolio work, direct booking, and interactive scoping.

---

## 🤖 Ahmed Talaat Chat Bot (V2 Architecture)

The flagship feature of the portfolio is an interactive, multi-mode conversational agent designed to act as a virtual booking agent and technical scope auditor.

### 1. Dual Mode Operations
- **Interactive Project Brief Wizard**: A step-by-step 6-step questionnaire designed to collect client details:
  - **Step 0**: Client identification with instruction-led inputs (`"write your full name here"`, `"write your email here"`).
  - **Step 1**: Target industry classification.
  - **Step 2**: Primary data and model challenges (multi-select chip interface).
  - **Step 3**: Expected success criteria and target outcomes.
  - **Step 4**: Project timeline parameters and optional technical notes.
  - **Step 5**: Automatically compiled brief preview with actions to Copy, Auto-fill page form, or Email directly.
- **Conversational FAQ Flow**: Enables clients to ask immediate questions about cloud stacks (AWS vs. Azure), data privacy, non-technical scoping, and timelines.

### 2. Premium Design & UI/UX Upgrades
- **Typewriter Response Stream (`typeHtmlMessage`)**: Streams responses word-by-word/character-by-character at 12ms intervals. A custom regex-like tags parser scans characters:
  - Detects incoming HTML syntax tags (e.g. `<strong>`, `<br>`, links) and immediately pushes them to the DOM buffer to prevent syntax breaks during live typing.
  - Automatically scrolls down the viewport container in real-time as text wraps.
- **Back Navigation Control**: Features a step-by-step back button (`← Back` / `← Back to Menu`) styled with premium hover transition animations to allow users to navigate back and correct inputs seamlessly without losing progress.
- **Static Time-Safe Greeting**: The bot initiates interaction with a timezone-safe `"Hi!"` greeting, avoiding mismatched morning/night greetings.
- **Pulsing Header Status Badge**: Features a clean `● Ahmed Talaat (Online)` indicator with a green neon pulse glow animation. Redundant text elements (like duplicate "Active" tags) were stripped to optimize header space.
- **Flexible Pricing Alignment**: FAQ queries regarding service rates return details on pricing flexibility and outline a collaborative discovery/scoping alignment process rather than locking the user into rigid price quotes.
- **Glassmorphic Styling**: Sleek glassmorphism overlay containing customized neon-tinted scrollbars, border gradients, and custom SVG avatars:
  - *Bot Avatar*: Sleek robot face inside a dark metallic gradient with animated glowing eyes.
  - *User Avatar*: Modern silhouette icon on a dark emerald gradient.

---

## 🚀 Running Locally & Verification

To run and verify the portfolio locally:

1. **Locate Files**: The central portfolio page is located at `index.html`.
2. **Launch Dev Server**: Run any basic HTTP server. For example:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve .
   ```
3. **Run JS Code Syntax Verification**:
   ```bash
   node scratch/validate_js.js
   ```
