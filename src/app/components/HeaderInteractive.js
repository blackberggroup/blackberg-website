'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HeaderInteractive = () => {
  const router = useRouter();

  useEffect(() => {

    const navItems = document.querySelectorAll('.navbar .nav-item');
    const navLinks = document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-item');

    // Override Bootstrap default behavior
    // Allows parent of dropdown to be clickable 
    const handleClick = (e) => {
      const elLink = e.currentTarget.querySelector('a[data-bs-toggle]');
      if (elLink && !e.target.closest('.dropdown-menu')) {
        e.preventDefault();
        if (window.innerWidth < 992) {
          if(e.currentTarget.classList.contains('clicked')){
            router.replace(elLink.href);
          } else {
            e.currentTarget.classList.add('clicked');
            e.target.nextSibling.classList.add('d-block');
          }
        } else {
          router.replace(elLink.href);
        }
      }
    };

    // Attach event listener for all nav items 
    // Required click & touchstart for iOS safari bug 
    navItems.forEach((item) => {
      item.addEventListener('click', handleClick);
      item.addEventListener('touchstart', handleClick)
    });

    // Add indicator in menu to show active page
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

    // Clean up function 
    return () => {
      const navButton = document.querySelector('.navbar-toggler');
      navButton.classList.add('collapsed');

      const nav = document.querySelector('.navbar-collapse');
      nav.classList.remove('show');

      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('d-block');
      });

      navItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
        item.removeEventListener('touchstart', handleClick)
        item.classList.remove('clicked');
      });

    };
  }, [router]);

  return null; 
};

export default HeaderInteractive;