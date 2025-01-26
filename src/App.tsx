import React from 'react';
import { TransactionForm } from './components/TransactionForm';
import { BudgetForm } from './components/BudgetForm';
import { TransactionList } from './components/TransactionList';
import { BudgetOverview } from './components/BudgetOverview';
import { FinancialAnalysis } from './components/FinancialAnalysis';
import { AIAdvisor } from './components/AIAdvisor';
import { Wallet } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Personal Finance Tracker</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <TransactionForm />
            <BudgetForm />
          </div>
          <div className="space-y-6">
            <TransactionList />
            <AIAdvisor />
          </div>
          <div className="space-y-6">
            <BudgetOverview />
            <FinancialAnalysis />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;