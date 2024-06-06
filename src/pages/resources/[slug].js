import { getPostBySlug } from '../../app/lib/hygraph';
import { RichText } from '@graphcms/rich-text-react-renderer';
import SEOHead from '@/app/components/SEOHead';

function ResourcePage ({ post }) {

  return (
    <>
      <SEOHead page={post} />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <article>
              <div className="hero-image mb-4">
                  <div className="reveal">
                    <img src={post.coverImage.url} alt="" className="img-fluid rounded mb-4" />
                  </div>
              </div>
              <div>
                <h1>{post.title}</h1>
                <RichText content={post.content.raw} />
              </div>
            </article>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export async function getServerSideProps(context) {

  const { slug } = context.params;

  const post = await getPostBySlug(slug);

  return {
    props: { 
        post: post,
        navStyle: "dark", 
        footerCta: true
    },
};
}

export default ResourcePage;