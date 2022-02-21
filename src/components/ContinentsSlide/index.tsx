// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function ContinentsSlide(): JSX.Element {
  return (
    <Flex
      mb={['5', '10']}
      maxW="1240px"
      w="100%"
      px="2rem"
      h={['250px', '450px']}
      mx="auto"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1', height: '100%' }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/europa.png)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
            color="white"
          >
            <Link passHref href="/continent/europe">
              <a>
                <Heading fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/africa.jpg)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
            color="white"
          >
            <Link passHref href="/continent/europe">
              <a>
                <Heading fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/america.jpg)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
            color="white"
          >
            <Link passHref href="/continent/europe">
              <a>
                <Heading fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
