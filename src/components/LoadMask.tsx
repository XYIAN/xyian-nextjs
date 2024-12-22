import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react';
import '../styles/loadMask.scss';
interface LoadMaskProps {
    loading: boolean;
    text?: string;
}
const LoadMask = ({ loading }: LoadMaskProps) => {
    return (
        <>
            {loading && (
                <div className='loading-overlay'>
                    <ProgressSpinner />
                </div>
            )}
        </>
    );
};

export default LoadMask;
