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
                        <p>Blackberg turns strategic visions into actionable plans, seamlessly bridging the gap between strategy  and execution to drive measurable results. With a deep understanding of change management, we optimize personnel, technology, and budget, enabling smooth transitions and stakeholder buy-in.</p>
                        <p>Our experts collaborate with clients every step of the way, ensuring strategic initiatives are aligned with organizational goals and maximize impact. Blackberg&lsquo;s ongoing support uses established benchmarks and KPIs to monitor progress, measure success, and adjust course based on feedback. With Blackberg, vision becomes a measurable, repeatable reality that sets you on a path to success.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="strategic-implementation__image py-8 text-center position-relative">
                            <div className="strategic-implementation__desktop d-inline-block mx-auto z-2">
                                <img src="/images/services/strategy/strategic-implementation-desktop.webp" className="img-fluid" alt="Screenshot of a desktop dashboard" />
                            </div>
                            <div className="strategic-implementation__mobile position-absolute top-0 end-0 z-3">
                                <img src="/images/services/strategy/strategic-implementation-mobile.webp" className="img-fluid" alt="Screenshot of a mobile dashboard" />
                            </div> 
                            <div className="strategic-implementation__circles position-absolute top-50 end-0 translate-middle-y z-n1 mt-3">
                                <img src="/images/services/strategy/circles.svg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                        <p>As part of our implementation, Blackberg develops and deploys dashboard tools that offer executives with continuous monitoring of their strategy&lsquo;s progress. We customize views to your unique strategic goals and performance measurements.</p>
                    </div>
                </div>                
            </div>
        </section>
    );
};

export default StrategicImplementationSection;