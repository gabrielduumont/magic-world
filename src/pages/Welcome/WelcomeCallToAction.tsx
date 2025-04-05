type WelcomeCallToActionProps = {
  onEnterWizardingWorld: () => void;
  isVisible: boolean;
};

export const WelcomeCallToAction = ({
  onEnterWizardingWorld,
  isVisible,
}: WelcomeCallToActionProps) => {
  return (
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
  );
};
