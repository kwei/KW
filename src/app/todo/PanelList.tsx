'use client';

import { mockCategories, mockData } from '@/app/todo/constants';
import { Panel } from '@/app/todo/Panel';
import { memo, useCallback, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

export const PanelList = memo(() => {
  const [categories, setCategories] =
    useState<Record<string, number[]>>(mockCategories);

  const handleAddSection = useCallback(() => {
    const duplicateNames = Object.keys(categories)
      .filter((name) => name.includes('New Section'))
      .map((name) => Number(name.split(' ').pop()));
    const newSectionNum = duplicateNames.length
      ? Math.max(...duplicateNames)
      : 0;
    const newSectionName = `New Section ${newSectionNum + 1}`;
    setCategories((prevState) => ({
      ...prevState,
      [newSectionName]: [],
    }));
  }, [categories]);

  return (
    <div className="flex h-full shrink-0 flex-row items-start gap-4 px-8">
      {Object.keys(categories).map((category, index) => (
        <Panel
          key={`${category}-${index.toString()}`}
          name={category}
          list={mockData.filter((data) =>
            categories[category].includes(data.id),
          )}
          handler={setCategories}
        />
      ))}
      <button
        onClick={handleAddSection}
        className="my-2 ml-6 flex select-none items-center gap-2 rounded-lg border border-dashed border-primary-600 py-2 pl-4 pr-5 text-base font-semibold transition-all hover:border-solid hover:bg-primary-600"
      >
        <FaPlus className="h-4 w-4 hover:text-primary-300" />
        New Section
      </button>
    </div>
  );
});

PanelList.displayName = 'PanelList';
