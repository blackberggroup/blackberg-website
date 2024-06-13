import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
    useEffect(() => {
        const heroImage = document.querySelector('.hero-image');
        const container = document.querySelector('.home-page-hero-section');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height } = container.getBoundingClientRect();
            const xPos = (clientX / width - 0.5) * 80; // Adjust the multiplier for more/less movement
            const yPos = (clientY / height - 0.5) * 80;

            gsap.to(heroImage, {
                x: -xPos,
                y: -yPos,
                duration: .8,
                ease: 'power3.out'
            });
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
            <section id="hero-section" className="home-page-hero-section hero-trigger">
                <div className="container">
                    <div className="col-12">
                        <div className="hero-title">
                            <h1 className="display-2 text-white">Where Strategy <span className="d-block">Meets <span className="text-gradient">Creativity</span>.</span></h1>
                        </div>
                    </div>
                    <img src="/images/home/homehug.webp" className="hero-image" alt="Donut shaped image of a military veteran hugging a family member." />
                </div>
            </section>
    );
};

export default HeroSection;