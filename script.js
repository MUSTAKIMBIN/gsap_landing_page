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
