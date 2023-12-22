'use client';

import { createContext, ReactNode, useContext, useMemo } from 'react';
import createExternalContext from './createExternalContext';

interface IStore {
  show: boolean;
  title: string;
  children: ReactNode;
  footer: {
    cancel?: {
      label: string;
      action: () => void;
    };
    confirm?: {
      label: string;
      action: () => void;
    };
  };
  onClose: () => void;
}

const { Provider, useStore } = createExternalContext<IStore>({
  show: false,
  title: '',
  children: null,
  footer: {
    cancel: {
      label: '',
      action: () => {},
    },
    confirm: {
      label: '',
      action: () => {},
    },
  },
  onClose: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const contextValue = useMemo(() => ({ useStore }), []);
  return (
    <Provider>
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    </Provider>
  );
};

const MyContext = createContext({ useStore });

export const useModal = () => {
  return useContext(MyContext);
};
