import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import TeamDetails from '@/components/sections/innerpages/TeamDetails';

export default function PageTeamDetails() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Crew Details" />
        <TeamDetails />
      </Layout>
    </>
  );
}
