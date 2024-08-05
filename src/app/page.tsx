import Image from 'next/image';
import styles from './page.module.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { MenuModel } from '@/common/Menu/MenuModel';

export default function Home() {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div
                    style={{
                        padding: '6rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <h1 className=''>Xyian Software</h1>
                </div>
            </main>
        </PrimeReactProvider>
    );
}
