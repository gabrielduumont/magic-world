import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Button } from '@project/components/Button';

type TabOption = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type TabPickerProps = {
  tabs: TabOption[];
};

export const TabPicker = ({ tabs }: TabPickerProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || tabs[0].value;

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  useEffect(() => {
    if (!tabs.some((tab) => tab.value === currentTab)) {
      setSearchParams({ tab: tabs[0].value });
    }
  }, [currentTab, tabs, setSearchParams]);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <div className="flex justify-center flex-wrap items-center gap-4 mb-4">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            label={tab.label}
            active={currentTab === tab.value}
          />
        ))}
      </div>
      <div>{tabs.find((tab) => tab.value === currentTab)?.content ?? null}</div>
    </div>
  );
};
