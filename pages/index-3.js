import Layout from '@/components/layout/Layout';
import Banner2 from '@/components/sections/Banner2';
import About3 from '@/components/sections/About3';
import Funfact2 from '@/components/sections/Funfact2';
import Package3 from '@/components/sections/Package3';
import Video3 from '@/components/sections/Video3';
import Marquee from '@/components/sections/Marquee';
import Features3 from '@/components/sections/Features3';
import Faq2 from '@/components/sections/Faq2';
import FeaturedSell from '@/components/sections/FeaturedSell';
import Testimonial3 from '@/components/sections/Testimonial3';
import Clients2 from '@/components/sections/Clients2';
import Contact from '@/components/sections/Contact';
import News3 from '@/components/sections/News3';

export default function Home3() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <Banner2 />
        <About3 />
        <Funfact2 />
        <Package3 />
        <Video3 />
        <Marquee />
        <Features3 />
        <Faq2 />

        <FeaturedSell />
        <Testimonial3 />
        <Clients2 />
        <Contact />
        <News3 />
      </Layout>
    </>
  );
}
