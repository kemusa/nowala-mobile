import { extendTheme } from 'native-base';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';

const fonts = () => {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });
  return fontsLoaded;
};

const theme = extendTheme({
  fontConfig: {
    Lato: {
      100: {
        normal: 'Lato_100Thin',
        italic: 'Lato_100Thin_Italic',
      },
      200: {
        normal: 'Lato_300Light',
        italic: 'Lato_300Light_Italic',
      },
      300: {
        normal: 'Lato_300Light',
        italic: 'Lato_300Light_Italic',
      },
      400: {
        normal: 'Lato_400Regular',
        italic: 'Lato_400Regular_Italic',
      },
      // 500: {},
      // 600: {
      //   normal: 'Lato_Medium',
      //   italic: 'Lato_MediumItalic',
      // },
      700: {
        normal: 'Lato_700Bold',
        italic: 'Lato_700Bold_Italic',
      },
      // 800: {
      //   normal: 'Lato_Bold',
      //   italic: 'Lato_BoldItalic',
      // },
      900: {
        normal: 'Lato_900Black',
        italic: 'Lato_900Black_Italic',
      },
    },
  },
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Lato_700Bold',
    body: 'Lato_400Regular',
    mono: 'Lato_400Regular',
  },
  colors: {
    primary: {
      50: '#e8f3fe',
      100: '#ced7e6',
      200: '#afbdcf',
      300: '#91a2ba',
      400: '#7388a6',
      500: '#596e8c',
      600: '#45566e',
      700: '#303d50',
      800: '#1a2532',
      900: '#050c18',
    },
    secondary: {
      50: '#fff9da',
      100: '#ffecad',
      200: '#ffdf7d',
      300: '#ffd24b',
      400: '#ffc51a',
      500: '#e6ac00',
      600: '#b38600',
      700: '#805f00',
      800: '#4e3900',
      900: '#1d1300',
    },
    tertiary: {
      50: '#e4f6fd',
      100: '#c9dfe7',
      200: '#abc8d2',
      300: '#8db2bf',
      400: '#6e9cac',
      500: '#548392',
      600: '#406672',
      700: '#2c4953',
      800: '#152d33',
      900: '#001215',
    },
  },
});

export { fonts, theme };
