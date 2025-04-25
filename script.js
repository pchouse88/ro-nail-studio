document.addEventListener("DOMContentLoaded", function () {
  // 滾動時淡入效果
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Lightbox 功能
  const images = document.querySelectorAll(".zoomable");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("visible");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("visible");
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("visible");
    }
  });

  // 隨機 footer 小語
  const footerText = document.getElementById("footer-text");
  const quotes = [
    "今日也是閃閃發亮的一天 ♡",
    "讓指尖的小世界為你點亮心情 ✨",
    "微小細節，也能成就美好。",
    "Ro.nail_studio 與你一起變美 💅",
    "世界因為可愛的小細節而更美麗 ♡"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  footerText.textContent = randomQuote;
});
