'use client';

import { useModal } from '@/context/ModalContext';
import useCreateFocusRef from '@/hooks/useCreateFocusRef';
import { memo } from 'react';
import { FaX } from 'react-icons/fa6';

export const Modal = memo(() => {
  const { useStore } = useModal();
  const [state] = useStore((modal) => modal);

  const ref = useCreateFocusRef<HTMLDivElement>(() => {
    state.onClose();
  });

  if (!state.show) return null;

  return (
    <div className="modal-bg fixed z-20 flex h-screen w-screen items-center justify-center overflow-hidden">
      <div
        ref={ref}
        className="flex w-[320px] flex-col items-center rounded-3xl bg-primary-100 text-primary-900"
      >
        <div className="flex w-full items-start justify-between px-6 pt-4">
          <span className="text-2xl font-bold text-primary-900">
            {state.title}
          </span>
          <button onClick={state.onClose}>
            <FaX className="h-4 w-4 text-gray-500 transition-all hover:text-gray-800" />
          </button>
        </div>
        <div className="px-6 py-4">{state.children}</div>
        <div className="mt-4 flex w-full items-center justify-between border-t border-solid border-primary-700 px-6 py-4">
          {state.footer.cancel && (
            <button
              onClick={state.footer.cancel.action}
              className="px-3 py-1 text-base font-semibold transition-all hover:text-red-700"
            >
              {state.footer.cancel.label}
            </button>
          )}
          {state.footer.confirm && (
            <button
              onClick={state.footer.confirm.action}
              className="rounded-lg bg-primary-400 px-3 py-1 text-base font-semibold text-primary-900 transition-all hover:bg-primary-300"
            >
              {state.footer.confirm.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';
