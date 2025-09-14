import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface HalfMoonProps {
  size?: number;
}
function HalfMoonIcon({ size, ...props }: HalfMoonProps) {
    return (
        <Svg
            width={size || 20}
            height={size || 20}
            viewBox="0 0 20 20" 
            fill="none" 
            {...props}
        >
            <Path
                fill="#F9D53F"
                d="M9.127 1.677a8.333 8.333 0 1 0 8.86 10.664c.212-.71-.537-1.321-1.19-.973a5.417 5.417 0 0 1-6.628-8.342l.057-.073c.402-.57-.05-1.38-.772-1.304l-.22.024h-.057l-.05.004Z"
            />
        </Svg>
    );
}

export default HalfMoonIcon;