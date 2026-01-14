import { Trash } from 'phosphor-react';
import type { Transaction } from '../types';
import { formatCurrency, formatDate } from '../utils/format';

interface TransactionListProps {
    transactions: Transaction[];
    onDelete: (id: string) => void;
}

const TransactionList = ({ transactions, onDelete }: TransactionListProps) => {
    if (transactions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-[var(--text-secondary)] card w-full">
                <p>Chưa có giao dịch nào.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            {transactions.map((t) => (
                <div key={t.id} className="card flex justify-between items-center p-4 hover:brightness-110 transition-all">
                    <div className="flex items-center gap-4">
                        <div className={`w-2 h-12 rounded-full ${t.type === 'income' ? 'bg-[var(--success)]' : 'bg-[var(--danger)]'}`}></div>
                        <div>
                            <h4 className="font-bold text-lg">{t.categoryName || 'Khác'}</h4>
                            <p className="text-sm text-[var(--text-secondary)]">{formatDate(t.date)} • {t.note}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`font-bold text-lg ${t.type === 'income' ? 'text-[var(--success)]' : 'text-[var(--danger)]'}`}>
                            {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
                        </span>
                        <button
                            onClick={() => onDelete(t.id)}
                            className="p-2 text-[var(--text-secondary)] hover:text-[var(--danger)] transition-colors"
                            title="Xóa"
                        >
                            <Trash size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
