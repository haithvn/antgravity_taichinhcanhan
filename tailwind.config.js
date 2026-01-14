/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#556ee6',
                'primary-hover': '#455bc0',
                secondary: '#74788d',
                'secondary-hover': '#636678',
                success: '#34c38f',
                danger: '#f46a6a',
                warning: '#f1b44c',
                info: '#50a5f1',
                dark: '#343a40',
                body: '#f8f8fb',
                sidebar: '#2a3042',
                surface: '#ffffff',
                input: '#f6f6f6'
            },
            borderRadius: {
                sm: '4px',
                md: '8px',
                lg: '12px',
                full: '9999px',
            },
            spacing: {
                md: '16px',
                lg: '24px',
            },
            boxShadow: {
                card: '0 0.75rem 1.5rem rgba(18, 38, 63, .03)',
            }
        },
    },
    plugins: [],
}
