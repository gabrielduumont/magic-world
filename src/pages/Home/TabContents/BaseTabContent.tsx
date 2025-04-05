import { Loading } from '@project/components/Loading';
import { useDataFetcher } from '@project/hooks/useDataFetcher';
import { Character } from '@project/types/Character';
import { BaseCharacterList } from './BaseCharacterList';

type BaseTabContentProps = {
  dataFetcher: () => Promise<Character[]>;
};

export const BaseTabContent = ({ dataFetcher }: BaseTabContentProps) => {
  const { data, loading, error } = useDataFetcher(dataFetcher);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading && <Loading />}
      {error && (
        <p className="text-sm font-regular text-center my-8 text-red-400">
          {error}
        </p>
      )}
      {data && <BaseCharacterList data={data} />}
    </div>
  );
};
