import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { useFinanceStore } from '../store/useFinanceStore';

export function FinancialAnalysis() {
  const { transactions } = useFinanceStore();

  const monthlyData = transactions.reduce((acc: any[], transaction) => {
    const month = format(new Date(transaction.date), 'MMM yyyy');
    const existingMonth = acc.find((item) => item.month === month);

    if (existingMonth) {
      if (transaction.type === 'income') {
        existingMonth.income += transaction.amount;
      } else {
        existingMonth.expenses += transaction.amount;
      }
    } else {
      acc.push({
        month,
        income: transaction.type === 'income' ? transaction.amount : 0,
        expenses: transaction.type === 'expense' ? transaction.amount : 0,
      });
    }

    return acc;
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Financial Trends</h2>
      <div className="h-64">
        {monthlyData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#4CAF50" name="Income" />
              <Line type="monotone" dataKey="expenses" stroke="#F44336" name="Expenses" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500 mt-8">No data available</p>
        )}
      </div>
    </div>
  );
}