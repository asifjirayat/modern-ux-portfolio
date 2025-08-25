import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register plugin
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Global GSAP settings
gsap.defaults({
  duration: 1,
  ease: "power2.out",
});

// Animation presets
export const animations = {
  fedeInUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  },
  fadeInScale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
  },
  slideInLeft: {
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  },
  slideInRight: {
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  },
};

export default gsap;
