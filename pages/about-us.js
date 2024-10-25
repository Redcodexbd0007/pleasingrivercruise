import Layout from '@/components/layout/Layout';
import About3 from '@/components/sections/About3';
import Clients2 from '@/components/sections/Clients2';
import Crews from '@/components/sections/Crews';
import Funfact2 from '@/components/sections/Funfact2';
import PageTitle from '@/components/sections/PageTitle';

export default function PageContact() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="About Us" />
        <About3 />
        <Funfact2 />
        <Crews />
        <Clients2 />
      </Layout>
    </>
  );
}
