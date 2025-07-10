import gsap from "gsap";

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
