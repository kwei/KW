'use client';

import useCreateFocusRef from '@/hooks/useCreateFocusRef';
import Link from 'next/link';
import { AnchorHTMLAttributes, useCallback, useEffect, useState } from 'react';
import {
  FaAnglesLeft,
  FaHouse,
  FaRegCommentDots,
  FaListCheck,
  FaRegNewspaper,
} from 'react-icons/fa6';

enum Routes {
  Home = '/',
  News = '/news',
  Todo = '/todo',
  Contact = '/contact',
}

const ROUTES: Record<string, Routes> = {
  '': Routes.Home,
  news: Routes.News,
  todo: Routes.Todo,
  contact: Routes.Contact,
};

export const SlideMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [route, setRoute] = useState<Routes>(Routes.Home);
  const ref = useCreateFocusRef<HTMLDivElement>(() => {
    setOpen(false);
  });

  const trigger = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const onSelectNav = useCallback((_route: Routes) => {
    setRoute(_route);
  }, []);

  useEffect(() => {
    const currentRoute = window.location.pathname.split('/').pop() ?? '';
    setRoute(ROUTES[currentRoute]);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex ${
        open ? 'w-nav' : 'w-16'
      } h-screen shrink-0 flex-col bg-primary-800 transition-all`}
    >
      <nav className="flex h-full w-full flex-col gap-4 overflow-y-auto overflow-x-hidden px-2 py-4">
        <NavElement
          current={route === Routes.Home}
          isOpen={open}
          label="Home"
          route={Routes.Home}
          onClick={onSelectNav}
        >
          <FaHouse className="w-4" />
        </NavElement>
        <NavElement
          current={route === Routes.News}
          isOpen={open}
          label="News"
          route={Routes.News}
          onClick={onSelectNav}
        >
          <FaRegNewspaper className="w-4" />
        </NavElement>
        <NavElement
          current={route === Routes.Todo}
          isOpen={open}
          label="Todo"
          route={Routes.Todo}
          onClick={onSelectNav}
        >
          <FaListCheck className="w-4" />
        </NavElement>
        <NavElement
          current={route === Routes.Contact}
          isOpen={open}
          label="Contact"
          route={Routes.Contact}
          onClick={onSelectNav}
        >
          <FaRegCommentDots className="w-4" />
        </NavElement>
      </nav>
      <CollapseController isOpen={open} onClick={trigger} />
    </div>
  );
};

interface NavElementProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  route: Routes;
  label: string;
  isOpen: boolean;
  current: boolean;
  onClick: (_route: Routes) => void;
}

const NavElement = ({
  route,
  label,
  isOpen,
  current,
  children,
  onClick,
  ...props
}: NavElementProps) => {
  const handleOnClick = useCallback(() => {
    onClick(route);
  }, [onClick, route]);

  return (
    <Link
      {...props}
      onClick={handleOnClick}
      href={route}
      className={`group flex w-full items-center gap-4 rounded-lg px-4 py-1 text-lg font-semibold transition-all ${
        current ? 'bg-primary-700' : 'hover:bg-primary-700'
      }`}
    >
      <div className="flex h-8 items-center">{children}</div>
      {isOpen && <div className="h-8 leading-8">{label}</div>}
    </Link>
  );
};

const CollapseController = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-end p-2">
      <button
        className="flex w-full items-center gap-4 rounded-lg px-4 py-1 text-base transition-all hover:bg-primary-700"
        onClick={onClick}
      >
        <div className="flex h-8 items-center">
          <FaAnglesLeft className={`w-4 ${isOpen ? '' : 'rotate-180'}`} />
        </div>
        {isOpen && <div className="h-8 leading-8">Collapse</div>}
      </button>
    </div>
  );
};
