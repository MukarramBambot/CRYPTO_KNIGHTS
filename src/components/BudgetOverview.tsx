import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useFinanceStore } from '../store/useFinanceStore';

export function BudgetOverview() {
  const { budgets, categories } = useFinanceStore();

  const data = budgets.map((budget) => ({
    name: budget.category,
    value: budget.amount,
    color: categories.find((c) => c.name === budget.category)?.color || '#000000',
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
      <div className="h-64">
        {budgets.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500 mt-8">No budgets set</p>
        )}
      </div>
    </div>
  );
}