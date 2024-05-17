import { getPostBySlug } from '../../app/lib/hygraph';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';

function ResourcePage ({ post }) {

  return (
    <>
      <Head>
          <title>{post.seoOverride.title} - Blog</title>
          <meta name="description" content={post.seoOverride.description} />
          <meta property="og:title" content={post.seoOverride.title} />
          <meta property="og:description" content={post.seoOverride.description} />
          <meta property="og:url" content={`http://www.yourwebsite.com/blog/${post.slug}`} />
          <meta property="og:image" content={post.coverImage.url} />
          <link rel="canonical" href={`http://www.yourwebsite.com/blog/${post.slug}`} />
      </Head>
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
    props: { post }, // This will pass posts to the page component
  };
}

export default ResourcePage;