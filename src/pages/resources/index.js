import PostCard from '../../app/components/PostCard';
import { getAllPosts } from '../../app/lib/hygraph';
import Head from 'next/head';

function Resources ({ posts }) {
  return (
    <>
        <Head>
          <title>Resources - My Website</title>
          <meta name="description" content="Learn more about what we do and who we are." />
          <meta name="keywords" content="about us, company, my website" />
          <meta property="og:title" content="About Us - My Website" />
          <meta property="og:description" content="Detailed information about our company and services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.yourwebsite.com/about" />
          <meta property="og:image" content="http://www.yourwebsite.com/path_to_image.jpg" />
          <link rel="canonical" href="http://www.yourwebsite.com/about" />
      </Head>
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

export async function getServerSideProps() {
  const posts = await getAllPosts();
  return {
    props: { posts }, // This will pass posts to the page component
  };
}

export default Resources;