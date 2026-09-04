(() => {
  const nav = document.querySelector(".site-nav");

  if (!nav) {
    return;
  }

  const header = nav.closest(".site-header");
  const mainMenuToggle = nav.querySelector(".nav-toggle");
  const navLinks = nav.querySelector(".nav-links");
  const mobileNav = window.matchMedia("(max-width: 46rem)");
  const toggles = [...nav.querySelectorAll(".nav-submenu__toggle")];

  const closeMenu = (toggle) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.closest(".nav-item--submenu")?.classList.remove("is-open");
    const label = toggle.querySelector(".visually-hidden");
    if (label) {
      label.textContent = label.textContent.replace("Close", "Open");
    }
  };

  const closeAllMenus = (except) => {
    toggles.forEach((toggle) => {
      if (toggle !== except) {
        closeMenu(toggle);
      }
    });
  };

  const setMainMenu = (open, restoreFocus = false) => {
    if (!header || !mainMenuToggle) {
      return;
    }

    const shouldOpen = open && mobileNav.matches;
    mainMenuToggle.setAttribute("aria-expanded", String(shouldOpen));
    header.classList.toggle("is-menu-open", shouldOpen);
    header.classList.remove("is-hidden");

    const label = mainMenuToggle.querySelector(".visually-hidden");
    if (label) {
      label.textContent = shouldOpen ? "Close main menu" : "Open main menu";
    }

    if (!shouldOpen) {
      closeAllMenus();
    }

    if (restoreFocus) {
      mainMenuToggle.focus();
    }
  };

  const openMenu = (toggle) => {
    closeAllMenus(toggle);
    toggle.setAttribute("aria-expanded", "true");
    toggle.closest(".nav-item--submenu")?.classList.add("is-open");
    const label = toggle.querySelector(".visually-hidden");
    if (label) {
      label.textContent = label.textContent.replace("Open", "Close");
    }
  };

  toggles.forEach((toggle) => {
    const menu = document.getElementById(toggle.getAttribute("aria-controls"));
    const item = toggle.closest(".nav-item--submenu");

    toggle.addEventListener("click", () => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        closeMenu(toggle);
      } else {
        openMenu(toggle);
      }
    });

    toggle.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" && menu) {
        event.preventDefault();
        openMenu(toggle);
        menu.querySelector("a")?.focus();
      }
    });

    menu?.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(toggle);
        toggle.focus();
      }
    });

    item?.addEventListener("focusout", () => {
      requestAnimationFrame(() => {
        if (!item.contains(document.activeElement)) {
          closeMenu(toggle);
        }
      });
    });
  });

  if (header && mainMenuToggle && navLinks) {
    header.classList.add("has-mobile-menu");

    mainMenuToggle.addEventListener("click", () => {
      setMainMenu(mainMenuToggle.getAttribute("aria-expanded") !== "true");
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setMainMenu(false);
      }
    });

    mobileNav.addEventListener("change", () => {
      setMainMenu(false);
    });
  }

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      if (mainMenuToggle?.getAttribute("aria-expanded") === "true") {
        setMainMenu(false);
      } else {
        closeAllMenus();
      }
    }
  });

  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const mainMenuWasOpen = mainMenuToggle?.getAttribute("aria-expanded") === "true";
      closeAllMenus();
      if (mainMenuWasOpen) {
        event.preventDefault();
        setMainMenu(false, true);
      }
    }
  });

  if (header && mainMenuToggle) {
    let lastScrollY = Math.max(window.scrollY, 0);
    let scrollFrameRequested = false;

    const updateHeaderVisibility = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const distance = currentScrollY - lastScrollY;
      const menuIsOpen = mainMenuToggle.getAttribute("aria-expanded") === "true";

      if (!mobileNav.matches || menuIsOpen || currentScrollY <= 12) {
        header.classList.remove("is-hidden");
        lastScrollY = currentScrollY;
      } else if (
        distance >= 6 &&
        currentScrollY > Math.max(mainMenuToggle.offsetHeight * 2, 80)
      ) {
        header.classList.add("is-hidden");
        lastScrollY = currentScrollY;
      } else if (distance <= -6) {
        header.classList.remove("is-hidden");
        lastScrollY = currentScrollY;
      }

      scrollFrameRequested = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!scrollFrameRequested) {
          scrollFrameRequested = true;
          window.requestAnimationFrame(updateHeaderVisibility);
        }
      },
      { passive: true }
    );

    header.addEventListener("focusin", () => {
      header.classList.remove("is-hidden");
    });
  }

  const sectionLinks = [...nav.querySelectorAll("[data-nav-section]")];
  const sectionEntries = sectionLinks
    .map((link) => ({
      link,
      section: document.getElementById(link.dataset.navSection),
    }))
    .filter(({ section }) => section);

  if (!sectionEntries.length || !("IntersectionObserver" in window)) {
    return;
  }

  const updateCurrentSection = (activeSection) => {
    sectionEntries.forEach(({ link, section }) => {
      if (section === activeSection) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry) {
        updateCurrentSection(activeEntry.target);
      }
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] }
  );

  sectionEntries.forEach(({ section }) => observer.observe(section));

  const contactEntry = sectionEntries.find(({ section }) => section.id === "contact");
  if (contactEntry) {
    window.addEventListener(
      "scroll",
      () => {
        const atPageEnd =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;
        if (atPageEnd) {
          updateCurrentSection(contactEntry.section);
        }
      },
      { passive: true }
    );
  }
})();
