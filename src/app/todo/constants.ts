import { ITodoItem } from '@/app/todo/type';

export enum TodoStatus {
  idle = 'idle',
  complete = 'complete',
}

export const mockData: ITodoItem[] = new Array(7)
  .fill({
    status: TodoStatus.idle,
    title: 'Todo 1',
    category: 'category 1',
    endDate: '2023/1/1',
    description: 'some description here',
  })
  .map((data, index) => ({
    ...data,
    title: `todo ${index + 1}`,
    category: `category ${index + 1}`,
  }));
