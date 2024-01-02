import { PanelList } from '@/app/todo/PanelList';

export default function Home() {
  return (
    <main className="flex h-screen min-w-main flex-1 overflow-y-hidden overflow-x-scroll py-4">
      <PanelList />
    </main>
  );
}
