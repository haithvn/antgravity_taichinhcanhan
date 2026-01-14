import { useMemo } from 'react';
import { TrendUp, TrendDown } from 'phosphor-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import SummaryCard from './SummaryCard';
import WelcomeCard from './WelcomeCard';
import type { Transaction } from '../types';
import { formatCurrency } from '../utils/format';

interface DashboardProps {
    transactions: Transaction[];
    income: number;
    expense: number;
    balance: number;
}

const COLORS = ['#556ee6', '#34c38f', '#f46a6a', '#f1b44c', '#50a5f1'];

const Dashboard = ({ transactions, income, expense, balance }: DashboardProps) => {

    const expenseByCategory = useMemo(() => {
        const expenses = transactions.filter(t => t.type === 'expense');
        const grouped = expenses.reduce((acc, curr) => {
            const name = curr.categoryName || 'Khác';
            acc[name] = (acc[name] || 0) + curr.amount;
            return acc;
        }, {} as Record<string, number>);

        return Object.keys(grouped).map(name => ({
            name,
            value: grouped[name]
        })).sort((a, b) => b.value - a.value);
    }, [transactions]);

    const statsData = [
        { name: 'Thu nhập', value: income },
        { name: 'Chi tiêu', value: expense },
    ];

    return (
        <div className="dashboard-grid">

            {/* Welcome Card - Full width on mobile/tablet, 4 columns on desktop */}
            <div className="col-span-12 xl:col-span-4">
                <WelcomeCard balance={formatCurrency(balance)} />
            </div>

            {/* Stats Cards - 8 columns on desktop */}
            <div className="col-span-12 xl:col-span-8">
                <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
                    <div className="col-span-12 md:col-span-4">
                        <SummaryCard
                            title="Tổng thu nhập"
                            value={formatCurrency(income)}
                            icon={<TrendUp weight="bold" size={24} />}
                            color="success"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <SummaryCard
                            title="Tổng chi tiêu"
                            value={formatCurrency(expense)}
                            icon={<TrendDown weight="bold" size={24} />}
                            color="danger"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="card" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h5 className="text-secondary font-medium mb-2">Số lượng giao dịch</h5>
                                <h3 className="text-2xl font-bold">{transactions.length}</h3>
                                <p className="text-success text-sm mt-1">Hoạt động trong tháng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="col-span-12 xl:col-span-8">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Tổng quan tài chính</h4>
                    </div>
                    <div className="card-body" style={{ height: '350px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={statsData} barSize={40}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <RechartsTooltip
                                    cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                                    contentStyle={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    formatter={(value?: number) => formatCurrency(value || 0)}
                                />
                                <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="col-span-12 xl:col-span-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Cơ cấu chi tiêu</h4>
                    </div>
                    <div className="card-body" style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {expenseByCategory.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={expenseByCategory}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {expenseByCategory.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip formatter={(value?: number) => formatCurrency(value || 0)} />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="text-secondary">Chưa có dữ liệu chi tiêu</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
