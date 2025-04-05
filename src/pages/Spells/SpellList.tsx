import { Button } from '@project/components/Button';
import { Pagination } from '@project/components/Pagination';
import { SpellCard } from '@project/components/SpellCard';
import { usePagination } from '@project/hooks/usePagination';
import { Spell } from '@project/types/Spell';
import { sortArrayByProp } from '@project/utils/sortArrayByProp';
import { useCallback, useState } from 'react';

type SpellListProps = {
  data: Spell[];
};

const BASE_PAGE_SIZE = 20;

export const SpellList = ({ data }: SpellListProps) => {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  const updateSelectedSpell = useCallback((spell: Spell | null) => {
    setSelectedSpell((prev) => {
      if (prev?.id === spell?.id) {
        return null;
      }
      return spell;
    });
  }, []);

  const { paginatedData, currentPage, totalPages, handlePageChange } =
    usePagination(sortArrayByProp(data, 'name'), BASE_PAGE_SIZE);

  if (!data?.length || !paginatedData?.length) {
    return <div className="w-full text-center py-2">No data available</div>;
  }

  return (
    <div className="w-full">
      {selectedSpell ? (
        <div key={selectedSpell.id}>
          <SpellCard spell={selectedSpell} focused />
          <div className="flex justify-center mt-4">
            <Button label="Back" onClick={() => updateSelectedSpell(null)} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-row items-start justify-center flex-wrap gap-4">
            {paginatedData.map((spell) => (
              <div
                key={spell.id}
                className="cursor-pointer"
                onClick={() => updateSelectedSpell(spell)}
              >
                <SpellCard spell={spell} />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};
