'use client';

import { TodoItem } from '@/app/todo/TodoItem';
import { ITodoItem } from '@/app/todo/type';
import { PopupMenu, PopupMenuOption } from '@/components/PopupMenu';
import useCreateFocusRef from '@/hooks/useCreateFocusRef';
import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useState,
  KeyboardEvent,
  useEffect,
} from 'react';
import { FaEllipsis, FaPen, FaPlus, FaTrash } from 'react-icons/fa6';

interface Props {
  name: string;
  list: ITodoItem[];
  handler: Dispatch<SetStateAction<Record<string, number[]>>>;
}

export const Panel = memo((props: Props) => {
  const { name, list, handler } = props;
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isEditName, setIsEditName] = useState<boolean>(false);
  const [sectionName, setSectionName] = useState<string>(name);
  const [onDrag, setOnDrag] = useState<boolean>(false);
  const ref = useCreateFocusRef<HTMLButtonElement>(() => {
    setOpenMenu(false);
  });
  const sectionNameRef = useCreateFocusRef<HTMLInputElement>(() => {
    setIsEditName(false);
  });

  const handleDeletePanel = useCallback(() => {
    handler((prevState) => {
      return Object.fromEntries(
        Object.entries(prevState).filter(([key]) => key !== name),
      );
    });
  }, [handler, name]);

  const handleChangeSectionName = useCallback(() => {
    setIsEditName(true);
  }, []);

  const handleTriggerMenu = useCallback(() => {
    setOpenMenu((prevState) => !prevState);
  }, []);

  const handleOnEditName = useCallback(
    (event: KeyboardEvent) => {
      if (sectionNameRef.current && event.key === 'Enter') {
        setSectionName(sectionNameRef.current.value);
        setIsEditName(false);
      }
    },
    [sectionNameRef],
  );

  const handleOnDragOver = useCallback(() => {
    setOnDrag(true);
  }, []);

  const handleOnDragLeave = useCallback(() => {
    setOnDrag(false);
  }, []);

  const handleOnDrop = useCallback(() => {
    // move the dragged element to the dropped panel
  }, []);

  useEffect(() => {
    handler((prevState) => {
      const originalValue = prevState[name];
      const newState = Object.fromEntries(
        Object.entries(prevState).filter(([key]) => key !== name),
      );
      return {
        ...newState,
        [sectionName]: originalValue,
      };
    });
  }, [handler, name, sectionName]);

  return (
    <div
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      className="flex h-full w-60 shrink-0 flex-col items-center p-4"
    >
      <div className="flex w-full items-center justify-between">
        {isEditName ? (
          <input
            className="w-36 border-0 bg-primary-100 px-1 text-primary-900 outline-0 placeholder:text-primary-700 placeholder:opacity-50"
            ref={sectionNameRef}
            onKeyDown={handleOnEditName}
            placeholder="New Section"
          />
        ) : (
          <span className="text-base font-semibold">{name}</span>
        )}
        <div className="flex items-center gap-2">
          <button className="group flex items-center justify-center rounded-full p-1 transition-all hover:bg-primary-600">
            <FaPlus className="h-4 w-4" />
          </button>
          <button
            ref={ref}
            onClick={handleTriggerMenu}
            className="group relative flex items-center justify-center rounded-full p-1 transition-all hover:bg-primary-600"
          >
            <FaEllipsis className="h-4 w-4" />
            {openMenu && (
              <PopupMenu>
                <PopupMenuOption onClick={handleChangeSectionName}>
                  <FaPen />
                  Change Name
                </PopupMenuOption>
                <PopupMenuOption onClick={handleDeletePanel}>
                  <FaTrash />
                  Delete
                </PopupMenuOption>
              </PopupMenu>
            )}
          </button>
        </div>
      </div>
      <div
        className={`scrollbar-hide mt-4 flex h-full w-full flex-col items-center gap-4 overflow-y-auto rounded-3xl border border-dashed p-2 transition-all ${
          onDrag ? 'border-primary-600 bg-primary-800' : ' border-transparent'
        }`}
      >
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
