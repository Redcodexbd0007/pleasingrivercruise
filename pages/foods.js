import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import YachtSell from '@/components/sections/innerpages/YachtSell';

export default function PageYachtSell() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Foods" />
        <YachtSell />
      </Layout>
    </>
  );
}
