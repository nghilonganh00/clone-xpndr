import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
function Gallery(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M6 14.667h4c3.333 0 4.667-1.334 4.667-4.667V6c0-3.333-1.334-4.667-4.667-4.667H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.333 1.334 4.667 4.667 4.667z"
        stroke={props.color ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6.667A1.333 1.333 0 106 4a1.333 1.333 0 000 2.667zM1.78 12.633l3.287-2.206c.526-.354 1.286-.314 1.76.093l.22.193c.52.447 1.36.447 1.88 0l2.773-2.38c.52-.446 1.36-.446 1.88 0l1.087.934"
        stroke={props.color ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Gallery;
