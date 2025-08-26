import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { animations } from "../utils/gsapConfig.js";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = (dependencies = []) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const tagline = containerRef.current?.querySelector(
        "[data-hero-tagline]"
      );
      const title = containerRef.current?.querySelector("[data-hero-title]");
      const subtitle = containerRef.current?.querySelector(
        "[data-hero-subtitle]"
      );
      const cta = containerRef.current?.querySelector("[data-hero-cta]");

      if (!tagline || !title || !subtitle || !cta) return;

      // Set initial states
      gsap.set([tagline, title, subtitle, cta], {
        opacity: 0,
        y: 60,
      });

      // Create timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(tagline, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "+=0.4"
        )
        .to(
          subtitle,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.6"
        )
        .to(
          cta,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      // Floating animation for title
      gsap.to(title, {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2.5,
      });

      // Breathing animation for tagline
      gsap.to(tagline, {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 3,
      });
    },
    { scope: containerRef, dependencies }
  );
  return containerRef;
};

// Button hover animation
export const useButtonAnimation = (dependencies = []) => {
  const buttonRef = useRef();

  useGSAP(
    () => {
      const button = buttonRef.current;
      if (!button) return;

      // Check if button is disabled
      const isDisabled =
        button.disabled ||
        button.hasAttribute("disabled") ||
        button.classList.contains("opacity-50");
      if (isDisabled) return; // No animations to disabled buttons

      // Create hover timelines
      const hoverTl = gsap.timeline({ paused: true });

      // Setup hover animation timeline
      hoverTl.to(button, {
        scale: 1.05,
        y: -2,
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        duration: 0.3,
        ease: "power2.out",
      });

      const handleMouseEnter = () => {
        hoverTl.play();
      };

      const handleMouseLeave = () => {
        hoverTl.reverse();
      };

      const handleMouseDown = () => {
        gsap.to(button, {
          scale: 0.98,
          duration: 0.1,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        });
      };

      // Add event listeners
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("mousedown", handleMouseDown);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mousedown", handleMouseDown);

        // Kill timelines to prevent memory leaks
        hoverTl.kill();
      };
    },
    { scope: buttonRef, dependencies }
  );
  return buttonRef;
};

// Scroll Trigger Animation
export const useScrollAnimation = (animationsConfig, dependencies = []) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || !animationsConfig?.length) return;

      const animations = [];
      animationsConfig.forEach((config) => {
        const {
          selector,
          from = {
            opacity: 0,
            y: 50,
          },
          to = {
            opacity: 1,
            y: 0,
          },
          start = "top 80%",
          end = "bottom 20%",
          trigger, // Optional custom trigger
          scrub = false,
          pin = false,
          toggleActions = "play none none reverse",
          markers = false,
          stagger = 0,
          duration = 1,
          delay = 0,
          ease = "power2.out",
          counterAnimation = false, // Special flag to counter animations
          ...restConfig
        } = config;

        const elements = container.querySelectorAll(selector);
        if (!elements.length) return;

        const triggerElement = trigger
          ? container.querySelector(trigger)
          : container.querySelector(selector);
        if (!triggerElement) return;

        // Handle counter animations specially
        if (counterAnimation) {
          elements.forEach((element, index) => {
            const finalValue = parseInt(element.textContent) || 0;

            const animation = gsap.fromTo(
              element,
              { ...from, textContent: 0 },
              {
                ...to,
                textContent: finalValue,
                duration,
                ease,
                delay: delay + index * (stagger || 0.2),
                scrollTrigger: {
                  trigger: triggerElement,
                  start,
                  end,
                  scrub,
                  pin,
                  toggleActions,
                  markers,
                  ...restConfig,
                },
                snap: { textContent: 1 },
                onUpdate: function () {
                  const suffix = element.dataset.suffix || "";
                  element.textContent =
                    Math.ceil(this.targets()[0].textContent) + suffix;
                },
              }
            );
            animations.push(animation);
          });
        } else {
          // Regular animation
          const animation = gsap.fromTo(elements, from, {
            ...to,
            duration,
            ease,
            delay,
            stagger: stagger || 0,
            scrollTrigger: {
              trigger: triggerElement,
              start,
              end,
              scrub,
              pin,
              toggleActions,
              markers,
              ...restConfig,
            },
          });
          animations.push(animation);
        }
      });

      return () => {
        animations.forEach((animation) => {
          if (animation.scrollTrigger) animation.scrollTrigger.kill();
          animation.kill();
        });
      };
    },
    { scope: containerRef, dependencies }
  );

  return containerRef;
};

export const useGSAPAnimation = () => {
  return {
    useHeroAnimation,
    useButtonAnimation,
    useScrollAnimation,
  };
};
