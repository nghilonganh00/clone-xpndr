import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
function Folder(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M9.62 9.7H6.287"
        stroke={props.color ?? '#000'}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.667 7.333v4c0 2.667-.667 3.334-3.334 3.334H4.667C2 14.667 1.333 14 1.333 11.333V4.667C1.333 2 2 1.333 4.667 1.333h1c1 0 1.22.294 1.6.8l1 1.334c.253.333.4.533 1.066.533h2c2.667 0 3.334.667 3.334 3.333z"
        stroke={props.color ?? '#000'}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default Folder;
