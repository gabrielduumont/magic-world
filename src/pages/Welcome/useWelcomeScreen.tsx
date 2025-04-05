import { ROUTES } from '@project/routing/routes';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const useWelcomeScreen = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const goToHomePage = useCallback(() => {
    navigate(ROUTES.home.path);
  }, [navigate]);

  const onEnterWizardingWorld = useCallback(() => {
    goToHomePage();
  }, [goToHomePage]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return {
    isVisible,
    onEnterWizardingWorld,
  } as const;
};
