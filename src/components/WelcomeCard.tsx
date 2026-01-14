import { User } from 'phosphor-react';

const WelcomeCard = ({ balance }: { balance: string }) => {
    return (
        <div className="card" style={{
            backgroundColor: 'rgba(85, 110, 230, 0.1)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px'
        }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
                <h4 className="text-primary font-bold text-lg mb-2">Welcome Back!</h4>
                <p className="text-primary" style={{ fontSize: '0.875rem', marginBottom: '16px' }}>Skote Dashboard</p>

                <div style={{ marginTop: '16px' }}>
                    <p className="text-primary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px' }}>Số dư hiện tại</p>
                    <h3 className="text-2xl font-bold text-primary">{balance}</h3>
                </div>
            </div>

            {/* Decorative Background */}
            <div style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                width: '100px',
                height: '100px',
                backgroundColor: 'rgba(85, 110, 230, 0.2)',
                borderRadius: '50%',
                filter: 'blur(20px)'
            }}></div>
            <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                <User size={64} className="text-primary" style={{ opacity: 0.2 }} />
            </div>
        </div>
    );
};

export default WelcomeCard;
