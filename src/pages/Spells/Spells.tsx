import { Button } from '@project/components/Button';
import { Loading } from '@project/components/Loading';
import { useDataFetcher } from '@project/hooks/useDataFetcher';
import { ROUTES } from '@project/routing/routes';
import { getAllSpells } from '@project/services/api/spells/get-all';
import { useNavigate } from 'react-router';
import { SpellList } from './SpellList';

export const Spells = () => {
  const { data, loading, error } = useDataFetcher(getAllSpells);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen h-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-8xl font-extrabold text-center mb-12 text-amber-400 project-text-hightlight">
          Spells
        </h1>
        <div className="flex justify-center my-8">
          <Button
            label="View Characters"
            onClick={() => navigate(ROUTES.home.path)}
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        {(loading || !data) && <Loading />}
        {error && (
          <p className="text-sm font-regular text-center my-8 text-red-400">
            {error}
          </p>
        )}
      </div>
      {data && (
        <div className="max-w-7xl mx-auto">
          <SpellList data={data} />
        </div>
      )}
    </div>
  );
};
