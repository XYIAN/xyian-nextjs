import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/main.scss';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import Script from 'next/script';
import { PrimeReactProvider } from 'primereact/api';
import Providers from '@/context/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Xyian Engineering',
    description: 'Software solutions, made simple. Choose Xyian!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                {/* Google Tag Manager */}
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-QNGPYK520K`}
                />
                <Script id='gtag-init' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QNGPYK520K');
                    `}
                </Script>
            </head>
            <PrimeReactProvider
                value={{
                    ripple: true,
                    inputStyle: 'filled',
                    pt: {
                        // Global PrimeReact component styling
                        button: {
                            root: {
                                style: {
                                    borderRadius: 'var(--radius-md)',
                                    fontWeight: 'var(--font-medium)',
                                },
                            },
                        },
                        card: {
                            root: {
                                style: {
                                    backgroundColor: 'var(--color-dark-grey)',
                                    border: '1px solid var(--color-grey)',
                                    borderRadius: 'var(--radius-lg)',
                                },
                            },
                        },
                        skeleton: {
                            root: {
                                style: {
                                    backgroundColor: 'var(--color-grey)',
                                },
                            },
                        },
                    },
                }}
            >
                <body className={inter.className}>
                    <Providers>{children}</Providers>
                </body>
            </PrimeReactProvider>
        </html>
    );
}
