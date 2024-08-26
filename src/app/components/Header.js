"use client";

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Header = ({ nav, props }) => {
    const [navbarBackground, setNavbarBackground] = useState(false);
    const menuRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const heroSection = document.querySelector('.hero-trigger');
        const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
  
        // Determine if the menu should be fixed
        if (window.scrollY > 76 && !isFixed) {
          setIsFixed(true);
          setIsHidden(true);
        } else if (window.scrollY <= 76 && isFixed) {
          setIsFixed(false);
          setIsHidden(false);
        }
  
        // Determine if the menu should be shown or hidden
        if (window.scrollY > heroBottom && heroSection) {
          setIsHidden(false);
          setNavbarBackground(true);
        } else if (window.scrollY > 500 && !heroSection) {
          setIsHidden(false);
          setNavbarBackground(true);
        } else if (window.scrollY <= heroBottom && heroSection && !isHidden) {
          setIsHidden(true);
          setNavbarBackground(false);
        } else if (window.scrollY <= 500 && !heroSection && !isHidden) {
          setIsHidden(true);
          setNavbarBackground(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isFixed, isHidden]);
  
    useEffect(() => {
      if (isFixed) {
        menuRef.current.style.position = 'fixed';
        menuRef.current.style.top = '0';
        if (isHidden) {
          gsap.to(menuRef.current, { y: -100, duration: 0 });
        } else {
          gsap.to(menuRef.current, { y: 0, duration: 0.3, ease: "none" });
        }
      } else {
        menuRef.current.style.position = 'absolute';
        menuRef.current.style.top = 'initial';
        gsap.to(menuRef.current, { y: 0, duration: 0 });
      }
    }, [isFixed, isHidden]);

    return (
        <header >
            <nav className={`navbar navbar-expand-lg navbar-dark ${navbarBackground ? 'is-stuck' : ''} ${props?.navStyle}`} aria-label="Main navigation" ref={menuRef}>
                <div className="container">
                    <button className="navbar-toggler collapsed pl-0 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-title d-inline-block ms-2">Menu</span>
                    </button>
                    <Link href="/" className="navbar-brand mx-0" aria-label="Home page">
                        <img src="/images/logo-light.svg" className="navbar-logo" alt="Blackberg Group Logo" />
                    </Link>
                    <Link href="/contact" 
                        className="btn btn-primary btn-sm d-flex d-lg-none"
                        aria-label="Contact page">
                        <span className="d-none d-sm-inline">Contact Us</span> <img src="/images/message-icon.svg" width="20" height="20" className="ms-0 ms-sm-2" alt="" />
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" 
                                    className="nav-link"
                                    aria-label="Home page">
                                    Home
                                </Link>
                            </li>
                            {nav?.navigationLink?.map((item, index) => {
                            const hasMultiplePages = item.page.length > 1;
                            if (hasMultiplePages) {
                                return (
                                <li key={index} className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle"
                                        href={`/${item.url}`} 
                                        id={`navbarDropdown-${index}`} 
                                        role="button" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false">
                                        {item.displayText}
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${index}`}>
                                        {item.page.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link 
                                                    href={`/${item.url}/${subItem.slug}`} 
                                                    className="dropdown-item"
                                                    aria-label={`${subItem.title} page`}>
                                                     {subItem.menuText || subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                );
                            } else {
                                return (
                                <li key={index} className="nav-item">
                                    <Link 
                                        href={`/${item.url}`} 
                                        className="nav-link"
                                        aria-label={`${item.displayText} page`}>
                                        {item.displayText}
                                    </Link>
                                </li>
                                );
                            }
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;