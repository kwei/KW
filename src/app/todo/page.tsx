'use client';

import { mockData } from '@/app/todo/constants';
import { Panel } from '@/app/todo/Panel';
import { PanelList } from '@/app/todo/PanelList';

export default function Home() {
  return (
    <main className="min-w-main flex h-screen overflow-x-auto overflow-y-hidden py-4">
      <PanelList>
        <Panel name="Backlog" list={mockData} />
        <Panel name="New Request" list={mockData} />
        <Panel name="In Progress" list={mockData} />
        <Panel name="Testing" list={mockData} />
        <Panel name="Complete" list={mockData} />
      </PanelList>
    </main>
  );
}
