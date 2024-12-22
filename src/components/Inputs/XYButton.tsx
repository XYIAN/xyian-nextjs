'use client';
import { Button, ButtonProps } from 'primereact/button';
import React, { useState } from 'react';
import '../../styles/inputs/buttonHover.scss';

export type XYButtonColor =
    | undefined
    | 'transparentWhite'
    | 'white'
    | 'black'
    | 'cyan'
    | 'whiteBlack';
export interface XYButtonProps extends ButtonProps {
    xyType?: XYButtonColor;
    // xyAnimate?: boolean;
}

const XYButton = ({ xyType, ...other }: XYButtonProps) => {
    //?class type changes the scss imports used
    const [classType, setClassType] = useState<XYButtonColor | undefined>();
    //?style is the pt override
    const determineStyle = (): React.CSSProperties | undefined => {
        switch (xyType) {
            case 'transparentWhite':
                if (classType !== 'transparentWhite')
                    setClassType('transparentWhite');
                return other?.style;
            case 'white':
                if (classType !== 'white') setClassType('white');
                return {
                    // backgroundColor: 'white',
                    // color: 'black',
                    ...other?.style,
                };
            case 'whiteBlack':
                if (classType !== 'whiteBlack') setClassType('whiteBlack');
                return {
                    backgroundColor: 'white',
                    color: 'black',
                    ...other?.style,
                };
            default:
                return other?.style;
        }
    };

    return (
        <Button
            {...other}
            style={determineStyle()}
            className={`${classType} ${other.className} p-1 gap-1`}
        />
    );
};

export default XYButton;
