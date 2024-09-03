import SEOHead from '@/app/components/SEOHead';
import HeroSection from '@/app/components/about/team/HeroSection';
import JobOpeningsSection from '@/app/components/about/team/JobOpeningsSection';
import TeamGridSection from '@/app/components/about/team/TeamGridSection';
import { getAllEmployees } from '@/app/lib/hygraph/employees';
import { getPageBySlug } from '@/app/lib/hygraph/pages';

function TeamPage({ page, employees }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        {employees?.length > 0 &&
          <TeamGridSection employees={employees}/>
        }
        <JobOpeningsSection />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.substring(1);

  const [page, employees] = await Promise.all([
      getPageBySlug(slug),
      getAllEmployees()
  ]);

  return {
      props: { 
          page: page || null,
          navStyle: "light", 
          employees: employees || [],
      },
  };

  
}

export default TeamPage;