import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';

export function AIAdvisor() {
  const { transactions } = useFinanceStore();
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response (in a real app, this would call your AI service)
    const aiResponse = {
      role: 'assistant',
      content: 'Based on your recent transactions, I recommend focusing on reducing discretionary spending and increasing your savings rate. Would you like specific suggestions for any category?',
    };
    
    setTimeout(() => {
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        Financial Advisor AI
      </h2>
      <div className="h-64 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-100 ml-auto max-w-[80%]'
                : 'bg-gray-100 mr-auto max-w-[80%]'
            }`}
          >
            {message.content}
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-center text-gray-500">
            Ask me anything about your finances!
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your finances..."
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}