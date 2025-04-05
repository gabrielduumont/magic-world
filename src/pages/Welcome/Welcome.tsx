import { ROUTES } from '@project/routing/routes';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const Welcome = () => {
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

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-amber-400 text-center project-text-hightlight">
          Welcome to the
          <span className="block mt-2 text-5xl md:text-7xl text-amber-300 font-serif italic project-text-hightlight">
            Magic World
          </span>
          <span className="block mt-2 text-6xl md:text-8xl text-amber-200 project-text-hightlight">
            of Harry Potter
          </span>
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div
              className={`w-20 h-1 bg-amber-400 rounded-full transition-all duration-1500 delay-500 ${
                isVisible ? 'w-48' : 'w-0'
              }`}
            />
            <button
              onClick={onEnterWizardingWorld}
              className={`mt-6 px-6 py-3 bg-amber-500 text-slate-900 rounded-md hover:bg-amber-400 transition-all duration-300 transform cursor-pointer ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              Enter the Wizarding World
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
