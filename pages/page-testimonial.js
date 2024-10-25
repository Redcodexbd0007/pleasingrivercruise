import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import TestimonialGrid from '@/components/sections/innerpages/TestimonialGrid';

export default function PageTestimonial() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Testimonial" />
        <TestimonialGrid />
      </Layout>
    </>
  );
}
