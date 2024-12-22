'use client';
import { NextPage } from 'next';

interface Props {}

const Welcome: NextPage<Props> = ({}) => {
    return (
        <div>
            <h1>Welcome to XYS</h1>
            <p>
                So now what? Xyian will send you periodic information as it
                becomes avaiable or needed.
            </p>
            <ul>
                <li>Project Outline</li>
                <li>Consultation Request</li>
                <li>Software Policy and Privacy Agreenement</li>
                <li>Timeline / Expected ETA</li>
                <li>XYS Free Goodie Bag sent after first payment</li>
            </ul>
        </div>
    );
};

export default Welcome;
