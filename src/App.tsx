import GlobalStyle from 'theme/globalStyles';
import { RouterProvider } from 'react-router-dom';
import router from 'utils/constants/routing';

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider
      router={router}
      fallbackElement={<section>Space for spinner</section>}
    />
  </>
);

export default App;
