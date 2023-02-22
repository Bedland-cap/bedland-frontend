import { Theme } from './theme.types';

const initialTheme: Theme = {
  palette: {
    primaryLight: '#909AFF',
    primaryDark: '#4553DD',
    secondaryLight: '#FF7C33',
    secondaryDark: '#EF6517',
    light: '#FCFEFF',
    accent: '#0E172D',
    greyLight: '#F5F6F8',
    greyDark: '#767676',
    success: '#83E57A',
    successDeep: '#3A9832',
    danger: '#FF4438',
    sidebarTabs: '#CACACA',
    badge: '#CF0000',
    default: '#000',
    background: '#0A1122',
    footer: '#3F4476',
  },
  typography: {
    pageTitle: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    sectionTitle: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '2px',
      lineHeight: 1.2,
    },
    sidebarItem: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '1px',
      textTransform: 'capitalize',
    },
    paragraph: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    caption: {
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.6,
      letterSpacing: '0',
    },
  },
};

export default initialTheme;
