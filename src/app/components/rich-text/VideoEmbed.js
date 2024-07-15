import React, { useState } from 'react';

const VideoEmbed = ({ title, url, coverImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const videoUrl = isPlaying ? `${url}?autoplay=1` : url;

  return (
    <section class="video-embed py-7" aria-label="Gallery">
        <div className="container p-0">
            <div className="row">
                <div class="col-12">
                    <div class="ratio ratio-16x9">
                    {!isPlaying && (
                        <div onClick={handlePlayVideo}>
                            <img className="img-fluid" src={coverImage.url} alt={coverImage.altText} />
                        </div>
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
