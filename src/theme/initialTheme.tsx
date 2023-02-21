import { Theme } from '../utils/types/theme.types';

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
    notificationCircle: '#CF0000',
    footer: '#3F4476',
    backgroundLogin: '#0A1122',
  },
  typography: {
    paragraph: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.6',
      letterSpacing: '0',
    },
    caption: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '400',
      fontSize: '0.75rem',
      lineHeight: '1.6',
      letterSpacing: '0',
    },
  },
};

export default initialTheme;
