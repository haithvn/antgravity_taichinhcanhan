import type { ReactNode } from 'react';

interface SummaryCardProps {
    title: string;
    value: string;
    icon: ReactNode;
    trend?: string;
    color: 'primary' | 'success' | 'danger' | 'warning';
}

const SummaryCard = ({ title, value, icon, color }: SummaryCardProps) => {
    const colorMap = {
        primary: 'var(--primary)',
        success: 'var(--success)',
        danger: 'var(--danger)',
        warning: 'var(--warning)',
    };

    return (
        <div className="card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <p className="text-secondary" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                    {title}
                </p>
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    {value}
                </h3>
            </div>

            <div
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: `rgba(var(--${color}-rgb), 0.1)`, // Simplified using direct map for now
                    background: colorMap[color],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    opacity: 0.9
                }}
            >
                {icon}
            </div>
        </div>
    );
};

export default SummaryCard;
