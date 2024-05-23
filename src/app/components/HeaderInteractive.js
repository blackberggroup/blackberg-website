'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NavInteractivity = () => {
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelectorAll('.navbar .nav-item');

    const handleClick = (e) => {
      const elLink = e.currentTarget.querySelector('a[data-bs-toggle]');
      if (elLink && !e.target.closest('.dropdown-menu')) {
        e.preventDefault(); // Prevent default link behavior
        router.push(elLink.href); // Use Next.js router to navigate
      }
    };

    navItems.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, [router]);

  return null; // This component does not render anything
};

export default NavInteractivity;