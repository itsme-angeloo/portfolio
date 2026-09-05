"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      root.dataset.motion = "reduced";
      return;
    }

    root.dataset.motion = "ready";
    root.dataset.scrollDirection = "down";

    let lastScrollY = window.scrollY;
    let ticking = false;
    let ambientAnimation = 0;
    let ambientX = 40;
    let ambientY = window.innerHeight * 0.72;
    let ambientStartX = 18;
    let targetX = ambientX;
    let targetY = ambientY;
    let targetStartX = ambientStartX;
    let targetStrength = 0.28;

    const updateAmbientTarget = () => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-path-target]"),
      );

      if (window.innerWidth < 768 || targets.length === 0) {
        root.dataset.path = "hidden";
        return;
      }

      root.dataset.path = "ready";

      const activeZone = window.innerHeight * 0.42;
      let closestTarget = targets[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - activeZone);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestTarget = target;
        }
      });

      const rect = closestTarget.getBoundingClientRect();
      const headingY = rect.top + rect.height / 2;
      const headingX = rect.left;
      const attachFromLeft = headingX > window.innerWidth * 0.28;
      const lineLength = Math.min(168, Math.max(72, window.innerWidth * 0.12));

      targetY = headingY;
      targetX = attachFromLeft ? headingX - 18 : rect.right + 18;
      targetStartX = attachFromLeft ? targetX - lineLength : targetX + lineLength;
      targetStrength = Math.max(
        0.2,
        0.62 - Math.min(closestDistance / activeZone, 1) * 0.34,
      );
    };

    const animateAmbientPath = () => {
      ambientX += (targetX - ambientX) * 0.12;
      ambientY += (targetY - ambientY) * 0.12;
      ambientStartX += (targetStartX - ambientStartX) * 0.12;

      root.style.setProperty("--ambient-x", `${ambientX}px`);
      root.style.setProperty("--ambient-y", `${ambientY}px`);
      root.style.setProperty("--ambient-start-x", `${ambientStartX}px`);
      root.style.setProperty("--ambient-strength", `${targetStrength}`);

      ambientAnimation = window.requestAnimationFrame(animateAmbientPath);
    };

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      updateAmbientTarget();

      if (Math.abs(currentScrollY - lastScrollY) > 4) {
        root.dataset.scrollDirection =
          currentScrollY > lastScrollY ? "down" : "up";
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    const hero = document.querySelector<HTMLElement>("#top");
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    const handleHeroPointerMove = (event: PointerEvent) => {
      if (!hero || !supportsFinePointer) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      hero.style.setProperty("--hero-x", `${x}%`);
      hero.style.setProperty("--hero-y", `${y}%`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
          } else {
            entry.target.removeAttribute("data-revealed");
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => observer.observe(element));
    updateScrollState();
    animateAmbientPath();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    hero?.addEventListener("pointermove", handleHeroPointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      hero?.removeEventListener("pointermove", handleHeroPointerMove);
      window.cancelAnimationFrame(ambientAnimation);
      observer.disconnect();
      delete root.dataset.motion;
      delete root.dataset.scrollDirection;
      delete root.dataset.path;
      root.style.removeProperty("--ambient-x");
      root.style.removeProperty("--ambient-y");
      root.style.removeProperty("--ambient-start-x");
      root.style.removeProperty("--ambient-strength");
    };
  }, []);

  return null;
}
