import { getAllInsights } from '@/app/lib/hygraph/insights';
import { getPageBySlug } from '@/app/lib/hygraph/pages';
import HeroSection from '@/app/components/portfolio/HeroSection';
import PortfolioListSection from '@/app/components/portfolio/PortfolioListSection';
import SEOHead from '@/app/components/seo/SEOHead';
import { getAllPortfolios } from '@/app/lib/hygraph/portfolios';

function Portfolio ({ page, portfolioList }) {

  return (
    <>
      <SEOHead page={page} />
      <HeroSection />
      <PortfolioListSection portfolioList={portfolioList} />
    </>
  );
}

export async function getServerSideProps(context) {
    
  const slug = 'portfolio';

  const [page, portfolioList] = await Promise.all([
      getPageBySlug(slug),
      getAllPortfolios()
  ]);

  return {
      props: { 
          page: page,
          portfolioList: portfolioList || null,
          navStyle: "dark",
          footerCta: true
      },
  };
}

export default Portfolio;