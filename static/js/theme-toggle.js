(function () {
  var STORAGE_KEY = "site-theme";
  var root = document.documentElement;
  var colorScheme = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function getStoredTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      return saved === "light" || saved === "dark" ? saved : null;
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // The theme still works for this page even if storage is unavailable.
    }
  }

  function preferredTheme() {
    return colorScheme && colorScheme.matches ? "dark" : "light";
  }

  function updateButton(theme) {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    var nextTheme = theme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
    button.setAttribute("title", "Switch to " + nextTheme + " mode");
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    updateButton(theme);
    if (persist) setStoredTheme(theme);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var initialTheme = root.getAttribute("data-theme") || getStoredTheme() || preferredTheme();
    applyTheme(initialTheme, false);

    var button = document.getElementById("theme-toggle");
    if (button) {
      button.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        applyTheme(currentTheme === "dark" ? "light" : "dark", true);
      });
    }
  });

  if (colorScheme && colorScheme.addEventListener) {
    colorScheme.addEventListener("change", function (event) {
      if (!getStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });
  }
})();
