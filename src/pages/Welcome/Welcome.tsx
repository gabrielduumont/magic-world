import { useWelcomeScreen } from './useWelcomeScreen';
import { WelcomeCallToAction } from './WelcomeCallToAction';
import { WelcomeTitle } from './WelcomeTitle';

export const Welcome = () => {
  const { isVisible, onEnterWizardingWorld } = useWelcomeScreen();

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <WelcomeTitle />
        <WelcomeCallToAction
          isVisible={isVisible}
          onEnterWizardingWorld={onEnterWizardingWorld}
        />
      </div>
    </div>
  );
};
