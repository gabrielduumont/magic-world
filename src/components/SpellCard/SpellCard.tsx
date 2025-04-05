import { Spell } from '@project/types/Spell';
import { getHouseActiveColorClasses } from '@project/utils/getHouseColor';

type SpellCardProps = {
  spell: Spell;
  focused?: boolean;
};

export const SpellCard = ({ spell, focused }: SpellCardProps) => {
  if (focused) {
    return (
      <div
        className={`
          w-full h-full min-h-[300px] flex flex-col items-center justify-between p-4 transition-all duration-300 
          ease-in-out shadow-md rounded-lg border ${getHouseActiveColorClasses(
            '',
          )} hover:shadow-lg 
        `}
      >
        <h3
          className="text-2xl font-semibold text-center text-gray-800"
          title={spell.name}
        >
          {spell.name}
        </h3>
        <p
          className="text-lg min-h-[150px] text-slate-900 mt-2"
          title={spell.description}
        >
          {spell.description}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`
        w-[240px] h-[120px] flex flex-col items-center justify-between p-4 transition-all duration-300 
        ease-in-out shadow-md rounded-lg border ${getHouseActiveColorClasses(
          '',
        )} hover:shadow-lg 
        hover:scale-105
      `}
    >
      <h3
        className="w-[200px] text-lg font-semibold text-center text-gray-800 truncate"
        title={spell.name}
      >
        {spell.name}
      </h3>
      <p
        className="w-[200px] text-sm text-slate-900 mt-2 line-clamp-2"
        title={spell.description}
      >
        {spell.description}
      </p>
    </div>
  );
};
