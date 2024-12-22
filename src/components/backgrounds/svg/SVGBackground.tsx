import React from 'react';
import Logo_White from '../../../../public/images/XYIAN LOGO_ALL_SVG/transparentbck/XYIAN_Primary.svg';
import Logo_Black from '../../../../public/images/XYIAN LOGO_ALL_SVG/transparentbck/XYIAN_Secondary_t.svg';
import Logo_Cyan from '../../../../public/images/XYIAN LOGO_ALL_SVG/transparentbck/XYIAN_cyan_t.svg';
import './bck.scss';
interface BckProps {
    style?: 'black' | 'white' | 'gold' | 'purple' | 'cyan';
}
const SVGBackground = ({ style }: BckProps) => {
    const Logo = () => {
        switch (style) {
            case 'white':
                return <Logo_White className='svg' />;
            case 'cyan':
                return <Logo_Cyan className='svg' />;
            default:
                return <Logo_Black className='svg' />;
        }
    };

    return (
        <>
            <div className='mainContainer-bck'>
                <div className='wrapper-bck'>
                    <div className='wrap'>
                        {Array.from({ length: 10 }, (_, x) => (
                            <Logo key={x} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SVGBackground;
