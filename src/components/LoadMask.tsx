import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react';

interface LoadMaskProps {
    loading: boolean;
    text?: string;
}
export const LoadMask = ({ loading }: LoadMaskProps) => {
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
