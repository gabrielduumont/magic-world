import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routing/AppRoutes';
import { FavoriteHouseContextProvider } from './contexts/FavoriteHouseContext/Provider';

function App() {
  return (
    <FavoriteHouseContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FavoriteHouseContextProvider>
  );
}

export default App;
