import React from 'react';
import Image from 'next/image';

const GallerySecondSection = ({ page }) => {

    return (
        <section id="gallery-two" className="py-8 py-md-11" aria-label="Second gallery">
            <div className="container">
                <div className="row gx-4 gx-md-5">
                    {page.gallerySecondary && page.gallerySecondary.length > 0 && (
                    <div class="col-12 col-md-6">
                        <Image src={page.gallerySecondary[0].url}
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt={page.gallerySecondary[0].altText}
                             fill={true}
                             loading="lazy" />
                    </div>
                    )}
                    {page.gallerySecondary && page.gallerySecondary.length > 1 && (
                    <div class="col-12 col-md-6 mt-4 mt-md-auto">
                        <Image src={page.gallerySecondary[1].url}
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt={page.gallerySecondary[1].altText}
                             fill={true}
                             loading="lazy" />
                    </div>
                    )}
                    </div>
                </div>
        </section>
    );
};

export default GallerySecondSection;