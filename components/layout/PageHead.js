import Head from 'next/head';

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : 'Voyacht | Yacht and Boat Rental React Nextjs Template'}
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default PageHead;
