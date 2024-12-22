'use client';
import { NextPage } from 'next';

interface Props {}

const New: NextPage<Props> = ({}) => {
    return (
        <div className='h-full w-full'>
            <h1>Become a Xyianian!</h1>
            <p>
                Ready to build something amazing? Please complete the short form
                below and a member of our onboarding team will reach out to you
                within 1-4 buisness days with everything you will need to know
                and more.
            </p>
            {/* form goes here  */}
        </div>
    );
};

export default New;
