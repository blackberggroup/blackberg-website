import Image from 'next/image';
import React from 'react';

const GalleryCarousel = ({ gallery }) => {
    return (
        <section className="gallery gallery-carousel py-7" aria-label={`${gallery.title} Gallery`}>
            <div className="container p-0">
                <div className="row gx-3 gy-3 gx-lg-5">
                    {gallery.images && gallery.images.length > 0 && (
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner rounded">
                            {gallery.images.map((image, index) => (
                                (index % 2 === 0) && (
                                <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                                    <div className="row">
                                    <div className="col-6">
                                        <Image
                                        src={image.url}
                                        className="img-fluid rounded-4 w-100 position-relative"
                                        alt={image.altText}
                                        fill={true}
                                        style={{ objectFit: "cover" }}
                                        loading="lazy"
                                        />
                                    </div>
                                    {index + 1 < gallery.images.length && (
                                        <div className="col-6">
                                        <Image
                                            src={gallery.images[index + 1].url}
                                            className="img-fluid rounded-4 w-100 h-100 position-relative"
                                            alt={gallery.images[index + 1].altText}
                                            fill={true}
                                            style={{ objectFit: "cover" }}
                                            loading="lazy"
                                        />
                                        </div>
                                    )}
                                    </div>
                                </div>
                                )
                            ))}
                        </div>
                        <div class="carousel-buttons mt-5">
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <img src="/images/arrow-narrow-right.svg" width="24" height="24" alt="" />    
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <img src="/images/arrow-narrow-right.svg" width="24" height="24" alt="" />    
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
