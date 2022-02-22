import { propNames } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

const Continent: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Head>
        <title>{name} | WordTrip</title>
      </Head>

      <Header />
      <ContinentBanner />
    </>
  );
};

export default Continent;
