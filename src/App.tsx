import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import { useTransactions } from './hooks/useTransactions';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history' | 'add'>('dashboard');
  const { transactions, addTransaction, deleteTransaction, getIncome, getExpense, getBalance } = useTransactions();

  const handleAdd = (t: any) => {
    addTransaction(t);
    // Switch back to dashboard after adding
    setActiveTab('dashboard');
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'dashboard' && (
        <div className="fade-in">
          <h2 className="text-3xl font-bold mb-6">Tổng Quan</h2>
          <Dashboard
            transactions={transactions}
            income={getIncome()}
            expense={getExpense()}
            balance={getBalance()}
          />
        </div>
      )}

      {activeTab === 'history' && (
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Lịch Sử Giao Dịch</h2>
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </div>
      )}

      {activeTab === 'add' && (
        <div className="fade-in pt-8">
          <TransactionForm onAdd={handleAdd} onCancel={() => setActiveTab('dashboard')} />
        </div>
      )}
    </Layout>
  );
}

export default App;
