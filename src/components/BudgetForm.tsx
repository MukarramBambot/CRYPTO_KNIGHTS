import React, { useState } from 'react';
import { Target } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';

export function BudgetForm() {
  const { addBudget, categories } = useFinanceStore();
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    period: 'monthly',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBudget({
      id: Date.now().toString(),
      category: formData.category,
      amount: Number(formData.amount),
      spent: 0,
      period: formData.period as 'monthly' | 'yearly',
    });
    setFormData({ category: '', amount: '', period: 'monthly' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Budget</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Period</label>
          <select
            value={formData.period}
            onChange={(e) => setFormData({ ...formData, period: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
        >
          <Target className="w-4 h-4 mr-2" />
          Set Budget
        </button>
      </div>
    </form>
  );
}