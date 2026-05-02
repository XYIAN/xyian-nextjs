'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Ripple } from 'primereact/ripple';
import XYButton from '../inputComponents/XYButton';
import { MENU_LINKS } from '@/constants';
import { MenuItem } from '@/types';

const BUTTON_STYLE = 'p-2 font-bold w-11';

interface HamburgerMenuListProps {
    closeMenu: () => void;
}

export const HamburgerMenuList = ({ closeMenu }: HamburgerMenuListProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
        closeMenu();
    };

    const filteredMenu: MenuItem[] = MENU_LINKS.filter(
        (item) => item.route !== pathname.replace('/', '')
    );

    return (
        <div className='flex flex-column p-1 mobileMenu gap-4 justify-content-center align-content-center'>
            {filteredMenu.map((page) => (
                <div
                    key={page.route}
                    className='flex justify-content-center align-items-center'
                >
                    <XYButton
                        className={BUTTON_STYLE}
                        label={page.label}
                        onClick={() => handleNavigateClick(page.route)}
                        xyType='transparentWhite'
                    >
                        <Ripple
                            pt={{
                                root: {
                                    style: {
                                        background: 'rgba(0, 14, 0, .4)',
                                    },
                                },
                            }}
                        />
                    </XYButton>
                </div>
            ))}
        </div>
    );
};
