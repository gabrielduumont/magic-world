import { CharacterCard } from '@project/components/CharacterCard';
import { Pagination } from '@project/components/Pagination';
import { useFavoriteHouseContext } from '@project/contexts/FavoriteHouseContext/useContext';
import { useFavoriteCharacters } from '@project/hooks/useFavoriteCharacters';
import { usePagination } from '@project/hooks/usePagination';
import { ROUTES } from '@project/routing/routes';
import { Character } from '@project/types/Character';
import { sortArrayByProp } from '@project/utils/sortArrayByProp';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

type BaseCharacterListProps = {
  data: Character[];
};

const BASE_PAGE_SIZE = 20;

export const BaseCharacterList = ({ data }: BaseCharacterListProps) => {
  const navigate = useNavigate();
  const [{ favoriteHouse }] = useFavoriteHouseContext();
  const { favoriteCharacters, saveFavoriteCharacter, removeFavoriteCharacter } =
    useFavoriteCharacters();

  const { paginatedData, currentPage, totalPages, handlePageChange } =
    usePagination(
      favoriteHouse !== ''
        ? sortArrayByProp(data, 'name').filter((item) => {
            if (!item.house) return false;

            return item.house.toLowerCase() === favoriteHouse.toLowerCase();
          })
        : sortArrayByProp(data, 'name'),
      BASE_PAGE_SIZE,
    );

  const toggleFavorite = useCallback(
    (characterId: Character['id']) => {
      const isFavorite = favoriteCharacters.includes(characterId);
      if (isFavorite) {
        removeFavoriteCharacter(characterId);
      } else {
        saveFavoriteCharacter(characterId);
      }
    },
    [favoriteCharacters, removeFavoriteCharacter, saveFavoriteCharacter],
  );

  const handleCardClick = useCallback((characterId: Character['id']) => {
    navigate(`${ROUTES.character.path.replace(':id', characterId)}`);
  }, []);

  if (!data?.length || !paginatedData?.length) {
    return <div className="w-full text-center py-2">No data available</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-row items-start justify-center flex-wrap gap-4">
        {paginatedData.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
            onCardClick={handleCardClick}
            isFavorite={favoriteCharacters.includes(character.id)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
