import type { Transaction } from '../types';
import useLocalStorage from './useLocalStorage';

export const useTransactions = () => {
    const [transactions, setTransactions] = useLocalStorage<Transaction[]>('transactions', []);

    const addTransaction = (transaction: Transaction) => {
        setTransactions((prev) => [transaction, ...prev]);
    };

    const deleteTransaction = (id: string) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
    };

    const getBalance = () => {
        return transactions.reduce((acc, curr) => {
            return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
        }, 0);
    };

    const getIncome = () => {
        return transactions
            .filter((t) => t.type === 'income')
            .reduce((acc, curr) => acc + curr.amount, 0);
    };

    const getExpense = () => {
        return transactions
            .filter((t) => t.type === 'expense')
            .reduce((acc, curr) => acc + curr.amount, 0);
    };

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        getBalance,
        getIncome,
        getExpense,
    };
};
