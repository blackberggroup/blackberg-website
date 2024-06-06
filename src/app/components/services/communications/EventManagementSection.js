import Image from 'next/image';
import React, { useEffect } from 'react';

const EventManagementSection = () => {
    let hasAnimated = false;

    useEffect(() => {


        // Check if appraisal count is in viewport on scroll
        window.addEventListener('scroll', () => {

            if (hasAnimated) return; 

            const element = document.getElementById('event-management-stats');
            const rect = element.getBoundingClientRect();
            const inViewport = rect.top <= (window.innerHeight - 100) && rect.bottom >= 100;

            // Trigger animation
            if (inViewport) {
                animateNumber('events-managed-stat', 0, 183, 2000);
                animateNumber('events-attendees-stat', 0, 364, 2000);
                animateNumber('events-speakers-stat', 0, 4026, 2000);
                animateNumber('events-awards-stat', 0, 127, 2000);
                hasAnimated = true; 
            }
        });

    // Animate number
    const animateNumber = (elementId, start, end, duration) => {
        let startTime = null;
        const formatter = new Intl.NumberFormat('en-US');
    
        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            document.getElementById(elementId).innerText = formatter.format(value);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };

    }, []);    

    return (
        <section id="communications-integrated-marketing" className="py-8 py-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="section-image">
                            <Image src="/images/services/communications/event-management.webp"
                                className="image rounded-4 mb-5 mb-md-0"
                                fill={true}
                                alt="Two circles laying on a greed background with small balls organized inside of the two circles."
                            />
                        </div>
                    </div>                        
                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mb-3">Event Management</h2>
                        <p>We ensure your brand story is presented cohesively across platforms, maximizing reach and engagement. Our data-driven strategies not only amplify your message, but also drive awareness and engagement in your mission.</p>
                    </div>
                </div>
                <div className="row align-items-center pt-8 pt-md-11" id="event-management-stats">
                    <div className="col-12 col-xl-10 d-flex flex-column flex-md-row flex-wrap mx-auto">
                        <div className="col-12 col-md-6 col-lg-3 event-management-stat d-flex flex-column text-center">
                            <span class="stat-number display-2" id="events-managed-stat">183</span>
                            <span class="stat-label text-figtree fw-bold-600 mt-1">Events Managed</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 event-management-stat d-flex flex-column text-center mt-6 mt-md-0">
                            <span class="stat-number display-2"><span id="events-attendees-stat">364</span>K</span>
                            <span class="stat-label text-figtree fw-bold-600 mt-1">Attendees</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 event-management-stat d-flex flex-column text-center mt-6 mt-lg-0">
                            <span class="stat-number display-2" id="events-speakers-stat">4,026</span>
                            <span class="stat-label text-figtree fw-bold-600 mt-1">Speakers and Presenters</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 event-management-stat d-flex flex-column text-center mt-6 mt-lg-0">
                            <span class="stat-number display-2" id="events-awards-stat">127</span>
                            <span class="stat-label text-figtree fw-bold-600 mt-1">Awards and Recognitions</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventManagementSection;