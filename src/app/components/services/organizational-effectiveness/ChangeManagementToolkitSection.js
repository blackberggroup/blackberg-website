import Image from 'next/image';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const ChangeManagementToolkitSection = () => {
  useEffect(() => {

    gsap.fromTo('.circle-dotted', 
      { opacity: 0 }, 
      { 
        opacity: 1,
        scrollTrigger: {
          trigger: '.circle-dotted',
          start: 'top bottom', 
          end: 'center center', 
          scrub: true,
        }
      }
    );
  }, []);
  
    return (
            <section id="organizational-effectiveness-change-management-toolkit" className="py-8 py-md-11">
                <div className="container">
                    <div className="section-wrapper rounded-4 p-6 p-md-8">
                        <div className="text-center mb-5 mb-lg-8">
                            <span className="text-headline-label text-headline-label--secondary text-uppercase text-white">Blackberg Group</span>
                            <h2 className="text-headline display-5 text-white">Our Change Management Toolkit</h2>
                        </div>
                        <div className="row align-items-center position-relative z-2 text-white">
                            <div className="col-12">
                                <p>Blackberg has built a customizable change management toolkit to equip executives, managers, and workforces with the necessary tools to confidently embrace change. Rooted in Kotter&lsquo;s 8-Step Change Model, Prosci best practices, and our practitioner insights, our tools range from change assessments and communications checklists to manager trainings and enterprise roadmaps.</p>
                                <div className="row mt-8">
                                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 offset-md-2 offset-lg-3 offset-xl-4">
                                        <div id="toolkit-prosci" className="toolkit-card card">
                                            <div className="card-body align-items-center d-flex flex-row shadow-lg">
                                                <div className="icon icon--secondary me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="#101828" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 22s.85-.121 4.364-3.636A9 9 0 0 0 14 3.224M14 22h6m-6 0v-6M10 2s-.85.122-4.364 3.636A9 9 0 0 0 10 20.776M10 2H4m6 0v6"/>
                                                    </svg>
                                                </div>
                                                <h3 className="h5 m-0">Prosci Methodology</h3>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-8 col-lg-5 col-xl-4 offset-md-2 offset-lg-0 offset-xl-1  mt-6 mt-lg-8">
                                        <div id="toolkit-kotters" className="toolkit-card card">
                                            <div className="card-body align-items-center d-flex flex-row shadow-lg">
                                                <div className="icon icon--secondary me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="#101828" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h-.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C12 17.72 12 16.88 12 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C14.28 4 15.12 4 16.8 4h.2m0 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0-16a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM7 12h10M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/>
                                                    </svg>
                                                </div>
                                                <h3 className="h5 m-0">Kotter&lsquo;s Model</h3>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-5 col-xl-4 offset-md-2 offset-lg-2 offset-xl-2 mt-6 mt-lg-8">
                                        <div id="toolkit-insights" className="toolkit-card card">
                                            <div className="card-body align-items-center d-flex flex-row shadow-lg">
                                                <div className="icon icon--secondary me-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 11L11 13L15.5 8.5M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                                <h3 className="h5 m-0">Practitioner Insights</h3>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="circle-dotted">
                            <img src="/images/circle-dotted.svg" className="img-fluid unselectable" alt="" />
                        </div>
                        <div className="svg-target"></div>
                    </div>
                </div>
            </section>
    );
};

export default ChangeManagementToolkitSection;