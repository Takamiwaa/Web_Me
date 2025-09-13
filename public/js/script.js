// Scroll behavior
let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector("#hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Email submit
const submitBtn = document.getElementById("submitBtn");
const userEmail = document.getElementById("userEmail");

submitBtn.addEventListener("click", () => {
  const email = encodeURIComponent(userEmail.value || "[tidak diisi]");
  window.location.href = `mailto:galangowin30@gmail.com?subject=New Subscription&body=Email user: ${email}`;
});
