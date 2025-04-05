import { Button } from '@project/components/Button';
import { HouseList } from '@project/components/HouseList';
import { TabPicker } from '@project/components/TabPicker';
import { ROUTES } from '@project/routing/routes';
import { useNavigate } from 'react-router';
import { TABS } from './tabs';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-8xl font-extrabold text-center mb-8 text-amber-400 project-text-hightlight">
          Harry Potter Characters
        </h1>
        <div className="flex justify-center my-8">
          <Button
            label="View Spells"
            onClick={() => navigate(ROUTES.spells.path)}
          />
        </div>
      </div>
      <div className="max-w-10xl mx-auto">
        <HouseList />
      </div>

      <div className="max-w-7xl mx-auto">
        <TabPicker tabs={[TABS.CHARACTERS, TABS.STUDENTS, TABS.STAFF]} />
      </div>
    </div>
  );
};
