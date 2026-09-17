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
  navy: {
    "--paper":       "#FFFFFF",
    "--paper-2":     "#F4F7F9",
    "--ink":         "#0B132B",
    "--ink-soft":    "#2C3E50",
    "--muted":       "#64748B",
    "--line":        "#E2E8F0",
    "--teal":        "#1D4ED8",
    "--teal-soft":   "#DBEAFE",
    "--gold":        "#0369A1",
    "--gold-soft":   "#E0F2FE",
    "--coral":       "#4C6FFF",
  },
  midnight: {
    "--paper":       "#070F22",
    "--paper-2":     "#111827",
    "--ink":         "#F8FAFC",
    "--ink-soft":    "#94A3B8",
    "--muted":       "#64748B",
    "--line":        "#374151",
    "--teal":        "#3B82F6",
    "--teal-soft":   "rgba(59, 130, 246, 0.15)",
    "--gold":        "#38BDF8",
    "--gold-soft":   "rgba(56, 189, 248, 0.1)",
    "--coral":       "#818CF8",
  }
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
