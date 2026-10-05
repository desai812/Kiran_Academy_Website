# The Kiran Academy — Website

A responsive, animated front-end website for **The Kiran Academy**, an IT training institute offering career-focused courses in Java Full Stack, Python Full Stack, Software Testing, MERN Stack, Data Science & ML, and Data Analytics.

Built as a Kiran Academy training task to practice real-world front-end development — semantic HTML, modern CSS (Grid, Flexbox, animations) and vanilla JavaScript — and deployed live for the academy to review.

🔗 **Live site:** _add your Netlify link here after deployment_

---

## ✨ Features

- **Fully responsive** — adapts cleanly across desktop, tablet, and mobile (hamburger menu on small screens)
- **Scroll animations** — sections fade/slide into view using the `IntersectionObserver` API
- **Interactive course filter** — filter courses by category (Development / Data & AI / Testing) without a page reload
- **Animated hero section** — floating cards, rotating orbit rings, and a live "code typing" preview card
- **Infinite marquee strips** — auto-scrolling highlight banners (hero strip + placement ticker)
- **Working demo-class form** — client-side validation with a toast confirmation on submit
- **Dark-mode aware** — respects the visitor's OS-level light/dark preference
- **No frameworks, no build step** — pure HTML, CSS and JavaScript; works by just opening `index.html`

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — Grid, Flexbox, custom properties, keyframe animations, media queries
- **JavaScript (Vanilla)** — DOM interactivity, IntersectionObserver, form handling

## 📁 Project Structure

```
Kiran_Academy_website/
├── index.html      # Page structure and content
├── style.css        # Styling, layout, responsive rules, animations
├── script.js         # Mobile menu, course filter, scroll reveal, form logic
└── README.md       # Project documentation
```

## 🚀 Running Locally

No build tools or dependencies required.

1. Clone or download this repository.
2. Open `index.html` directly in a browser — **or** serve it locally for the best experience:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## 🌐 Deployment

This site is deployed on **Netlify** as a static site (no build command needed, publish directory `/`). Every push to the `main` branch automatically redeploys the live site.

## 📄 Sections

| Section | Description |
|---|---|
| Hero | Introduction, call-to-action, key stats |
| Courses | Filterable grid of available career-track courses |
| Why Kiran | Key differentiators of the academy |
| Placements | Placement stats and a scrolling job-role ticker |
| Programs | Special programs — master programs, mock interviews, internships |
| Technology | Tools and technologies taught |
| Centres | List of physical training centres with contact numbers |
| Book Demo | Lead-capture form for a free demo class |
| Footer | Contact details, quick links, social links |

## 📬 Contact

For queries related to this project, reach out via the contact details listed on the website itself.

---

*This project was built as part of a Kiran Academy training assignment.*
