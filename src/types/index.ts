export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  icon: string;
  type: TransactionType;
}

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  categoryName?: string; // Optional for denormalized view
  date: string; // ISO string
  note: string;
}

export const DEFAULT_CATEGORIES: Category[] = [
  { id: '1', name: 'Ăn uống', icon: 'ForkKnife', type: 'expense' },
  { id: '2', name: 'Di chuyển', icon: 'Car', type: 'expense' },
  { id: '3', name: 'Mua sắm', icon: 'ShoppingBag', type: 'expense' },
  { id: '4', name: 'Hóa đơn', icon: 'Receipt', type: 'expense' },
  { id: '5', name: 'Giải trí', icon: 'GameController', type: 'expense' },
  { id: '6', name: 'Lương', icon: 'Money', type: 'income' },
  { id: '7', name: 'Thưởng', icon: 'Gift', type: 'income' },
  { id: '8', name: 'Khác', icon: 'DotsThree', type: 'income' },
];
