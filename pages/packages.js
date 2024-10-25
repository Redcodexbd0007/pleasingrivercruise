import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import PricingTable from '@/components/sections/innerpages/PricingTable';

export default function PagePricingTable() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Packages" />
        <PricingTable />
      </Layout>
    </>
  );
}
