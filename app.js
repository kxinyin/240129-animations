const tl = gsap.timeline({ default: { duration: 0.75 } });

tl.fromTo(
  ".box",
  { opacity: 0, scale: 0.75 },
  {
    opacity: 1,
    scale: 1,
    ease: "elastic.out(1, 0.4)",
    duration: 1.25,
    stagger: 0.4,
  }
);

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    tl.to(box, {
      background: "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 4px 30px rgba(255, 255, 255, 0.55)",
      duration: 0.1,
      ease: "power2.out",
    });
  });

  box.addEventListener("mouseleave", () => {
    tl.to(box, {
      background: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 4px 30px rgba(255, 255, 255, 0.15)",
      duration: 0.1,
      ease: "power2.out",
    });
  });
});
