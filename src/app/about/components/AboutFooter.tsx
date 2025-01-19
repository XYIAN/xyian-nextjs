import { BackToHome, EmailLink, MainLinks } from '@/components';
import React from 'react';

const AboutFooter = () => {
    return (
        <div className='text-center p-1' style={{ marginBottom: '50vh' }}>
            <h2>Interested to find out more?</h2>
            <h4>
                {' '}
                <a
                    href='mailto:support@xyian.com'
                    className='underline cursor-pointer font-bold'
                >
                    Email XYIAN
                </a>{' '}
                or message us on any of our social accounts below.
            </h4>
            <MainLinks />
            <BackToHome />
        </div>
    );
};

export default AboutFooter;
