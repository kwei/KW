'use client';

import { TodoStatus } from '@/app/todo/constants';
import { ITodoItem } from '@/app/todo/type';
import { memo } from 'react';
import { FaCircleCheck, FaRegCircle } from 'react-icons/fa6';

export const TodoItem = memo(({ data }: { data: ITodoItem }) => {
  return (
    <div className="group flex w-full flex-col items-center rounded-2xl border border-solid border-primary-500 p-4 pb-1 hover:cursor-pointer">
      <div className="flex w-full items-center gap-4">
        <button>
          {data.status === TodoStatus.idle && (
            <FaRegCircle className="h-4 w-4 hover:text-primary-300" />
          )}
          {data.status === TodoStatus.complete && (
            <FaCircleCheck className="h-4 w-4 hover:text-primary-300" />
          )}
        </button>
        <span className="text-base font-normal transition-all group-hover:text-primary-500">
          {data.title}
        </span>
      </div>
      <span className="mt-4 w-full text-sm text-gray-500">{data.endDate}</span>
    </div>
  );
});

TodoItem.displayName = 'TodoItem';
