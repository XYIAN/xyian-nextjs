'use client';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
// import LoadMask from '../LoadMask';
import SVGBackground from '../backgrounds/svg/SVGBackground';
import { MobileMenu } from './MobileMenu';

export const MenuModel = () => {
    const [visible, setVisible] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const onClose = () => {
        // if (!isLoading && visible) {
        //     setVisible(false);
        //     setIsLoading(true);
        // }
        //alert('hit');
        setVisible(false);
    };
    // const SideBarHeader = (props: SidebarProps): ReactNode => {
    //     //const {} = props;
    //     return (
    //         <Toolbar
    //             end={
    //                 <XYButton
    //                     icon='pi-times'
    //                     onClick={() => setVisible(false)}
    //                 />
    //             }
    //         />
    //     );
    // };
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
                    zIndex: 999,
                }}
                pt={{
                    root: {
                        style: {
                            backgroundColor: 'white',
                        },
                    },
                }}
            />
            <Sidebar
                //header={SideBarHeader}
                visible={visible}
                onHide={() => setVisible(false)}
                position='right'
                className='flex justify-content-center align-content-center sideMenu bg-black-alpha-90'
                closeIcon={
                    <i
                        className='fa-solid fa-xmark fa-lg cursor-pointer hover:shadow-4'
                        style={{ color: 'white', zIndex: 999 }}
                    />
                }
            >
                <SVGBackground />
                <MobileMenu onClose={onClose} />
                {/* <LoadMask loading={isLoading} /> */}
            </Sidebar>
        </>
    );
};
