import React from 'react';
import Image from 'next/image';

const GalleryFirstSection = ({ page }) => {

    return (
        <section id="gallery" className="py-8 py-md-11" aria-label="Gallery">
            <div className="container">
                <div className="row gx-3 gy-3 gx-lg-5">
                    {page.gallery && page.gallery.length > 0 && (
                    <div class="col-12 col-md-7 mt-0">
                        <Image src={page.gallery[0].url}
                             className="img-fluid rounded-4 w-100 position-relative" 
                             alt={page.gallery[0].altText}
                             fill={true}
                             loading="lazy" />
                    </div>
                    )}
                    <div className="col-12 col-md-5 mt-3 mt-md-0">
                        {page.gallery && page.gallery.length > 1 && (
                        <div className="col-12">
                            <Image src={page.gallery[1].url}
                                className="img-fluid rounded-4 w-100 position-relative" 
                                alt={page.gallery[1].url}
                                fill={true}
                                loading="lazy" />
                        </div>
                        )}
                        <div className="col-12 d-flex mt-3 mt-lg-5">
                            {page.gallery && page.gallery.length > 2 && (
                            <div className="col-6 pe-2 pe-lg-3">
                                <Image src={page.gallery[2].url}
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt={page.gallery[2].altText}
                                    fill={true}
                                    loading="lazy" />
                            </div>
                            )}
                            {page.gallery && page.gallery.length > 3 && (
                            <div className="col-6 ps-2 ps-lg-3">
                                <Image src={page.gallery[3].url}
                                    className="img-fluid rounded-4 w-100 position-relative" 
                                    alt={page.gallery[3].altText}
                                    fill={true}
                                    loading="lazy" />
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default GalleryFirstSection;