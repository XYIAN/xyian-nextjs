import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import AboutUs from './components/AboutUs';
import { XYSToTop } from '@/common';
import BulletPoints from './components/leftbulletpoints';
import LeftBulletPoints from './components/leftbulletpoints';
import RightBulletPoints from './components/rightbulletpoints';
import './styles/aboutStyles.scss';
import { ABOUT_US } from '../team/constants/ABOUT_US';

interface Props {}

const AboutXYS: NextPage<Props> = ({}) => {
    //TODO this page needs to look better and be easier to read + media

    return (
        <main className='p-6'>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-full h-full p-1'>
                <h1 className='mb-2 pt-7 mint'>About XYS</h1>
            </div>
            <div className='bullet'>
                {ABOUT_US.map((item) => (
                    <div key={item.id}>
                        {item.id % 2 === 0 ? (
                            // Render RightBulletPoints if the id is even
                            <RightBulletPoints
                                message={item.text}
                                src={item.imageSrc}
                            />
                        ) : (
                            // Render LeftBulletPoints if the id is odd
                            <LeftBulletPoints
                                message={item.text}
                                src={item.imageSrc}
                            />
                        )}
                    </div>
                ))}
            </div>
            {/* <AboutUs type={'primary'} /> <AboutUs type={'secondary'} /> */}
            <XYSToTop />
        </main>
    );
};

export default AboutXYS;
