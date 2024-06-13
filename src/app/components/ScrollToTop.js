import Image from 'next/image';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}>
        <button onClick={scrollToTop} className="scroll-to-top-btn">
            <Image src="/images/arrow-narrow-up.svg"
                className="position-relative"
                width="20"
                height="20"
                alt="Arrow pointing up" /> 
        </button>
    </div>
  );
};

export default ScrollToTop;
