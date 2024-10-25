import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import Tab from '@/components/sections/Tab';

export default function PageDestination() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Destination" />
        <Tab />
      </Layout>
    </>
  );
}
