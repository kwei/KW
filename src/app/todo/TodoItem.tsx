'use client';

import { TodoStatus } from '@/app/todo/constants';
import { ITodoItem } from '@/app/todo/type';
import { memo, useCallback, useRef, useState } from 'react';
import { FaCircleCheck, FaRegCircle } from 'react-icons/fa6';
import { GoGrabber } from 'react-icons/go';

export const TodoItem = memo(({ data }: { data: ITodoItem }) => {
  const [onDrag, setOnDrag] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOnDragEnd = useCallback(() => {
    console.log('handleOnDragEnd');
    setOnDrag(false);
  }, []);

  const handleOnDragStart = useCallback(() => {
    console.log('handleOnDragStart');
  }, []);

  const handleOnMouseDown = useCallback(() => {
    console.log('handleOnMouseDown');
    setOnDrag(true);
  }, []);

  return (
    <div
      ref={ref}
      draggable={onDrag}
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
      className="group relative flex w-full select-none flex-col items-center rounded-2xl border border-solid border-primary-500 bg-primary-900 p-4 pb-1 hover:cursor-pointer"
    >
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
      <div className="group/move absolute bottom-0 right-0 top-0 flex items-center justify-center pr-2">
        <button onMouseDown={handleOnMouseDown}>
          <GoGrabber className="invisible h-10 w-8 cursor-grab rounded-lg px-2 py-3 text-primary-200 transition-all hover:bg-primary-700 active:cursor-grabbing group-hover/move:visible" />
        </button>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-2xl bg-primary-800 opacity-80 ${
          onDrag ? '' : 'hidden'
        }`}
      ></div>
    </div>
  );
});

TodoItem.displayName = 'TodoItem';
