import { Character } from '@project/pages/Character';
import { Home } from '@project/pages/Home';
import { Spells } from '@project/pages/Spells';
import { Welcome } from '@project/pages/Welcome';

export const ROUTES = {
  home: {
    path: '/home',
    Component: () => <Home />,
  },
  welcome: {
    path: '/',
    Component: () => <Welcome />,
  },
  character: {
    path: '/character/:id',
    Component: () => <Character />,
  },
  spells: {
    path: '/spells',
    Component: () => <Spells />,
  },
} as const;

export type RoutesKeys = keyof typeof ROUTES;
