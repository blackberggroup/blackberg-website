import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EventManagementSection = () => {
    const countersRef = useRef([]);

    useEffect(() => {
        const updateCount = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = +counter.innerText.replace(/,/g, '');
            const increment = target / 200; // Adjust this value to control the speed of the count up

            if (count < target) {
                counter.innerText = Math.ceil(count + increment).toLocaleString();
                setTimeout(() => updateCount(counter), 20); // Adjust this value to control the refresh rate
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        countersRef.current.forEach(counter => observer.observe(counter));
        
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="communications-event-management" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="section-image">
                            <Image src="/images/services/communications/event-management.webp"
                                className="image rounded-4 mb-5 mb-md-0"
                                fill={true}
                                alt="A woman on stage giving a persuasive speech at an event."
                            />
                        </div>
                    </div>                        
                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mb-3">Event Management</h2>
                        <p>We craft events that translate content into memorable experiences and lasting connections. From intimate gatherings and workshops to national conferences, we manage dozens of annual events designed to captivate and inspire audiences through in-person, hybrid, and virtual platforms.</p>
                    </div>
                </div>
                <div className="row mt-5 text-center counter">
                    <div className="col-6 col-lg-3 mb-7 mb-lg-0">
                        <span className="counter__amount display-3" data-target="183" ref={el => countersRef.current[0] = el}>
                            0
                        </span>
                        <div className="counter__label h6">
                            Events Managed
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-7 mb-lg-0">
                        <span className="counter__amount display-3" data-target="364" ref={el => countersRef.current[1] = el}>
                            0
                        </span>
                        <span className="display-3">k</span>
                        <div className="counter__label h6">
                            Attendees
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <span className="counter__amount display-3" data-target="4026" ref={el => countersRef.current[2] = el}>
                            0
                        </span>
                        <div className="counter__label h6">
                            Speakers and Presenters
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <span className="counter__amount display-3" data-target="127" ref={el => countersRef.current[3] = el}>
                            0
                        </span>
                        <div className="counter__label h6">
                            Awards and Recognitions
                        </div>
                    </div>                                                            
                </div>
            </div>
        </section>
    );
};

export default EventManagementSection;
