import { ITodoItem } from '@/app/todo/type';

export enum TodoStatus {
  idle = 'idle',
  complete = 'complete',
}

export const mockData: ITodoItem[] = [
  ...new Array(3)
    .fill({
      status: TodoStatus.idle,
      id: 0,
      title: '',
      category: 'Backlog',
      endDate: '2023/1/1',
      description: 'some description here',
    })
    .map((data, index) => ({
      ...data,
      id: index,
      status: index % 2 === 0 ? TodoStatus.idle : TodoStatus.complete,
      title: `Todo ${index + 1}`,
    })),
  ...new Array(3)
    .fill({
      status: TodoStatus.idle,
      id: 0,
      title: '',
      category: 'category 1',
      endDate: '2023/1/1',
      description: 'some description here',
    })
    .map((data, index) => ({
      ...data,
      id: index + 3,
      status: index % 2 !== 0 ? TodoStatus.idle : TodoStatus.complete,
      title: `Todo ${index + 4}`,
    })),
];

export const mockCategories: Record<string, number[]> = {
  Backlog: [0, 1, 2],
  'In Progress': [3, 4, 5],
};
