"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for the Lenis instance to mount
    const lenis = lenisRef.current?.lenis;
    if (!lenis) {
      console.warn("Lenis instance not found – ScrollTrigger proxy not installed");
      return;
    }

    // The element Lenis uses as its scroll container
    const scrollerEl = lenis.container;

    // Tell ScrollTrigger to use Lenis in place of window.scroll
    ScrollTrigger.scrollerProxy(scrollerEl, {
      scrollTop(value) {
        // setter
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        // getter
        return lenis.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // if Lenis is using transforms under the hood, pinType must be "transform"
      pinType: scrollerEl.style.transform ? "transform" : "fixed",
    });

    // Drive Lenis's RAF via GSAP's ticker
    const removeTicker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Whenever Lenis scrolls, trigger a ScrollTrigger.update()
    lenis.on("scroll", ScrollTrigger.update);

    // Recalculate sizes on refresh
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(removeTicker);
      lenis.off("scroll", ScrollTrigger.update);
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
    };
  }, []);

  return (
    <ReactLenis
      // this is the element that gets the `.lenis__scroll` class under the hood
      root
      options={{
        lerp: 0.1,         // how smoothly to interpolate
        duration: 1.2,     // in seconds
        smoothWheel: true, // enable smooth wheel scrolling
        smoothTouch: false // disable smoothing on touch devices
      }}
      // capture the internal Lenis instance so we can proxy it above
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
