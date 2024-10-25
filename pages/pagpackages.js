import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import PackageGrid from '@/components/sections/innerpages/PackageGrid';

export default function PagePackageGrid() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName="Packages" />
        <PackageGrid />
      </Layout>
    </>
  );
}
