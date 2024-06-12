import PostCard from '../../app/components/PostCard';
import { getPageBySlug, getAllPosts } from '../../app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import { RichText } from '@graphcms/rich-text-react-renderer';

function Resources ({ page, posts }) {
  return (
    <>
      <SEOHead page={page} />
      <div className="container-fluid">
          <div className="container">
              <h1>Recent Resources</h1>
              <div className="row mt-4">
              {posts.map(post => (
                  <div className="col-12 col-sm-4" key={post.id}>
                      <PostCard post={post} />
                  </div>
              ))}
              </div>
          </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

    const slug = context.resolvedUrl.substring(1);

    const [page, posts] = await Promise.all([
        getPageBySlug(slug),
        getAllPosts()
    ]);

    return {
        props: { 
            page: page,
            posts: posts || [],
            navStyle: "dark", 
            footerCta: true
        },
    };
}

export default Resources;