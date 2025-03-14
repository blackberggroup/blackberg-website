import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Layout2 = ({data, index}) => {

    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    if (!data.gallery || data.gallery.length === 0) {
        return null; 
    }

    const slides = data.gallery.map(img => ({ src: img.url }));
    
    return (
    <div className={`card card--portfolio border-0 bg-transparent position-relative flex-column-reverse flex-lg-row ${index === 0 ? 'featured' : ''}`}>
        <div className="d-flex col-12 col-lg-7 mt-5 mt-lg-0 me-auto">
            {data.gallery && data.gallery.length > 0 && (
                <Image src={data.gallery[0].url}
                        className="img-fluid rounded-4 w-100 position-relative pointer" 
                        alt={data.gallery[0].altText}
                        fill={true}
                        onClick={() => setOpen(true)} 
                        loading="lazy" />
            )}
        </div>
        <div className="text-content end-0 mt-0 mt-lg-5 z-1 col-12 col-lg-7 align-items-start align-items-lg-end d-flex flex-column">
            <h2 className="mt-0 mt-lg-5 text-start text-lg-end">{data.title}</h2>
            <p class="mb-0"><span className="fw-bold">Client</span> {data.clientName}</p>
            <p className="description ps-0 ps-lg-8 mt-5 mt-lg-7 mb-0">{data.description}</p>
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

export default Layout2;