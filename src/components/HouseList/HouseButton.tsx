import { House } from '@project/types/House';
import { getHouseActiveColorClasses } from '@project/utils/getHouseColor';
import { Button } from '../Button';

type HouseButtonProps = {
  house: House;
  isFavorite?: boolean;
  onClick?: () => void;
};

export const HouseButton = ({
  house,
  isFavorite,
  onClick,
}: HouseButtonProps) => {
  return (
    <Button
      label={house}
      onClick={() => onClick?.()}
      active={isFavorite}
      activeColorClasses={getHouseActiveColorClasses(house)}
    />
  );
};
