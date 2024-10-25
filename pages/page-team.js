import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import TeamGrid from '@/components/sections/innerpages/TeamGrid';

export default function PageTeam() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="The Crew" />
        <TeamGrid />
      </Layout>
    </>
  );
}
