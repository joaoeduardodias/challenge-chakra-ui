import { Divider, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { Header } from '../components/Header';

const TravelTypeNoSSR = dynamic(() => import('../components/TravelTypes'), {
  ssr: false,
});

const Home: NextPage = function () {
  return (
    <>
      <Head>
        <title>Home | WordTrip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypeNoSSR />
      <Divider
        w={['60px', '90px']}
        mt="5rem"
        mx="auto"
        borderColor="teal.700"
        border="2px"
      />
      <Flex
        w="100%"
        maxW="1160px"
        mx="auto"
        px="1rem"
        align="center"
        justify="center"
        my="3.25rem"
      >
        <Text
          color="teal.700"
          fontWeight="500"
          fontSize={['1.25rem', '1.25rem', '1.50rem', '2.25rem']}
          align="center"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Text>
      </Flex>
      <ContinentsSlide />
    </>
  );
};

export default Home;
