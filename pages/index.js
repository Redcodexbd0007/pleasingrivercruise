import Layout from '@/components/layout/Layout';
import About2 from '@/components/sections/About2';
import Faq from '@/components/sections/Faq';
import Features2 from '@/components/sections/Features2';
import Form from '@/components/sections/Form';
import Funfact from '@/components/sections/Funfact';
import Package2 from '@/components/sections/Package2';
import Slider from '@/components/sections/Slider';
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider />
        <Features2 />
        <About2 />
        <Package2 />

        {/* <Features /> */}
        {/* <About1 /> */}
        {/* <Marquee /> */}
        {/* <Video /> */}
        {/* <Services /> */}
        <Funfact />
        <Faq />
        {/* <Package /> */}
        {/* <Testimonial /> */}
        <Form />
        {/* <Crews /> */}
        {/* <News1 /> */}
      </Layout>
    </>
  );
}
