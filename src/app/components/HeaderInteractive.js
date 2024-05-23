'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NavInteractivity = () => {
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelectorAll('.navbar .nav-item');
    const navLinks = document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-item');

    const handleClick = (e) => {
      const elLink = e.currentTarget.querySelector('a[data-bs-toggle]');
      if (elLink && !e.target.closest('.dropdown-menu')) {
        e.preventDefault(); // Prevent default link behavior
        router.replace(elLink.href); // Use Next.js router to navigate
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
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const NavInteractivity = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const navItems = document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-item');

//     const setActiveLink = () => {
//       const currentPath = router.asPath.split('/').pop();

//       navItems.forEach((item) => {
//         const itemPath = item.getAttribute('href').split('/').pop();
//         if (itemPath === currentPath) {
//           item.classList.add('active');
//           item.setAttribute('aria-current', 'page');
//         } else {
//           item.classList.remove('active');
//           item.removeAttribute('aria-current');
//         }
//       });
//     };

//     const handleClick = (e) => {
//       const elLink = e.currentTarget.querySelector('a[data-bs-toggle]');
//       if (elLink && !e.target.closest('.dropdown-menu')) {
//         e.preventDefault(); // Prevent default link behavior
//         router.push(elLink.href); // Use Next.js router to navigate
//       }
//     };

//     const handleDropdownClick = (e) => {
//       const target = e.target.closest('a[data-bs-toggle]');
//       if (target && target.href && !e.target.closest('.dropdown-menu')) {
//         e.preventDefault(); // Prevent default link behavior
//         router.push(target.href); // Use Next.js router to navigate
//       }
//     };

//     setActiveLink();
//     navItems.forEach((item) => {
//       item.addEventListener('click', handleClick);
//     });

//     document.querySelectorAll('.navbar .dropdown-toggle').forEach((item) => {
//       item.addEventListener('click', handleDropdownClick);
//     });

//     router.events.on('routeChangeComplete', setActiveLink);

//     // Cleanup event listeners on component unmount
//     return () => {
//       navItems.forEach((item) => {
//         item.removeEventListener('click', handleClick);
//       });
//       document.querySelectorAll('.navbar .dropdown-toggle').forEach((item) => {
//         item.removeEventListener('click', handleDropdownClick);
//       });
//       router.events.off('routeChangeComplete', setActiveLink);
//     };
//   }, [router]);

//   return null; // This component does not render anything
// };

// export default NavInteractivity;
