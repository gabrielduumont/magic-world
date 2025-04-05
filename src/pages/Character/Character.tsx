import { Button } from '@project/components/Button';
import { CharacterDetails } from '@project/components/CharacterDetails';
import { Loading } from '@project/components/Loading';
import { useDataFetcher } from '@project/hooks/useDataFetcher';
import { ROUTES } from '@project/routing/routes';
import { getCharacterById } from '@project/services/api/characters/get-by-id';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

export const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useDataFetcher(async () => {
    if (!id) return null;

    return getCharacterById(id);
  });

  useEffect(() => {
    if (!id) {
      navigate(ROUTES.home.path);
    }
  }, []);

  if (!id) {
    return null;
  }

  return (
    <div className="min-h-screen h-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-8xl font-extrabold text-center mb-8 text-amber-400 project-text-hightlight">
          Character Details
        </h1>
        <div className="flex justify-center my-8">
          <Button label="Back" onClick={() => navigate(ROUTES.home.path)} />
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        {(loading || !data) && <Loading />}
        {error && (
          <p className="text-sm font-regular text-center my-8 text-red-400">
            {error}
          </p>
        )}
        {data && <CharacterDetails character={data} />}
      </div>
    </div>
  );
};
