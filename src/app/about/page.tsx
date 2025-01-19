'use client';
import { NextPage } from 'next';
import { XYSToTop } from '@/components';
// import LeftBulletPoints from './components/leftbulletpoints';
// import RightBulletPoints from './components/rightbulletpoints';
import '../../styles/about/aboutStyles.scss';
import { ABOUT_US, ABOUT_US_SPLIT } from '@/constants';
// import FullDisplay from './components/FullDisplay';
import AboutUsDynamic from './components/AboutUsDynamic';
// import AboutUsSplit from './components/AboutUsSplit';
import AboutUsTitle from './components/AboutUsTitle';

interface Props {}

const AboutXYS: NextPage<Props> = ({}) => {
    return (
        <div className='flex flex-column'>
            <AboutUsTitle />
            <div>
                <AboutUsDynamic data={ABOUT_US_SPLIT} />
            </div>
            <XYSToTop />
        </div>
    );
};

export default AboutXYS;
