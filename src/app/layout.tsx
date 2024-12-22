import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Script from 'next/script';
import { PrimeReactProvider } from 'primereact/api';
import { MenuModel, XYConfirmDialog } from '@/components';

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
            <PrimeReactProvider>
                <body className={inter.className}>
                    {children}
                    <XYConfirmDialog />
                    <MenuModel />
                </body>
            </PrimeReactProvider>
        </html>
    );
}
