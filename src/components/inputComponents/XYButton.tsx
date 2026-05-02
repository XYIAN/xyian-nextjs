'use client';
import { Button, ButtonProps } from 'primereact/button';
import React, { useMemo } from 'react';

export type XYButtonColor =
    | undefined
    | 'transparentWhite'
    | 'white'
    | 'black'
    | 'cyan'
    | 'whiteBlack';

export interface XYButtonProps extends ButtonProps {
    xyType?: XYButtonColor;
}

const XYButton = ({ xyType, ...other }: XYButtonProps) => {
    const classType = useMemo((): XYButtonColor | undefined => {
        switch (xyType) {
            case 'transparentWhite':
            case 'white':
            case 'whiteBlack':
                return xyType;
            default:
                return undefined;
        }
    }, [xyType]);

    const computedStyle = useMemo((): React.CSSProperties | undefined => {
        switch (xyType) {
            case 'whiteBlack':
                return {
                    backgroundColor: 'white',
                    color: 'black',
                    ...other?.style,
                };
            default:
                return other?.style;
        }
    }, [xyType, other.style]);

    return (
        <Button
            {...other}
            style={computedStyle}
            className={`${classType ?? ''} ${other.className ?? ''} p-1 gap-1`}
        />
    );
};

export default XYButton;
