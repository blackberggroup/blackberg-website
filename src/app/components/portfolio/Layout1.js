import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Layout1 = ({data, index}) => {

    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    if (!data.gallery || data.gallery.length === 0) {
        return null; 
    }

    const slides = data.gallery.map(img => ({ src: img.url }));

    return (
    <div className={`card card--portfolio border-0 bg-transparent ${index === 0 ? 'featured' : ''}`}>
        <div className="row align-items-center">
        <div className="start-0 mt-0 mt-lg-5 z-1 col-12 col-md-12 col-lg-12 col-xl-6">
            <h2 className="mt-0 mt-lg-5">{data.title}</h2>
            <p class="mb-0"><span className="fw-bold">Client:</span> {data.clientName}</p>
            <p className="mt-4 mt-lg-4 mb-0">{data.description}</p>
        </div>
        <div className="col-12 col-lg-12 col-xl-6 mt-5 mt-lg-5">
            {data.gallery && data.gallery.length > 0 && (
                <Image src={data.gallery[0].url}
                        className="img-fluid rounded-4 pointer" 
                        alt={data.gallery[0].altText}
                        height={1500}
                        width={2100}
                        onClick={() => setOpen(true)} 
                        loading="lazy" />
            )}
        </div>
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

export default Layout1;