// first section animation
let tl = gsap.timeline();
tl.from("#red", {
  x: 1000,
  scale: 0,
  duration: 1.5,
  delay: 0.5,
});
tl.from("#blue", {
  x: 1000,
  scale: 0,
  duration: 1.5,
});
tl.from("#green", {
  x: 1000,
  scale: 0,
  duration: 1.5,
});

// second sectiona animaton
gsap.to("#second h2", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#second h2",
    scroller: "body",
    marker: true,
    start: "top 0%",
    end: "top -100%",
    scrub: true,
    pin: true,
    markers: true,
  },
});
