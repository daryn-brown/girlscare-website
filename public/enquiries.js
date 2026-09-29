(() => {
  document.querySelectorAll("details.enquiry").forEach((enquiry) => {
    const frame = enquiry.querySelector("iframe[data-src]");
    if (!frame) {
      throw new Error(`Missing enquiry form iframe: ${enquiry.id}`);
    }

    const source = new URL(frame.dataset.src);
    if (
      source.origin !== "https://docs.google.com" ||
      !/^\/forms\/d\/e\/[A-Za-z0-9_-]+\/viewform$/.test(source.pathname) ||
      source.searchParams.get("embedded") !== "true"
    ) {
      throw new Error(`Invalid Google Forms embed: ${enquiry.id}`);
    }

    const loadForm = () => {
      if (enquiry.open && !frame.hasAttribute("src")) {
        frame.src = source.href;
        frame.hidden = false;
      }
    };

    enquiry.addEventListener("toggle", loadForm);
    loadForm();
  });
})();
