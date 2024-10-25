import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import YachtDetails from '@/components/sections/innerpages/YachtDetails';

export default function PageYachtDetails() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Yacht Details" />
        <YachtDetails />
      </Layout>
    </>
  );
}
