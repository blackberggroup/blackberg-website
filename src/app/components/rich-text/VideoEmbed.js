import Image from 'next/image';
import React, { useState } from 'react';

const VideoEmbed = ({ title, url, coverImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const videoUrl = isPlaying ? `${url}?autoplay=1` : url;

  return (
    <section className="video-embed py-7" aria-label="Gallery">
        <div className="container p-0">
            <div className="row">
                <div class="col-12">
                    <div className="ratio ratio-16x9">
                    {!isPlaying && (
                        <button className="video-cover rounded-4 border-0 background-none" onClick={handlePlayVideo}>
                            <Image
                                src={coverImage.url}
                                className="img-fluid rounded-4 w-100 position-relative video-cover-image"
                                alt={coverImage.title} 
                                fill={true}
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                                />
                            <div className="play-button">
                                <div className="position-relative w-100 h-100">
                                    <img className="img-fluid z-2" src="/images/play-icon.svg" alt="play button" />
                                </div>
                            </div>
                        </button>
                    )}
                    {isPlaying && (
                        <iframe
                        src={videoUrl}
                        title={title}
                        width="600"
                        height="400"
                        allow="autoplay"
                        />
                    )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default VideoEmbed;
