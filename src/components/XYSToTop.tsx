import { ScrollTop, ScrollTopProps } from 'primereact/scrolltop';
import React from 'react';

export type colorSelect = 'white' | 'black' | undefined;
interface XYSToTop extends ScrollTopProps {
    color?: colorSelect;
}
export const XYSToTop = ({ color, ...other }: XYSToTop) => {
    let colorClass: string = '';
    let colorStyle: React.CSSProperties | undefined = undefined;

    switch (color) {
        case 'black':
            colorClass = 'bg-black';
            colorStyle = { color: 'white' };
            break;
        default:
            colorClass = 'bg-white';
            break;
    }

    return (
        <ScrollTop
            {...other}
            className={`${colorClass} ${other.className}`}
            style={{ ...other.style, ...colorStyle }}
        />
    );
};
