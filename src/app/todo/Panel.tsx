'use client';

import { TodoItem } from '@/app/todo/TodoItem';
import { ITodoItem } from '@/app/todo/type';
import { memo } from 'react';
import { FaEllipsis, FaPlus } from 'react-icons/fa6';

interface Props {
  name: string;
  list: ITodoItem[];
}

export const Panel = memo((props: Props) => {
  const { name, list } = props;
  return (
    <div className="flex h-full w-60 shrink-0 flex-col items-center p-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-base font-semibold">{name}</span>
        <div className="flex items-center gap-2">
          <button>
            <FaPlus className="h-4 w-4 hover:text-primary-300" />
          </button>
          <button>
            <FaEllipsis className="h-4 w-4 hover:text-primary-300" />
          </button>
        </div>
      </div>
      <div className="scrollbar-hide mt-4 flex w-full flex-col items-center gap-4 overflow-y-auto pr-2">
        {list.map((data, index) => (
          <TodoItem
            key={`todo-${name}-${data.title}-${index.toString()}`}
            data={data}
          />
        ))}
      </div>
    </div>
  );
});

Panel.displayName = 'Panel';
