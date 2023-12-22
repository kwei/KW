'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react';

interface IObserver<Store> {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
}

export default function createExternalContext<Store>(initState: Store) {
  const useStoreData = (): IObserver<Store> => {
    const store = useRef<Store>(initState);
    const subscribers = useRef(new Set<() => void>());

    const get = useCallback(() => store.current, []);
    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);
    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => {
        subscribers.current.delete(callback);
      };
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  };

  const StoreContext = createContext<IObserver<Store> | null>(null);

  const Provider = ({ children }: { children: ReactNode }) => {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  };

  const useStore = <Selector,>(
    selector: (store: Store) => Selector,
  ): [Selector, (value: Partial<Store>) => void] => {
    const store = useContext(StoreContext);
    if (!store) throw new Error('Store not found');

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initState),
    );

    return [state, store.set];
  };

  return {
    Provider,
    useStore,
  };
}
