import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import NewsGrid from '@/components/sections/innerpages/NewsGrid';

export default function PageNewsGrid() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Gallery" />
        <NewsGrid />
      </Layout>
    </>
  );
}
