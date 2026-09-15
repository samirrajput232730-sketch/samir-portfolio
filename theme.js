/* ==========================================================
   THEMES — named palettes for the "workspace" (everything below
   the hero). The hero has its own fixed dark console look defined
   directly in style.css, so it stays constant no matter which
   theme is active here — that's deliberate.
   ==========================================================
   Add a new theme by adding a new key below with all color
   tokens filled in. Order here = order the toggle button cycles
   through. The first entry is the default that loads on first visit.
   ========================================================== */

const themes = {
  paper: {
    "--paper":       "#EDF1EE",
    "--paper-2":     "#E1E8E2",
    "--ink":         "#101E1A",
    "--ink-soft":    "#3E5750",
    "--muted":       "#71847C",
    "--line":        "#CBD8D0",
    "--teal":        "#1FAE74",
    "--teal-soft":   "#C9EEDD",
    "--gold":        "#E0983A",
    "--gold-soft":   "#F7E4C0",
    "--coral":       "#4C6FFF",
  },
  slate: {
    "--paper":       "#EEF1F5",
    "--paper-2":     "#E1E7EE",
    "--ink":         "#12192A",
    "--ink-soft":    "#47536A",
    "--muted":       "#7C879C",
    "--line":        "#CBD3E2",
    "--teal":        "#2E86AB",
    "--teal-soft":   "#C9E3EE",
    "--gold":        "#E0793E",
    "--gold-soft":   "#F6D9C4",
    "--coral":       "#7C5CFF",
  },
  ink: {
    "--paper":       "#0F1622",
    "--paper-2":     "#182233",
    "--ink":         "#EDF1F5",
    "--ink-soft":    "#B9C4D2",
    "--muted":       "#7C8AA0",
    "--line":        "#29344A",
    "--teal":        "#35D07F",
    "--teal-soft":   "#173A2A",
    "--gold":        "#F0B15C",
    "--gold-soft":   "#4A3620",
    "--coral":       "#7C93FF",
  },
};

const themeOrder = Object.keys(themes);

function applyTheme(name) {
  const theme = themes[name] || themes[themeOrder[0]];
  const root = document.documentElement;
  Object.entries(theme).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });
  root.setAttribute("data-theme", name);
}

// Apply the saved theme (or default) immediately, before paint, to avoid a flash
let savedTheme = themeOrder[0];
try {
  savedTheme = localStorage.getItem("theme") || themeOrder[0];
} catch (e) {
  /* localStorage unavailable (private browsing etc.) — fall back to default */
}
applyTheme(themeOrder.includes(savedTheme) ? savedTheme : themeOrder[0]);
