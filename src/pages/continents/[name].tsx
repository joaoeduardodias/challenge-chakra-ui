import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Cities } from '../../components/Cities';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
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
      <ContinentInfo />
      <Cities />
    </>
  );
};

export default Continent;
