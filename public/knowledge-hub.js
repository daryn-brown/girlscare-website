(() => {
  const form = document.getElementById("resource-filters");
  const search = document.getElementById("resource-search");
  const type = document.getElementById("resource-type");
  const grid = document.getElementById("resource-grid");
  const count = document.getElementById("resource-count");
  const empty = document.getElementById("resource-empty");
  const showAll = document.getElementById("show-all-resources");

  const normalise = (value) =>
    value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").trim();

  const resources = [...grid.querySelectorAll("[data-resource-type]")].map((element) => ({
    element,
    type: element.dataset.resourceType,
    text: normalise(element.textContent),
  }));

  const update = () => {
    const words = normalise(search.value).split(/\s+/).filter(Boolean);
    let visible = 0;

    resources.forEach((resource) => {
      const matchesType = type.value === "all" || resource.type === type.value;
      const matchesSearch = words.every((word) => resource.text.includes(word));
      const matches = matchesType && matchesSearch;
      resource.element.hidden = !matches;
      if (matches) visible += 1;
    });

    count.textContent = `Showing ${visible} of ${resources.length} resources.`;
    empty.hidden = visible !== 0;
  };

  const clear = () => {
    search.value = "";
    type.value = "all";
    update();
  };

  const revealLinkedResource = () => {
    const target = document.querySelector(":target");
    const resource = resources.find(({ element }) => target && element.contains(target));

    if (resource) {
      if (resource.element.hidden) clear();
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  };

  search.addEventListener("input", update);
  type.addEventListener("change", update);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });
  form.addEventListener("reset", () => {
    requestAnimationFrame(update);
  });
  showAll.addEventListener("click", () => {
    clear();
    search.focus();
  });
  window.addEventListener("hashchange", revealLinkedResource);
  window.addEventListener("pageshow", (event) => {
    update();
    if (!event.persisted) revealLinkedResource();
  });

  form.hidden = false;
  update();
  revealLinkedResource();
})();
