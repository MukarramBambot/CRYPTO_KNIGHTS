import { create } from 'zustand';
import { Transaction, Budget, Category } from '../types/finance';

interface FinanceStore {
  transactions: Transaction[];
  budgets: Budget[];
  categories: Category[];
  addTransaction: (transaction: Transaction) => void;
  addBudget: (budget: Budget) => void;
  updateBudget: (budget: Budget) => void;
}

export const useFinanceStore = create<FinanceStore>((set) => ({
  transactions: [],
  budgets: [],
  categories: [
    { id: '1', name: 'Food', color: '#FF6B6B' },
    { id: '2', name: 'Transport', color: '#4ECDC4' },
    { id: '3', name: 'Entertainment', color: '#45B7D1' },
    { id: '4', name: 'Shopping', color: '#96CEB4' },
    { id: '5', name: 'Bills', color: '#FFEEAD' },
  ],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
  addBudget: (budget) =>
    set((state) => ({
      budgets: [...state.budgets, budget],
    })),
  updateBudget: (budget) =>
    set((state) => ({
      budgets: state.budgets.map((b) => (b.id === budget.id ? budget : b)),
    })),
}));