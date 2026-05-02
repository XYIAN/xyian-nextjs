'use client';
import { NextPage } from 'next';
import { XYSToTop } from '@/components';
import { ABOUT_US_SPLIT } from '@/constants';
import AboutUsDynamic from './components/AboutUsDynamic';
import AboutUsTitle from './components/AboutUsTitle';
import AboutFooter from './components/AboutFooter';

const AboutXYS: NextPage = () => {
    return (
        <div className='flex flex-column'>
            <AboutUsTitle />
            <div>
                <AboutUsDynamic data={ABOUT_US_SPLIT} />
            </div>
            <AboutFooter />
            <XYSToTop />
        </div>
    );
};

export default AboutXYS;
