// 分頁籤切換（每個 .tabs 區塊各自獨立運作，同一頁可以有多組）
document.querySelectorAll(".tabs").forEach((tabs) => {
  const buttons = tabs.querySelectorAll(".tab-btn");
  const panels = tabs.querySelectorAll(".tab-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      tabs.querySelector(`.tab-panel[data-tab="${target}"]`).classList.add("active");
    });
  });
});

// 手機版選單開關
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => siteNav.classList.remove("open"));
});

// 捲動時高亮目前所在的導覽項目
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute("href") === `#${id}` ? "var(--accent)" : "";
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));
