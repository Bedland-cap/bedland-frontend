import { Theme } from './theme.types';

const initialTheme: Theme = {
  palette: {
    sidebarTabsPressed: '#919AFF',
    blueDark: '#4553DD',
    blueLight: '#6573FF',
    orangeLight: '#FF7C33',
    orangeDark: '#F56513',
    light: '#FCFEFF',
    greyLight: '#F5F6F8',
    greyDark: '#767676',
    greenLight: '#83E57A',
    greenDark: '#30BA57',
    redLight: '#FF4438',
    sidebarTabs: '#CACACA',
    redDark: '#CF0000',
    sidebar: '#0A1122',
    footer: '#3F4476',
    white: '#fff',
    inputGrey: '#4B4B4B',
    widgetsShadows: '#D9D9D9',
    text: '#1B1A1A',
    yellow: '#FFD541',
  },
  typography: {
    header1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '2px',
      lineHeight: 1.2,
    },

    header2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },

    subtitles: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      letterSpacing: '1px',
    },

    header3: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      letterSpacing: '1px',
    },

    header4: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '1px',
    },

    header5: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '0',
    },

    subHeader: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.4,
      letterSpacing: '0',
    },

    paragraph: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0',
    },

    dataInputsAndTooltips: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '1px',
    },

    unerlined: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      textDecoration: 'underline',
    },

    captions: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: 1.6,
      letterSpacing: '1px',
    },
  },
};

export default initialTheme;
