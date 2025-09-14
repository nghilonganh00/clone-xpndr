import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
function RadiusCamera(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M4.507 14.667h6.986c1.84 0 2.574-1.127 2.66-2.5L14.5 6.66A2.502 2.502 0 0012 4c-.407 0-.78-.233-.967-.593l-.48-.967c-.306-.607-1.106-1.107-1.786-1.107H7.24c-.687 0-1.487.5-1.793 1.107l-.48.967C4.78 3.767 4.407 4 4 4a2.502 2.502 0 00-2.5 2.66l.347 5.507c.08 1.373.82 2.5 2.66 2.5zM7 5.333h2"
        stroke={props.color ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 12a2.17 2.17 0 002.167-2.167A2.17 2.17 0 008 7.667a2.17 2.17 0 00-2.167 2.166A2.17 2.17 0 008 12z"
        stroke={props.color ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default RadiusCamera;
