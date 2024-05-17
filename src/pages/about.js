import { getAllPosts } from '../app/lib/hygraph';
import Head from 'next/head';

export const metadata = {
  title: 'About Us Page',
  description: 'This is the about page description'
}

function AboutPage({ posts }) {

  return (
    <>
    <Head>
          <title>About Us - My Website</title>
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
              <h1>About Page</h1>
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

export default AboutPage;