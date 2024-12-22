import { ReactNode } from 'react';
import './bck.scss';
interface CloudBackgroundProps {
    children?: ReactNode;
}

const CloudBackground: React.FC<CloudBackgroundProps> = ({ children }) => {
    return (
        <div className='cloud-wrapper'>
            <div className='center fixed-background'>{children}</div>
        </div>
    );
};

export default CloudBackground;
