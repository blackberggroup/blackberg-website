import { RichText } from '@graphcms/rich-text-react-renderer';
import VideoEmbed from './VideoEmbed';
import GalleryEmbed from './GalleryEmbed';

const RichTextRenderer = ({ page }) => {

    const content = page.content.raw;
    const references = page.content.references;
      
    return (
        <RichText 
        content={content}
        references={references}
        renderers={{
          p: ({ children }) => <p>{children}</p>,
          blockquote: ({ children }) => <blockquote>{children}</blockquote>,
          embed: {
            Video: ({ nodeId }) => {
                const videoData = references.find(ref => ref.id === nodeId);
                return videoData ? (
                    <VideoEmbed 
                    title={videoData.title} 
                    url={videoData.url} 
                    coverImage={videoData.coverImage} 
                  />
                ) : null;
              },
              Gallery: ({ nodeId }) => {
                const galleryData = references.find(ref => ref.id === nodeId);
                return galleryData ? (
                    <GalleryEmbed gallery={galleryData} />
                ) : null;
              },
            },
        }}
      />
    );
};

export default RichTextRenderer;