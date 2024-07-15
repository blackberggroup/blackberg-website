import Image from 'next/image';
import React from 'react';

const GalleryEmbed = ({ title, images }) => {
  return (
    <section className="gallery py-7" aria-label={`${title} Gallery`}>
        <div className="container p-0">
            <div className="row gx-3 gy-3 gx-lg-5">
                {images && images.length > 0 && (
                <div class="col-12 col-md-7 mt-0">
                    <Image src={images[0].url}
                        className="img-fluid rounded-4 w-100 h-100 position-relative" 
                        alt={images[0].altText}
                        fill={true}
                        style={{objectFit: "cover"}}
                        loading="lazy" />
                </div>
                )}
                <div className="col-12 col-md-5 mt-3 mt-md-0">
                    {images && images.length > 1 && (
                    <div className="col-12">
                        <Image src={images[1].url}
                            className="img-fluid rounded-4 w-100 h-100 position-relative" 
                            alt={images[1].url}
                            fill={true}
                            style={{objectFit: "cover"}}
                            loading="lazy" />
                    </div>
                    )}
                    <div className="col-12 d-flex mt-3 mt-lg-5">
                        {images && images.length > 2 && (
                        <div className="col-6 pe-2 pe-lg-3">
                            <Image src={images[2].url}
                                className="img-fluid rounded-4 w-100 h-100 position-relative" 
                                alt={images[2].altText}
                                fill={true}
                                style={{objectFit: "cover"}}
                                loading="lazy" />
                        </div>
                        )}
                        {images && images.length > 3 && (
                        <div className="col-6 ps-2 ps-lg-3">
                            <Image src={images[3].url}
                                className="img-fluid rounded-4 w-100 h-100 position-relative" 
                                alt={images[3].altText}
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

export default GalleryEmbed;
