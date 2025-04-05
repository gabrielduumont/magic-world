type ButtonProps = {
  active?: boolean;
  onClick: () => void;
  label: string;
  activeColorClasses?: string;
};

const DEFAULT_ACTIVE_COLOR_CLASSES =
  'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-slate-900';

export const Button = ({
  active,
  label,
  onClick,
  activeColorClasses,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-regular transition-colors cursor-pointer ${
        active
          ? `${
              !activeColorClasses
                ? DEFAULT_ACTIVE_COLOR_CLASSES
                : activeColorClasses
            } shadow-lg`
          : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
      }`}
    >
      {label}
    </button>
  );
};
