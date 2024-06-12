import React from 'react';
import ServicesList from '../services/ServicesList';

const ServicesSection = () => {

    return (
        <section className="container-fluid py-6 my-0 my-lg-6 position-relative z-1" aria-label="Services Overview" id="services-list">
        <div className="container">
            <div className="container-title text-center">
                <span className="text-headline-label text-headline-label--secondary text-uppercase">Services</span>
                <h2 className="text-headline display-5">What We Do</h2>
            </div>
            <ServicesList />
        </div>
    </section>
    );
};

export default ServicesSection;