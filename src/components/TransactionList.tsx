import React from 'react';
import { format } from 'date-fns';
import { useFinanceStore } from '../store/useFinanceStore';

export function TransactionList() {
  const { transactions } = useFinanceStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(transaction.date), 'MMM d, yyyy')} • {transaction.category}
              </p>
            </div>
            <span
              className={`font-semibold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
            </span>
          </div>
        ))}
        {transactions.length === 0 && (
          <p className="text-center text-gray-500">No transactions yet</p>
        )}
      </div>
    </div>
  );
}