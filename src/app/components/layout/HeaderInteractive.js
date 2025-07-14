'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HeaderInteractive = () => {
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelectorAll('.navbar .nav-item');
    const navLinks = document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-item');
    const navButton = document.querySelector('.navbar-toggler');
    const nav = document.querySelector('.navbar');
    const navCollapse = document.querySelector('.navbar-collapse');

    // If there's no navbar on the page, bail
    if (!nav) return;

    // Override Bootstrap default behavior: makes parent dropdown clickable
    const handleClick = (e) => {
      const elLink = e.currentTarget.querySelector('a[data-bs-toggle]');
      if (elLink && !e.target.closest('.dropdown-menu')) {
        e.preventDefault();
        if (window.innerWidth < 992) {
          if (e.currentTarget.classList.contains('clicked')) {
            router.replace(elLink.href);
          } else {
            e.currentTarget.classList.add('clicked');
            const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
            dropdownMenu?.classList.add('d-block');
          }
        } else {
          router.replace(elLink.href);
        }
      }
    };

    // Attach event listeners to nav items (click & touchstart for iOS)
    navItems.forEach((item) => {
      item.addEventListener('click', handleClick);
      item.addEventListener('touchstart', handleClick);
    });

    // Highlight active link
    const setActiveLink = () => {
      const currentPath = router.pathname.split('/').pop();
      navLinks.forEach((item) => {
        const itemPath = item.getAttribute('href')?.split('/').pop();
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

    // Toggle shadow on navbar when toggler is clicked
    const handleNavToggle = () => {
      if (!nav.classList.contains('is-stuck')) {
        nav.classList.toggle('is-shadow');
      }
    };
    navButton?.addEventListener('click', handleNavToggle);

    // Cleanup
    return () => {
      // Reset toggler
      if (navButton) {
        navButton.classList.add('collapsed');
        navButton.removeEventListener('click', handleNavToggle);
      }
      // Hide mobile collapse
      if (navCollapse) {
        navCollapse.classList.remove('show');
      }
      // Remove any open dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('d-block');
      });
      // Remove item listeners and clicked state
      navItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
        item.removeEventListener('touchstart', handleClick);
        item.classList.remove('clicked');
      });
    };
  }, [router]);

  return null;
};

export default HeaderInteractive;