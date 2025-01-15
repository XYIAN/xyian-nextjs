'use client';
import { XYLabelModel } from '@/types';
import XYButton from '@/components/inputComponents/XYButton';
import { PrimeReactProvider } from 'primereact/api';
import { confirmDialog } from 'primereact/confirmdialog';
import { Password } from 'primereact/password';
import { useState } from 'react';
import '../../styles/_links.scss';

export default function Login() {
    // const labelModel: XYLabelModel = {
    //     text: 'PassWord',
    // };
    const [temp, setTemp] = useState('');
    const handleLoginClick = () => {
        confirmDialog({
            message: (
                <p className='text-center bold'>
                    The token you entered is not associated with any client
                    portals. Please try again or contact{' '}
                    <a
                        href='mailto:support@xyian.com'
                        className='underline cursor-pointer'
                    >
                        support@xyian.com
                    </a>
                </p>
            ),
            header: 'Invalid Client Token',
            acceptLabel: 'OKAY',
            rejectClassName: 'hidden',
        });
    };

    return (
        <main>
            <h1 className='text-center pt-8'>XYS Client Portal</h1>
            <div className='card flex justify-content-center flex-column align-items-center'>
                <div className='flex justify-content-center align-content-center gap-2'>
                    <Password
                        placeholder='Enter XYS Token'
                        toggleMask
                        feedback={false}
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        pt={{
                            root: {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            },
                            input: {
                                style: {
                                    height: '2rem',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '.4rem',
                                },
                            },
                            showIcon: {
                                style: {
                                    alignSelf: 'center', // Center the show icon
                                    fontSize: '1.2rem', // Adjust icon size if needed
                                },
                            },
                            hideIcon: {
                                style: {
                                    alignSelf: 'center', // Center the hide icon
                                    fontSize: '1.2rem', // Adjust icon size if needed
                                },
                            },
                        }}
                    />
                    <XYButton
                        xyType='whiteBlack'
                        label='Login'
                        onClick={() => handleLoginClick()}
                        disabled={temp.length > 3 ? false : true}
                        tooltipOptions={{
                            showOnDisabled: true,
                            position: 'bottom',
                        }}
                        tooltip={
                            temp.length > 3
                                ? 'Enter XYS Unique Token'
                                : 'XYS Tokens must be 4 keys or more.'
                        }
                    />
                </div>
            </div>
            <div className='w-full flex justify-content-center align-items-center'>
                <p>
                    Not an existing client?&nbsp;
                    <a
                        href='mailto:support@xyian.com'
                        className='cursor-pointer underline gen-link'
                    >
                        Email Support@Xyian.com
                    </a>
                </p>
            </div>
        </main>
    );
}
