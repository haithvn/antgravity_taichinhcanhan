import type { Transaction } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const mockTransactions: Transaction[] = [
    {
        id: uuidv4(),
        amount: 5000000,
        type: 'income',
        categoryId: '6', // Lương
        categoryName: 'Lương',
        date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
        note: 'Lương tháng này',
    },
    {
        id: uuidv4(),
        amount: 2000000,
        type: 'income',
        categoryId: '7', // Thưởng
        categoryName: 'Thưởng',
        date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(),
        note: 'Thưởng dự án',
    },
    {
        id: uuidv4(),
        amount: 150000,
        type: 'expense',
        categoryId: '1', // Ăn uống
        categoryName: 'Ăn uống',
        date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
        note: 'Ăn trưa',
    },
    {
        id: uuidv4(),
        amount: 50000,
        type: 'expense',
        categoryId: '1', // Ăn uống
        categoryName: 'Ăn uống',
        date: new Date().toISOString(),
        note: 'Coffee sáng',
    },
    {
        id: uuidv4(),
        amount: 300000,
        type: 'expense',
        categoryId: '3', // Mua sắm
        categoryName: 'Mua sắm',
        date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(),
        note: 'Mua áo thun',
    },
    {
        id: uuidv4(),
        amount: 1200000,
        type: 'expense',
        categoryId: '4', // Hóa đơn
        categoryName: 'Hóa đơn',
        date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(),
        note: 'Tiền điện',
    },
    {
        id: uuidv4(),
        amount: 450000,
        type: 'expense',
        categoryId: '4', // Hóa đơn
        categoryName: 'Hóa đơn',
        date: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(),
        note: 'Tiền internet',
    },
    {
        id: uuidv4(),
        amount: 500000,
        type: 'income',
        categoryId: '8', // Khác
        categoryName: 'Khác',
        date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(),
        note: 'Bán đồ cũ',
    },
    {
        id: uuidv4(),
        amount: 200000,
        type: 'expense',
        categoryId: '2', // Di chuyển
        categoryName: 'Di chuyển',
        date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(),
        note: 'Đổ xăng',
    },
    {
        id: uuidv4(),
        amount: 100000,
        type: 'expense',
        categoryId: '2', // Di chuyển
        categoryName: 'Di chuyển',
        date: new Date(new Date().setDate(new Date().getDate() - 8)).toISOString(),
        note: 'Grab',
    },
    {
        id: uuidv4(),
        amount: 800000,
        type: 'expense',
        categoryId: '5', // Giải trí
        categoryName: 'Giải trí',
        date: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
        note: 'Xem phim và ăn tối',
    },
    {
        id: uuidv4(),
        amount: 2500000,
        type: 'expense',
        categoryId: '3', // Mua sắm
        categoryName: 'Mua sắm',
        date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(),
        note: 'Mua giày mới',
    },
    {
        id: uuidv4(),
        amount: 350000,
        type: 'expense',
        categoryId: '1', // Ăn uống
        categoryName: 'Ăn uống',
        date: new Date(new Date().setDate(new Date().getDate() - 18)).toISOString(),
        note: 'Liên hoan công ty',
    },
    {
        id: uuidv4(),
        amount: 5000000,
        type: 'expense',
        categoryId: '4', // Hóa đơn
        categoryName: 'Hóa đơn',
        date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(),
        note: 'Tiền nhà',
    },
    {
        id: uuidv4(),
        amount: 10000000,
        type: 'income',
        categoryId: '6', // Lương
        categoryName: 'Lương',
        date: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(),
        note: 'Lương tháng trước',
    },
];
