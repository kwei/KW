import { PanelList } from '@/app/todo/PanelList';

export default function Home() {
  return (
    <main className="min-w-main flex h-screen overflow-x-scroll overflow-y-hidden py-4">
      <PanelList />
    </main>
  );
}
