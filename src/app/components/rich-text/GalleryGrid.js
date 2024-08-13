import Image from 'next/image';
import React from 'react';

const GalleryGrid = ({ gallery }) => {
    return (
        <section className="gallery py-7" aria-label={`${gallery.title} Gallery`}>
            <div className="container p-0">
                <div className="row gx-3 gy-3 gx-lg-5">
                    {gallery.images && gallery.images.length > 0 && (
                    <div class="col-12 col-md-7 mt-0">
                        <Image src={gallery.images[0].url}
                            className="img-fluid rounded-4 w-100 h-100 position-relative" 
                            alt={gallery.images[0].altText || `${gallery.title} ${index}`}
                            fill={true}
                            style={{objectFit: "cover"}}
                            loading="lazy" />
                    </div>
                    )}
                    <div className="col-12 col-md-5 mt-3 mt-md-0">
                        {gallery.images && gallery.images.length > 1 && (
                        <div className="col-12">
                            <Image src={gallery.images[1].url}
                                className="img-fluid rounded-4 w-100 h-100 position-relative" 
                                alt={gallery.images[1].altText || `${gallery.title} ${index}`}
                                fill={true}
                                style={{objectFit: "cover"}}
                                loading="lazy" />
                        </div>
                        )}
                        <div className="col-12 d-flex mt-3 mt-lg-5">
                            {gallery.images && gallery.images.length > 2 && (
                            <div className="col-6 pe-2 pe-lg-3">
                                <Image src={gallery.images[2].url}
                                    className="img-fluid rounded-4 w-100 h-100 position-relative" 
                                    alt={gallery.images[2].altText || `${gallery.title} ${index}`}
                                    fill={true}
                                    style={{objectFit: "cover"}}
                                    loading="lazy" />
                            </div>
                            )}
                            {gallery.images && gallery.images.length > 3 && (
                            <div className="col-6 ps-2 ps-lg-3">
                                <Image src={gallery.images[3].url}
                                    className="img-fluid rounded-4 w-100 h-100 position-relative" 
                                    alt={gallery.images[3].altText || `${gallery.title} ${index}`}
                                    fill={true}
                                    style={{objectFit: "cover"}}
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

export default GalleryGrid;
