import React from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryCarousel from './GalleryCarousel';

const GalleryEmbed = ({ gallery }) => {
    if(gallery.type === 'grid') {
        return (
            <GalleryGrid gallery={gallery} />
        )
    }
    if(gallery.type === 'carousel') {
        return (
            <GalleryCarousel gallery={gallery} />
        )
    }
};

export default GalleryEmbed;
