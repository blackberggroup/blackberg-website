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
                href="/"
                className="btn btn-light d-inline d-lg-none"
                aria-label="Back to site"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 7.50033H13.75C15.8211 7.50033 17.5 9.17926 17.5 11.2503C17.5 13.3214 15.8211 15.0003 13.75 15.0003H10M2.5 7.50033L5.83333 4.16699M2.5 7.50033L5.83333 10.8337" stroke="#344054" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                  href="https://outlook.office.com/book/EventsTest@blackberggroup.com/s/fBZMSlM-Tk-Cu35B2GweMg2?ismsaljsauthenabled"
                  className="btn btn-secondary d-flex"
                  aria-label="Schedule a Discovery Call"
                  target="_blank"
                >
                  <span className="d-none d-lg-inline">
                    Schedule a Discovery Call
                  </span>
                  <span className="d-inline d-lg-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z" stroke="#1A1903" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/"
                  className="btn d-flex order-1 d-none d-lg-inline btn-back-to-site"
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
