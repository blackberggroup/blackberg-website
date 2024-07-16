import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const FeaturedImageSection = ({ page }) => {

    return (
        <section id="featured-image" className="mb-8" aria-label="Featured image">
            <div className="container">
                <div className="row">
                    <div className="col-12 rounded-4">
                        <div className="inner">
                            <Image src={page.coverImage.url}
                                className="img-fluid rounded-4 w-100 position-relative" 
                                alt={page.coverImage.altText || `${page.title}`}
                                fill={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedImageSection;