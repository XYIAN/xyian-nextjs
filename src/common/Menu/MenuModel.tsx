'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Sidebar } from 'primereact/sidebar';
import { useRef, useState } from 'react';
import { MobileMenu } from './MobileMenu';

export const MenuModel = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const menuModel: MenuItem[] = [
        {
            label: 'About',
            items: [
                { label: 'Mission', command: () => router.push('/mission') },
                { label: 'Company', command: () => router.push('/portfolio') },
                { label: 'Our Team', command: () => router.push('/team') },
            ],
        },
        {
            label: 'Services',
            items: [
                { label: 'Web Apps', command: () => router.push('/webApps') },
                {
                    label: 'Mobile Apps',
                    command: () => router.push('/mobileApps'),
                },
                { label: 'Software', command: () => router.push('/software') },
            ],
        },
        {
            label: 'Contact',
            items: [
                { label: 'Requests', command: () => router.push('/contact') },
                { label: 'Social', command: () => router.push('/social') },
                { label: 'Support', command: () => router.push('/support') },
            ],
        },
    ];
    const tempMenu: MenuItem[] = [
        {
            label: 'Contact',
            items: [{ label: 'Social', command: () => router.push('/social') }],
        },
    ];
    return (
        <>
            <Button
                icon={'fa-solid fa-bars'}
                onClick={() => setVisible(true)}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    padding: '5px',
                }}
            />
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                position='right'
                className='flex justify-content-center align-content-center'
            >
                {/* <Menu
                    model={tempMenu}
                    className='w-full flex justify-content-center'
                /> */}
                <MobileMenu />
            </Sidebar>
        </>
    );
};
