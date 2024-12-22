import React from 'react';
import { PersonDisplay } from './PersonDisplay';
import { TEAM_LIST } from '@/constants';

const OurTeam = () => {
    return (
        <div className='flex flex-column p-2 justify-content-center align-items-center'>
            {TEAM_LIST.map((person) => {
                return <PersonDisplay memberDetails={person} key={person.id} />;
            })}
        </div>
    );
};

export default OurTeam;
