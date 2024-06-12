import React from 'react';
import ServicesList from './ServicesList';

const ServicesSection = () => {
    return (
        <section className="container-fluid py-6 my-0 my-lg-6 position-relative z-1" aria-label="Services Overview" id="services-list">
        <div className="container">
            <ServicesList />
        </div>
    </section>
    );
};

export default ServicesSection;