import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const OurTeamSection = () => { 

    return (
            <section id="our-team-section" className="py-8 py-md-11 position-relative z-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4 pe-5">
                                <h2 className="display-5 mb-3">Our Team</h2>
                                <p>We bring a wealth of experience from a wide range of backgrounds.</p>    
                                <p>Our philosophy is simple; hire great people and give them the resources and support to do their best work.</p>  
                                <Link href="/about/team" aria-label="Learn more about our Strategy services" className="btn btn-primary btn-icon-invert align-self-start mt-3">
                                    View The Team
                                    <img src="/images/arrow-narrow-right.svg" width="20" height="20" className="ms-2" alt="" />    
                                </Link>                        
                        </div>                        
                        <div className="col-12 col-lg-6 d-flex flex-column flex-md-row ms-auto mt-4 mt-lg-0">
                            <div className="col-5 mx-auto">
                                <Image src="/images/about/emily-uhl.webp" 
                                alt="Emily Uhl - Blackberg Group President and Founder" 
                                fill={true}
                                class="img-fluid position-relative h-auto mb-4 mb-lg-0" />
                            </div>
                            <div className="col-12 col-md-7 ps-0 ps-md-6">
                                <h3 className="h4 mb-2">Emily Uhl</h3>
                                <p class="mb-2">President and Founder</p>
                                <p class="m-0">Beginning with the idea of continuing to serve her country while incorporating best practice from her experiences, Navy veteran Emily Uhl founded Blackberg Group.  A graduate from the United States Naval Academy and Old Dominion University, she served 12 years, both on active duty and in the Navy Reserves. Beyond the Navy, Emily was a  program manager for General Atomics Aeronautical Systems, Inc. supporting both Air Force programs and special projects. Most recently she has spent time living abroad, while supporting local Navy commands and volunteer organizations. </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column flex-md-row-reverse ms-auto mt-6 mt-md-8">
                            <div className="col-5 mx-auto">
                                <Image src="/images/about/leanne-reisz.webp" 
                                alt="Leanne Reisz - Blackberg Group Executive Vide President" 
                                fill={true}
                                class="img-fluid position-relative h-auto mb-4 mb-lg-0" />
                            </div>
                            <div className="col-12 col-md-7 ms-0 pe-0 pe-md-6">
                                <h3 className="h4 mb-2">Leanne Reisz</h3>
                                <p class="mb-2">Executive Vice President</p>
                                <p class="m-0">After more than a decade delivering communications support to public and private sector clients, Leanne partnered with Emily Uhl to form Blackberg Group. Throughout her career, she has worked with eight federal agencies in the defense, health care, and information technology sectors. She is passionate about leading high-performance teams in strategic planning, communications, and change management to uplift public service missions. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default OurTeamSection;