import { TodoStatus } from '@/app/todo/constants';

interface ITodoItem {
  status: TodoStatus;
  id: number;
  title: string;
  category: string;
  endDate: string;
  description: string;
}