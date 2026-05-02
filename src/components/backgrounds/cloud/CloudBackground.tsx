import { ReactNode } from 'react';
import './bck.scss';
interface CloudBackgroundProps {
    children?: ReactNode;
}

const CloudBackground = ({ children }: CloudBackgroundProps) => {
    return (
        <div className='cloud-wrapper'>
            <div className='center fixed-background'>{children}</div>
        </div>
    );
};

export default CloudBackground;
