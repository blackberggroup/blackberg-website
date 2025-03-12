import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Layout3 = ({data, index}) => {
    
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    if (!data.gallery || data.gallery.length === 0) {
        return null; 
    }

    const slides = data.gallery.map(img => ({ src: img.url }));

    return (
    <div className={`card card--portfolio border-0 bg-transparent position-relative ${index === 0 ? 'featured' : ''}`}>
        <div className="text-content start-0 mt-0 mt-lg-5 z-1 col-12 col-lg-9 col-xl-7">
            <h2 className="mt-0 mt-lg-5">{data.title}</h2>
            <p class="mb-0"><span className="fw-bold">Client</span> {data.clientName}</p>
            <p className="description pe-0 pe-lg-5 mt-5 mt-lg-7 mb-0">{data.description}</p>
        </div>
        <div className="d-flex ms-auto col-12 col-lg-7 mt-5 mt-lg-0">
            {data.gallery && data.gallery.length > 0 && (
                <Image src={data.gallery[0].url}
                        className="img-fluid rounded-4 w-100 position-relative pointer" 
                        alt={data.gallery[0].altText}
                        fill={true}
                        onClick={() => {
                            setPhotoIndex(0);
                            setOpen(true); 
                        }}
                        loading="lazy" />
            )}
        </div>
        <div className="col-12 d-flex mt-5">
            {data.gallery && data.gallery.length > 1 && (
            <div className="col-6 pe-2 pe-lg-3">
                <Image src={data.gallery[1].url}
                    className="img-fluid rounded-4 w-100 position-relative pointer" 
                    alt={data.gallery[1].altText}
                    fill={true}
                    onClick={() => {
                        setPhotoIndex(1);
                        setOpen(true); 
                    }}
                    loading="lazy" />
            </div>
            )}
            {data.gallery && data.gallery.length > 2 && (
            <div className="col-6 ps-2 ps-lg-3">
                <Image src={data.gallery[2].url}
                    className="img-fluid rounded-4 w-100 position-relative pointer" 
                    alt={data.gallery[2].altText}
                    fill={true}
                    onClick={() => {
                        setPhotoIndex(2);
                        setOpen(true); 
                    }}
                    loading="lazy" />
            </div>
            )}
        </div>
        <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={photoIndex}
            />
    </div>
    );
};

export default Layout3;