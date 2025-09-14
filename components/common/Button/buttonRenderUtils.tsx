import type { ImageProps } from "react-native";

interface SvgIconProps {
  size?: number;
  fill?: string;
  width?: number;
  height?: number;
  secondFill?: string;
}

export type IconProps = ImageProps & SvgIconProps;
