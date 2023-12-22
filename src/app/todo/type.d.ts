import { TodoStatus } from '@/app/todo/constants';

interface ITodoItem {
  status: TodoStatus;
  title: string;
  category: string;
  endDate: string;
  description: string;
}