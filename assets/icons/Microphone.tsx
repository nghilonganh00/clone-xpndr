import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
function Microphone(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 10.333a2.666 2.666 0 002.667-2.666V4a2.666 2.666 0 10-5.334 0v3.667A2.666 2.666 0 008 10.333z"
        stroke={props.color ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.9 6.433v1.134c0 2.813 2.287 5.1 5.1 5.1 2.813 0 5.1-2.287 5.1-5.1V6.433M7.073 4.287c.6-.22 1.254-.22 1.854 0M7.467 5.7c.353-.093.72-.093 1.073 0M8 12.667v2"
        stroke={props.color ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Microphone;
