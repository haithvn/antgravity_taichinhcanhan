import type { Transaction } from '../types';
import { formatCurrency, formatDate } from '../utils/format';
import { Trash, TrendUp, TrendDown } from 'phosphor-react';

interface TransactionListProps {
    transactions: Transaction[];
    onDelete: (id: string) => void;
}

const TransactionList = ({ transactions, onDelete }: TransactionListProps) => {
    if (transactions.length === 0) {
        return (
            <div className="card w-full p-12 flex flex-col items-center justify-center text-secondary">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <TrendUp size={32} className="text-gray-400" />
                </div>
                <h5 className="text-lg font-medium mb-1">Chưa có giao dịch nào</h5>
                <p className="text-sm">Hãy thêm giao dịch mới để bắt đầu theo dõi.</p>
            </div>
        );
    }

    return (
        <div className="card overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase text-secondary font-semibold">
                            <th className="px-6 py-4">Thời gian</th>
                            <th className="px-6 py-4">Danh mục</th>
                            <th className="px-6 py-4">Ghi chú</th>
                            <th className="px-6 py-4 text-right">Số tiền</th>
                            <th className="px-6 py-4 text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {transactions.map((t) => (
                            <tr key={t.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4 text-sm text-primary whitespace-nowrap">
                                    {formatDate(t.date)}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.type === 'income' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                                            }`}>
                                            {t.type === 'income' ? <TrendUp weight="bold" /> : <TrendDown weight="bold" />}
                                        </div>
                                        <span className="text-sm font-medium text-primary">{t.categoryName || 'Khác'}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary max-w-[200px] truncate" title={t.note}>
                                    {t.note || '-'}
                                </td>
                                <td className={`px-6 py-4 text-right font-semibold text-sm ${t.type === 'income' ? 'text-success' : 'text-danger'
                                    }`}>
                                    {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => onDelete(t.id)}
                                        className="p-2 rounded text-secondary hover:text-danger hover:bg-danger/10 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                        title="Xóa giao dịch"
                                    >
                                        <Trash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionList;
