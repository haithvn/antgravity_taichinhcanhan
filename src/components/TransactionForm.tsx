import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type Transaction, type TransactionType, DEFAULT_CATEGORIES } from '../types';

interface TransactionFormProps {
    onAdd: (transaction: Transaction) => void;
    onCancel?: () => void;
}

const TransactionForm = ({ onAdd, onCancel }: TransactionFormProps) => {
    const [type, setType] = useState<TransactionType>('expense');
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [categoryId, setCategoryId] = useState<string>('');
    const [note, setNote] = useState<string>('');

    const filteredCategories = DEFAULT_CATEGORIES.filter(c => c.type === type);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!amount || !categoryId || !date) return;

        const category = DEFAULT_CATEGORIES.find(c => c.id === categoryId);

        const newTransaction: Transaction = {
            id: uuidv4(),
            amount: parseFloat(amount),
            type,
            categoryId,
            categoryName: category?.name,
            date,
            note
        };

        onAdd(newTransaction);

        // Reset Form
        setAmount('');
        setNote('');
        setCategoryId('');
    };

    return (
        <div className="card w-full max-w-2xl mx-auto">
            <h2 className="card-title mb-6 border-b pb-4">Thêm Giao Dịch Mới</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Type Toggle */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => { setType('expense'); setCategoryId(''); }}
                        className={`btn-toggle ${type === 'expense' ? 'btn-toggle-danger active' : 'btn-toggle-default'}`}
                    >
                        CHI TIÊU
                    </button>
                    <button
                        type="button"
                        onClick={() => { setType('income'); setCategoryId(''); }}
                        className={`btn-toggle ${type === 'income' ? 'btn-toggle-success active' : 'btn-toggle-default'}`}
                    >
                        THU NHẬP
                    </button>
                </div>

                {/* Amount */}
                <div className="form-group">
                    <label className="form-label">Số tiền</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Nhập số tiền..."
                            className="form-control"
                            style={{ paddingLeft: '16px', paddingRight: '50px', fontWeight: 600 }}
                            required
                            min="0"
                        />
                        <span className="text-secondary" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontWeight: 500 }}>VNĐ</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date */}
                    <div className="form-group">
                        <label className="form-label">Thời gian</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    {/* Category Selection Display */}
                    <div className="form-group">
                        <label className="form-label">Danh mục đang chọn</label>
                        <div className="form-control" style={{ backgroundColor: 'var(--bg-input)', userSelect: 'none' }}>
                            {categoryId ? filteredCategories.find(c => c.id === categoryId)?.name : 'Vui lòng chọn bên dưới'}
                        </div>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="form-group">
                    <label className="form-label">Chọn Danh mục</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3" style={{ maxHeight: '192px', overflowY: 'auto', paddingRight: '4px' }}>
                        {filteredCategories.map(cat => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setCategoryId(cat.id)}
                                className={`
                                    btn-toggle text-sm p-2 border transition-all
                                    ${categoryId === cat.id
                                        ? 'bg-primary text-white border-primary shadow-sm'
                                        : 'bg-surface text-secondary border-[#eff2f7] hover:bg-gray-50'}
                                `}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div className="form-group">
                    <label className="form-label">Ghi chú</label>
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Ghi chú thêm..."
                        className="form-control"
                    />
                </div>

                {/* Submit */}
                <div className="flex gap-4 mt-2">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ flex: 1, textTransform: 'uppercase', letterSpacing: '0.5px' }}
                    >
                        Lưu Giao Dịch
                    </button>
                    {onCancel && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="btn"
                            style={{ backgroundColor: '#eff2f7', color: 'var(--text-secondary)' }}
                        >
                            Hủy
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TransactionForm;
