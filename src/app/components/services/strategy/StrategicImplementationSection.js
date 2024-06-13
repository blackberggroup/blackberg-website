import React, { useEffect } from 'react';
import gsap from 'gsap';

const StrategicImplementationSection = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const xPos = (clientX / windowWidth - 0.5) * 2;
            const yPos = (clientY / windowHeight - 0.5) * 2;

            gsap.to('.strategic-implementation__desktop', {
                x: xPos * 30,
                y: yPos * 30,
                duration: 0.5,
                ease: 'power3.out'
            });

            gsap.to('.strategic-implementation__mobile', {
                x: xPos * 40,
                y: yPos * -10,
                duration: 0.5,
                ease: 'power3.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);     

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="strategy-strategic-implementation" className="py-8 py-md-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <h2 className="display-5 mb-3 text-center">Strategic Implementation</h2>
                        <p>Blackberg deploys an interdisciplinary approach to strategic planning—synthesizing strategic awareness and formulating a response that positions your organization for success. Our experts work in tandem with leaders to refine their organization&lsquo;s vision, mission, purpose, goals, and strategic objectives.</p>
                        <p>We construct goals and strategic objectives in a time-bound and priority manner, including objectives based on predicted trends for future-oriented takes. This enables proactive strategic positioning and planning, while maintaining flexibility for alternative future states.</p>                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-8 offset-lg-2">
                        <div class="strategic-implementation__image py-8 text-center position-relative">
                            <div class="strategic-implementation__desktop d-inline-block mx-auto z-2">
                                <img src="/images/services/strategy/strategic-implementation-desktop.webp" className="img-fluid" />
                            </div>
                            <div class="strategic-implementation__mobile position-absolute top-0 end-0 z-3">
                                <img src="/images/services/strategy/strategic-implementation-mobile.webp" className="img-fluid" />
                            </div> 
                            <div class="strategic-implementation__circles position-absolute top-50 end-0 translate-middle-y z-n1 mt-3">
                                <img src="/images/services/strategy/circles.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                        <p>As part of our implementation, Blackberg develops and deploys dashboard tools that offer executives with continuous monitoring of their strategy&lsquo;s progress. We customize views to your unique strategic goals and performance measurements.</p>
                    </div>
                </div>                
            </div>
        </section>
    );
};

export default StrategicImplementationSection;