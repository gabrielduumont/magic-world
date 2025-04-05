import { NotFound } from '@project/pages/NotFound';
import { Route, Routes } from 'react-router';
import { ROUTES, RoutesKeys } from './routes';

export const AppRoutes = () => {
  const routesKeys = Object.keys(ROUTES);
  return (
    <Routes>
      {routesKeys.map((routeKey, index) => {
        const route = ROUTES[routeKey as RoutesKeys];
        const { path, Component } = route;
        return (
          <Route key={`route-${index}`} path={path} element={<Component />} />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
