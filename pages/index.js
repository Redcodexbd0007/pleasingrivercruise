import Layout from '@/components/layout/Layout';
import About1 from '@/components/sections/About1';
import Clients from '@/components/sections/Clients';
import Crews from '@/components/sections/Crews';
import Faq from '@/components/sections/Faq';
import Package from '@/components/sections/Package';
import Features from '@/components/sections/Features';
import Form from '@/components/sections/Form';
import Funfact from '@/components/sections/Funfact';
import Marquee from '@/components/sections/Marquee';
import News1 from '@/components/sections/News1';
import Services from '@/components/sections/Services';
import Slider from '@/components/sections/Slider';
import Testimonial from '@/components/sections/Testimonial';
import Video from '@/components/sections/Video';
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider />
        <Features />
        <About1 />
        <Marquee />
        <Video />
        <Services />
        <Funfact />
        <Faq />
        <Package />
        <Testimonial />
        <Form />
        <Crews />
        <News1 />
      </Layout>
    </>
  );
}
