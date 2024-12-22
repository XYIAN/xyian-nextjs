import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import AboutUs from './components/AboutUs';
import { XYSToTop } from '@/common';

interface Props {}

const AboutXYS: NextPage<Props> = ({}) => {
    //TODO this page needs to look better and be easier to read + media
    return (
        <main className='p-6'>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-full h-full p-1'>
                <h1 className='mb-2 pt-7'>About XYS</h1>
            </div>
            <AboutUs type={'primary'} /> <AboutUs type={'secondary'} />
            <XYSToTop />
        </main>
    );
};

export default AboutXYS;
