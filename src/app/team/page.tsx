'use client'; // This marks the entire file as a Client Component
import { NextPage } from 'next';
import OurTeam from './components/OurTeam';
import { XYSToTop } from '@/components';

const Team: NextPage = () => {
    return (
        <main>
            <div className='flex justify-content-center pt-8 flex-column'>
                <h2 className='text-center pb-3 pt-3'>Meet Our Team</h2>
                <OurTeam />
            </div>
            <XYSToTop />
        </main>
    );
};

export default Team;
