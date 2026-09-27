"use strict";
(() => {
  const config = window.NIVOTION_PUBLICATION;
  const owner = config && config.owner;
  const validOwner = typeof owner === "string" && /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/.test(owner) && !owner.includes("--");
  if (!validOwner || config.ready !== true || config.privateReportingVerified !== true) return;
  const base = "https://github.com/" + owner;
  const product = base + "/nivotion";
  const feedback = base + "/nivotion-feedback";
  const routes = {
    download: product + "/releases/tag/v0.1.0-rc.1",
    bug: feedback + "/issues/new?template=bug_report.yml",
    ux: feedback + "/issues/new?template=ux_feedback.yml",
    idea: feedback + "/issues/new?template=improvement_idea.yml",
    discussion: feedback + "/discussions",
    security: product + "/security/advisories/new"
  };
  document.querySelectorAll("a[data-route]").forEach(link => {
    const target = routes[link.dataset.route];
    if (!target) return;
    link.href = target;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
  });
  document.getElementById("publication-state").textContent = "Feedback goes to our public GitHub community. Security reports go through the product repository's private channel.";
})();
