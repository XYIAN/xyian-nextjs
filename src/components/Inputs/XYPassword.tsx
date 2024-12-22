import { Password, PasswordProps } from 'primereact/password';
import React from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { XYLabelModel } from '@/types';
interface PassProps extends PasswordProps {
    hideFloatLabel?: boolean | undefined;
    inputSize?: number;
    labelModel?: XYLabelModel;
}
export const XYPassword = ({
    hideFloatLabel,
    labelModel,
    inputSize,
    ...other
}: PassProps) => {
    const inputClassName = ` w-${
        inputSize ? inputSize : '16'
    }rem align-items-center`;
    const labelClassName = `w-${labelModel?.size ? labelModel.size : '8'}rem ${
        labelModel?.align && 'justify-conetent-' + labelModel.align
    } bold `;
    const labelInLine = `flex gap-2 ${
        labelModel?.inLine === true
            ? 'flex-row'
            : labelModel?.inLine === false
            ? 'flex-column'
            : 'flex-row'
    }`;

    const PasswordOverride = () => {
        return (
            <Password
                {...other}
                id={`${other?.id}  password`}
                className={`${other?.className} password-inputXY`}
                pt={{
                    input: {
                        style: {
                            height: '2rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                    },
                }}
            />
        );
    };
    if (hideFloatLabel === true) {
        return (
            <div className={`${labelInLine}`}>
                <label
                    className={`${labelClassName}`}
                    style={{ color: 'white' }}
                >
                    {labelModel?.text || 'Password'}
                </label>
                <PasswordOverride />
            </div>
        );
    } else {
        return (
            <FloatLabel>
                <PasswordOverride />
                <label className={`${labelClassName}`} htmlFor='password'>
                    {labelModel?.text || 'Password'}
                </label>
            </FloatLabel>
        );
    }
};
