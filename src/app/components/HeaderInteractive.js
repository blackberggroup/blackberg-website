'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HeaderInteractive = () => {
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelectorAll('.navbar .nav-item');
    const navLinks = document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-item');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    let lastTouchedElement = null;

    const handleClick = (e) => {
      const elLink = e.currentTarget.querySelector('a[data-bs-toggle]');
      if (elLink && !e.target.closest('.dropdown-menu')) {
        e.preventDefault();
        if (isTouchDevice) {
          if (lastTouchedElement === e.currentTarget) {
            router.replace(elLink.href);
          } else {
            lastTouchedElement = e.currentTarget;
          }
        } else {
          router.replace(elLink.href);
        }
      }
    };

    navItems.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    const setActiveLink = () => {
        const currentPath = router.asPath.split('/').pop();

        navLinks.forEach((item) => {
        const itemPath = item.getAttribute('href').split('/').pop();
        if (itemPath === currentPath) {
            item.classList.add('active');
            item.setAttribute('aria-current', 'page');
        } else {
            item.classList.remove('active');
            item.removeAttribute('aria-current');
        }
        });
    };

    setActiveLink();

    return () => {
      const navButton = document.querySelector('.navbar-toggler');
      navButton.classList.add('collapsed');

      const nav = document.querySelector('.navbar-collapse');
      nav.classList.remove('show');

      navItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });

    };
  }, [router]);

  return null; 
};

export default HeaderInteractive;