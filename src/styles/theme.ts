import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    colors: {
      yellow: {
        '600': '#FFBA08',
        '200': '#FFBA0880',
      },
      teal: {
        '700': '#47585B',
      },
      gray: {
        '500': '#999999',
        '400': '#99999980',
        '200': '#DADADA',
        '100': '#F5F8FA',
      },
    },
  },
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'teal.700',
      },
    },
  },
});
