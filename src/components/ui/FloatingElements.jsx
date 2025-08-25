import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "../../utils/gsapConfig.js";
import { div } from "three/tsl";

const FloatingElements = ({ count = 8 }) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const elements = containerRef.current.children;

      Array.from(elements).forEach((element, index) => {
        // Random initial position
        gsap.set(element, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5,
        });

        // Continuous floating animation
        gsap.to(element, {
          x: `+=${(Math.random() - 0.5) * 400}`,
          y: `+= ${(Math.random() - 0.5) * 400}`,
          rotation: `+=${360 + Math.random() * 360}`,
          duration: 20 + Math.random() * 20,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: index * 0.5,
        });

        // Breathing effect
        gsap.to(element, {
          scale: `+=${0.2 + Math.random() + 0.3}`,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index + 0.3,
        });
      });

      // Mouse parallax effect
      let requestId;
      const handleMouseMove = (e) => {
        if (requestId) return;

        requestId = requestAnimationFrame(() => {
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          Array.from(elements).forEach((element, index) => {
            const depth = (index + 1) * 0.02;
            const moveX = (clientX - centerX) * depth;
            const moveY = (clientY - centerY) * depth;

            gsap.set(element, {
              x: moveX,
              y: moveY,
            });
          });

          requestId = null;
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (requestId) cancelAnimationFrame(requestId);
      };
    },
    { scope: containerRef }
  );

  const colors = ["blue", "purple", "pink", "indigo", "cyan"];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {Array.from({ length: count }).map((_, index) => {
        const color = colors[index % colors.length];
        const size = 4 + (index % 3) * 4; // Varying sizes

        return (
          <div
            key={index}
            className={`absolute rounded-full opacity-20 bg-gradient-to-br from-${color}-400 to-${color}-600 blur-sm`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
