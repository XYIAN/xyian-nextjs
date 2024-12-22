import React from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';

export const XYConfirmDialog = () => {
    return (
        <ConfirmDialog
            className='XYConfirmDialog'
            pt={{
                acceptButton: {
                    root: {
                        style: {
                            color: 'black',
                            backgroundColor: 'white',
                        },
                    },
                },
            }}
        />
    );
};
