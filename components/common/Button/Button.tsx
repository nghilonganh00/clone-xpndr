import { GestureResponderEvent, Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { IconProps } from "./buttonRenderUtils";
import { ButtonVariant } from "./types";
import useButtonBehavior from "./useButtonBehavior";

export interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  subtext?: string;
  disabled?: boolean;
  loading?: boolean;
  mini?: boolean;
  size?: "small" | "medium" | "default";
  rounded?: boolean;
  elevated?: boolean;
  icon?: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
  iconAfter?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  subtextStyle?: StyleProp<TextStyle>;
  children?: React.ReactElement<unknown>;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Button({
  text,
  variant = "primary",
  subtext,
  disabled,
  loading,
  mini,
  size = "default",
  rounded,
  elevated,
  icon,
  iconAfter,
  onPress: onPressAction,
  onPressIn: onPressInAction,
  onPressOut: onPressOutAction,
  onLongPress,
  style,
  contentStyle,
  textStyle,
  subtextStyle,
  children,
}: ButtonProps) {
  const { onPress, onPressIn, onPressOut, buttonAnimatedStyle, textColor, loadingColor } = useButtonBehavior({
    loading,
    elevated,
    disabled,
    variant,
    onPressAction,
    onPressInAction,
    onPressOutAction,
  });
}
