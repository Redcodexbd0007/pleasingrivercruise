import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import YachtSell from '@/components/sections/innerpages/YachtSell';

export default function PageYachtSell() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Yacht Sell" />
        <YachtSell />
      </Layout>
    </>
  );
}
