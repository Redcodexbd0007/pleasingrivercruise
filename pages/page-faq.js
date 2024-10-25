import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import FaqInner from '@/components/sections/innerpages/FaqInner';

export default function PageFaq() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Faq" />

        <FaqInner />
      </Layout>
    </>
  );
}
