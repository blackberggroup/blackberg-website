// components/layout/SmoothScrolling.js
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling({ children }) {
  // this ref will point at the ReactLenis component instance
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    // once mounted, lenisRef.current is an object that contains
    // the underlying Lenis engine on `.lenis`
    const lenisWrapper = lenisRef.current;
    if (!lenisWrapper || !lenisWrapper.lenis) {
      console.warn("[Smooth] Lenis engine not ready, skipping proxy");
      return;
    }
    const lenis = lenisWrapper.lenis;

    // ScrollTrigger should proxy against the element Lenis actually scrolls
    // ReactLenis wraps everything in a .lenis__scroll div
    const scrollerEl =
      document.querySelector(".lenis__scroll") || window;

    console.log("[Smooth] hooking ST to Lenis →", { scrollerEl, lenis });

    ScrollTrigger.scrollerProxy(scrollerEl, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // use transform‐pinning if Lenis uses transforms under the hood
      pinType:
        scrollerEl === window || !scrollerEl.style.transform
          ? "fixed"
          : "transform",
    });

    // feed Lenis's RAF into GSAP's ticker
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // whenever ScrollTrigger recalculates, give Lenis a tick
    ScrollTrigger.addEventListener("refresh", () => lenis.raf());
    ScrollTrigger.refresh();

    // cleanup
    return () => {
      gsap.ticker.remove(raf);
      ScrollTrigger.removeEventListener("refresh", () => lenis.raf());
    };
  }, []);

  return (
    <ReactLenis
      root
      // keep your previous smooth‐scroll settings
      options={{
        lerp: 0.1,
        duration: 1,
        smoothWheel: true,
        smoothTouch: false,
      }}
      // attach the component instance to lenisRef
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
