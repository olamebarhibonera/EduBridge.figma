import { MobileLayout } from '../components/layout/MobileLayout';
import { useState } from 'react';
import { Plus, TrendingDown, TrendingUp, PieChart, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: string;
}

export function BudgetScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', type: 'expense', category: 'Food', amount: 500, description: 'Groceries', date: '2026-02-18' },
    { id: '2', type: 'expense', category: 'Transport', amount: 200, description: 'Matatu to campus', date: '2026-02-18' },
    { id: '3', type: 'income', category: 'Allowance', amount: 5000, description: 'Monthly allowance', date: '2026-02-15' },
    { id: '4', type: 'expense', category: 'Accommodation', amount: 12000, description: 'Rent', date: '2026-02-01' },
    { id: '5', type: 'expense', category: 'Food', amount: 300, description: 'Restaurant', date: '2026-02-17' },
  ]);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: 'expense' as 'income' | 'expense',
    category: '',
    amount: '',
    description: '',
  });

  const categories = {
    expense: ['Food', 'Transport', 'Accommodation', 'Study Materials', 'Healthcare', 'Entertainment', 'Other'],
    income: ['Allowance', 'Scholarship', 'Part-time Work', 'Other'],
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<string, number>);

  const handleAddTransaction = () => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      type: newTransaction.type,
      category: newTransaction.category,
      amount: parseFloat(newTransaction.amount),
      description: newTransaction.description,
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([transaction, ...transactions]);
    setNewTransaction({ type: 'expense', category: '', amount: '', description: '' });
    setShowAddDialog(false);
  };

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Budget Tracker</h1>
            <p className="text-gray-600">Manage your finances in KES</p>
          </div>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button size="sm" className="rounded-xl">
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Transaction</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setNewTransaction({ ...newTransaction, type: 'expense' })}
                    className={`flex-1 py-2 rounded-xl transition-colors ${
                      newTransaction.type === 'expense'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Expense
                  </button>
                  <button
                    onClick={() => setNewTransaction({ ...newTransaction, type: 'income' })}
                    className={`flex-1 py-2 rounded-xl transition-colors ${
                      newTransaction.type === 'income'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Income
                  </button>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={newTransaction.category}
                    onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl mt-1"
                  >
                    <option value="">Select category</option>
                    {categories[newTransaction.type].map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount (KES)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={newTransaction.amount}
                    onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                    className="rounded-xl mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="What was this for?"
                    value={newTransaction.description}
                    onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    className="rounded-xl mt-1"
                  />
                </div>
                <Button onClick={handleAddTransaction} className="w-full rounded-xl">
                  Add Transaction
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-sm opacity-90 mb-1">Current Balance</div>
          <div className="text-3xl font-bold mb-4">KES {balance.toLocaleString()}</div>
          <div className="flex gap-4">
            <div className="flex-1 bg-white/20 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs opacity-90">Income</span>
              </div>
              <div className="font-semibold">KES {totalIncome.toLocaleString()}</div>
            </div>
            <div className="flex-1 bg-white/20 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4" />
                <span className="text-xs opacity-90">Expenses</span>
              </div>
              <div className="font-semibold">KES {totalExpenses.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-blue-600" />
            Expenses by Category
          </h2>
          <div className="space-y-2">
            {Object.entries(expensesByCategory).map(([category, amount]) => {
              const percentage = (amount / totalExpenses) * 100;
              return (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{category}</span>
                    <span className="font-semibold text-gray-900">KES {amount.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Recent Transactions
          </h2>
          <div className="space-y-2">
            {transactions.slice(0, 10).map((transaction) => (
              <div
                key={transaction.id}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'income' ? (
                      <TrendingUp className={`w-5 h-5 text-green-600`} />
                    ) : (
                      <TrendingDown className={`w-5 h-5 text-red-600`} />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{transaction.description}</div>
                    <div className="text-sm text-gray-500">{transaction.category} • {transaction.date}</div>
                  </div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}KES {transaction.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-green-50 rounded-2xl p-4 space-y-2">
          <h3 className="font-semibold text-gray-900">💰 Budget Tips for Kenya</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Use M-Pesa for safe digital payments</li>
            <li>• Matatus are cheaper than taxis</li>
            <li>• Buy from local markets to save on groceries</li>
            <li>• Student discounts available at many places</li>
          </ul>
        </div>
      </div>
    </MobileLayout>
  );
}
