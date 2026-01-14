import { useState } from 'react';
import type { ReactNode } from 'react';
import { House, ListDashes, PlusCircle, List, MagnifyingGlass, Bell, UserCircle } from 'phosphor-react';

interface LayoutProps {
    children: ReactNode;
    activeTab: 'dashboard' | 'history' | 'add';
    onTabChange: (tab: 'dashboard' | 'history' | 'add') => void;
}

const Layout = ({ children, activeTab, onTabChange }: LayoutProps) => {
    // Mobile Sidebar State (Offcanvas)
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // Desktop Sidebar State (Collapsed)
    const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false);

    // Toggle Sidebar based on screen size
    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
            setIsMobileSidebarOpen(!isMobileSidebarOpen);
        } else {
            setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed);
        }
    };

    return (
        <div className="layout-wrapper">
            {/* Sidebar */}
            <aside className={`sidebar ${isMobileSidebarOpen ? 'open' : ''} ${isDesktopSidebarCollapsed ? 'collapsed' : ''}`}>
                {/* Brand */}
                <div className="sidebar-header">
                    <h1 className="sidebar-brand">{isDesktopSidebarCollapsed ? 'MF' : 'My Finance'}</h1>
                </div>

                <div className="sidebar-menu">
                    <p className="menu-title">Menu</p>
                    <nav className="flex flex-col gap-2">
                        <button
                            onClick={() => { onTabChange('dashboard'); setIsMobileSidebarOpen(false); }}
                            className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                            title="Dashboards"
                        >
                            <House size={20} weight={activeTab === 'dashboard' ? 'fill' : 'regular'} />
                            <span>Dashboards</span>
                        </button>

                        <button
                            onClick={() => { onTabChange('history'); setIsMobileSidebarOpen(false); }}
                            className={`menu-item ${activeTab === 'history' ? 'active' : ''}`}
                            title="Lịch sử"
                        >
                            <ListDashes size={20} weight={activeTab === 'history' ? 'fill' : 'regular'} />
                            <span>Lịch sử</span>
                        </button>

                        <button
                            onClick={() => { onTabChange('add'); setIsMobileSidebarOpen(false); }}
                            className={`menu-item ${activeTab === 'add' ? 'active' : ''}`}
                            title="Thêm giao dịch"
                        >
                            <PlusCircle size={20} weight={activeTab === 'add' ? 'fill' : 'regular'} />
                            <span>Thêm giao dịch</span>
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Overlay for mobile */}
            <div
                className={`sidebar-overlay ${isMobileSidebarOpen ? 'open' : ''}`}
                onClick={() => setIsMobileSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <div className="main-content">
                {/* Top Header */}
                <header className="header">
                    <div className="header-left">
                        <button onClick={toggleSidebar} className="btn-icon">
                            <List size={24} />
                        </button>

                        {/* Search Bar */}
                        <div className="search-bar">
                            <MagnifyingGlass size={16} className="text-secondary" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className="header-right">
                        <button className="btn-icon relative">
                            <Bell size={22} />
                            <span style={{
                                position: 'absolute',
                                top: '2px',
                                right: '2px',
                                width: '8px',
                                height: '8px',
                                backgroundColor: 'var(--danger)',
                                borderRadius: '50%'
                            }}></span>
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <UserCircle size={32} className="text-secondary" />
                            <span className="text-secondary font-medium text-sm hidden sm:block">Admin</span>
                        </div>
                    </div>
                </header>

                {/* Scrollable Main Content */}
                <main className="content-body">
                    <div className="container">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
