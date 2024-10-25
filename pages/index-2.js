import Layout from '@/components/layout/Layout';
import About2 from '@/components/sections/About2';
import Banner from '@/components/sections/Banner';
import Features2 from '@/components/sections/Features2';
import News2 from '@/components/sections/News2';
import Package2 from '@/components/sections/Package2';
import Pricing from '@/components/sections/Pricing';
import Progress from '@/components/sections/Progress';
import Tab from '@/components/sections/Tab';
import Testimonial2 from '@/components/sections/Testimonial2';
import VideoForm from '@/components/sections/VideoForm';
export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner />
        <Features2 />
        <About2 />
        <Package2 />
        <Tab />
        <Pricing />
        <Progress />
        <Testimonial2 />
        <VideoForm />
        <News2 />
      </Layout>
    </>
  );
}
