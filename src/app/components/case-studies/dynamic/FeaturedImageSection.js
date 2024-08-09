import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const FeaturedImageSection = ({ page }) => {
  
    return (
        <section id="featured-image" className="mb-8" aria-label="Featured image">
            <div className="container">
                <div className="row">
                    <div className="col-12 rounded-4 reveal-image">
                        <div className="inner rounded-4">
                            <Image src={page.coverImage.url}
                                className="img-fluid rounded-4 w-100 position-relative will-change" 
                                alt={page.coverImage.altText}
                                fill={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedImageSection;