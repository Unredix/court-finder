import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Snap ScrollTrigger for sections
gsap.utils.toArray(".snap").forEach((snap, i) => {
  ScrollTrigger.create({
    trigger: snap,
    start: "top top",
    snap: 1,
    markers: true,
    pinSpacing: true,
    anticipatePin: 1,
  });
});

ScrollTrigger.defaults({
  snap: {
    snapTo: 1 / (document.querySelectorAll(".snap").length - 1),
    duration: 0.5,
    ease: "power1.inOut",
    delay: 0.5, // Add a delay before snapping
    inertia: false, // Prevents extra scrolling after snap
  },
});

const animLink = document.querySelectorAll(".anim-link");

animLink.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  link.addEventListener("mouseleave", (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

const images = document.querySelectorAll(".floating-img");

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = (e.clientX - innerWidth / 2) / 50;
  const offsetY = (e.clientY - innerHeight / 2) / 50;

  images.forEach((img, index) => {
    const depth = (index + 1) * 2;
    gsap.to(img, {
      x: offsetX * depth,
      y: offsetY * depth,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

document.querySelectorAll(".search-option-item").forEach((item) => {
  const img = item.querySelector("img");
  item.addEventListener("mouseenter", () => {
    // Animate the item itself (scale and background)
    gsap.to(item, {
      scale: 1.05,
      backgroundColor: "rgba(255,255,255,0.1)",
      duration: 0.1,
      ease: "power2.out",
    });
    // Animate the image (glass effect)
    gsap.to(img, {
      scale: 0.85,
      x: gsap.utils.random(-30, 30),
      y: gsap.utils.random(-30, 30),
      rotate: gsap.utils.random(-10, 10),
      duration: 0.4,
      ease: "power2.out",
    });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      scale: 1,
      backgroundColor: "transparent",
      duration: 0.1,
      ease: "power2.out",
    });
    gsap.to(img, {
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });
});

// Fly-in animation for search options
gsap.from(".search-option-item", {
  x: -500,
  opacity: 0.5,
  stagger: 0.2,
  duration: 3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".search-option",
    start: "top 80%",
    toggleActions: "play none none none",
    once: true,
  },
});
// Fade-in animation for the review section
gsap.from(".review-item", {
  opacity: 0,
  duration: 2.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".review",
    start: "top 80%",
    toggleActions: "play none none none",
    once: true,
  },
});
