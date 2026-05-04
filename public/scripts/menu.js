(function () {
  function updateMenuSize(menuShell) {
    if (!menuShell) return;

    var isScrolled = window.scrollY > 24;
    menuShell.classList.toggle("h-16", isScrolled);
    menuShell.classList.toggle("py-2", isScrolled);
    menuShell.classList.toggle("h-20", !isScrolled);
    menuShell.classList.toggle("py-3", !isScrolled);
  }

  function setupMenu() {
    var menuShell = document.getElementById("menu-shell");
    var toggle = document.getElementById("mobile-menu-toggle");
    var panel = document.getElementById("mobile-menu-panel");

    updateMenuSize(menuShell);
    window.addEventListener("scroll", function () {
      updateMenuSize(menuShell);
    }, { passive: true });

    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      var nextState = !isOpen;
      toggle.setAttribute("aria-expanded", String(nextState));
      panel.hidden = !nextState;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMenu);
  } else {
    setupMenu();
  }
})();
