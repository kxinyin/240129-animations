const tl = gsap.timeline({ default: { duration: 0.75 } });

tl.fromTo(
  ".box",
  { opacity: 0, scale: 0.6 },
  {
    opacity: 1,
    scale: 1,
    ease: "elastic.out(1, 0.75)",
    duration: 0.75,
    stagger: 0.4,
  }
);
