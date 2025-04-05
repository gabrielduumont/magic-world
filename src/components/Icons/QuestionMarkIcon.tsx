type QuestionMarkIconProps = {
  size?: number;
  color?: string;
};

export const QuestionMarkIcon = ({
  size = 24,
  color = 'black',
}: QuestionMarkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" fill="gray" />
      <path
        d="M12 18h.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.09 9a3 3 0 1 1 5.82 1c0 1.5-2.25 2.25-2.25 2.25s-1.5.75-1.5 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
