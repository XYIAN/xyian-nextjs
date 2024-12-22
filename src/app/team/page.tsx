'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/components/menu/MenuModel';
import { NextPage } from 'next';
import OurTeam from './components/OurTeam';
import { XYSToTop } from '@/components';

interface Props {}

const Team: NextPage<Props> = ({}) => {
    return (
        <main>
            <MenuModel />
            <div className='flex justify-content-center pt-8 flex-column'>
                <h2 className='text-center pb-3 pt-3'>Meet Our Team</h2>
                <OurTeam />
            </div>
            <XYSToTop />
        </main>
    );
};

export default Team;
