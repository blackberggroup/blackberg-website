"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Header = ({ nav, props }) => {
  const { simpleHeader = false, navStyle = "" } = props || {};
  const menuRef = useRef(null);

  const [navbarBackground, setNavbarBackground] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Scroll listener: sets isFixed, isHidden, navbarBackground
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-trigger");
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
      const y = window.scrollY;

      // Fixed toggle
      if (y > 76 && !isFixed) {
        setIsFixed(true);
        setIsHidden(true);
      } else if (y <= 76 && isFixed) {
        setIsFixed(false);
        setIsHidden(false);
      }

      // Background & visibility toggle
      if ((heroSection && y > heroBottom) || (!heroSection && y > 500)) {
        setIsHidden(false);
        setNavbarBackground(true);
      } else {
        setIsHidden(true);
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed, isHidden]);

  // GSAP y-offset for slide-in/hide
  useEffect(() => {
    if (!menuRef.current) return;

    if (isFixed) {
      menuRef.current.style.position = "fixed";
      menuRef.current.style.top = "0";
      gsap.to(menuRef.current, {
        y: isHidden ? -100 : 0,
        duration: isHidden ? 0 : 0.3,
        ease: "none",
      });
    } else {
      menuRef.current.style.position = "absolute";
      menuRef.current.style.top = "initial";
      gsap.to(menuRef.current, { y: 0, duration: 0 });
    }
  }, [isFixed, isHidden]);

  return (
    <header>
      <nav
        ref={menuRef}
        className={`navbar navbar-expand-lg navbar-dark ${
          navbarBackground ? "is-stuck" : ""
        } ${navStyle}`}
        aria-label="Main navigation"
      >
        <div className="container">
          {simpleHeader ? (
            // ─────── Simple Variant ───────
            <>
              <Link
                href="#"
                className="btn btn-secondary d-inline d-lg-none"
                aria-label="Back to site"
              >
                <img
                  src="/images/message-icon.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </Link>
              <Link
                href="/"
                className="navbar-brand order-0 mx-0"
                aria-label="Home page"
              >
                <img
                  src="/images/logo-light.svg"
                  className="navbar-logo"
                  alt="Blackberg Group Logo"
                />
              </Link>
              <div className="d-flex">
                <Link
                  href="#"
                  className="btn btn-secondary d-flex"
                  aria-label="Schedule a Discovery Call"
                >
                  <span className="d-none d-lg-inline">
                    Schedule a Discovery Call
                  </span>
                  <span className="d-inline d-lg-none">
                    <img
                      src="/images/message-icon.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                  </span>
                </Link>
                <Link
                  href="/"
                  className="btn d-flex order-1 text-white d-none d-lg-inline"
                  aria-label="Back to site"
                >
                  Back to site
                </Link>
              </div>
            </>
          ) : (
            // ─────── Full Variant ───────
            <>
              <button
                className="navbar-toggler collapsed pl-0 pe-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-title d-inline-block ms-2">
                  Menu
                </span>
              </button>

              <Link
                href="/"
                className="navbar-brand mx-0"
                aria-label="Home page"
              >
                <img
                  src="/images/logo-light.svg"
                  className="navbar-logo"
                  alt="Blackberg Group Logo"
                />
              </Link>

              <Link
                href="/contact"
                className="btn btn-primary btn-sm d-flex d-lg-none"
                aria-label="Contact page"
              >
                <span className="d-none d-sm-inline">Contact Us</span>{" "}
                <img
                  src="/images/message-icon.svg"
                  width="20"
                  height="20"
                  className="ms-0 ms-sm-2"
                  alt=""
                />
              </Link>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link" aria-label="Home page">
                      Home
                    </Link>
                  </li>
                  {nav?.navigationLink?.map((item, idx) => {
                    const multiple = item.page.length > 1;
                    return multiple ? (
                      <li key={idx} className="nav-item dropdown">
                        <Link
                          href={`/${item.url}`}
                          className="nav-link dropdown-toggle"
                          id={`navbarDropdown-${idx}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {item.displayText}
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`navbarDropdown-${idx}`}
                        >
                          {item.page.map((sub, sidx) => (
                            <li key={sidx}>
                              <Link
                                href={`/${item.url}/${sub.slug}`}
                                className="dropdown-item"
                                aria-label={`${sub.title} page`}
                              >
                                {sub.menuText || sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={idx} className="nav-item">
                        <Link
                          href={`/${item.url}`}
                          className="nav-link"
                          aria-label={`${item.displayText} page`}
                        >
                          {item.displayText}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
