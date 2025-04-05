import { getInfoOrDefault } from './helpers';

type CharacterInfoDetailsItemProps = {
  label: string;
  value?: string | number | null;
  defaultMessageIfNoInfo?: string;
};

export const CharacterInfoDetailsItem = ({
  label,
  value,
  defaultMessageIfNoInfo,
}: CharacterInfoDetailsItemProps) => (
  <p className="lowercase text-sm truncate" title={`${label}: ${value}`}>
    <span className="font-medium">{label}:</span>{' '}
    <span className="font-regular">
      {getInfoOrDefault(value, defaultMessageIfNoInfo)}
    </span>
  </p>
);
