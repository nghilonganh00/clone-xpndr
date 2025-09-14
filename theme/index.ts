import { DefaultTheme } from "@react-navigation/native";
import button from "./button";
import { colors } from "./colors";

export const lightColors = {
  primary: colors.limeGreenLight,
  primaryVariant: colors.limeGreenLight,
  primaryVariant2: colors.limeGreenDark,
  primaryVariant3: colors.orange[5],
  secondary: colors.darkGreen[100],
  secondaryVariant: colors.darkGreen[50],

  // background
  background: colors.white,
  secondaryBackground: colors.grey[10],
  surface: colors.grey[50],
  error: colors.red,
  divider: colors.grayScale[10],
  tertiary: colors.grey[20],
  tertiaryHighlight: colors.grey[100],

  // border
  border: colors.grayScale[20],
  inputBorder: colors.grayScale[20],

  // text
  text: colors.grayScale[100],
  textTab: colors.grayScale[100],
  textSuperSecondary: colors.grayScale[70],
  textSecondary: colors.grayScale[50],
  textTertiary: colors.grayScale[30],
  textDisabled: colors.grayScale[10],
  textBackground: colors.grayScale[4],
  onPrimary: colors.white,
  onSecondary: colors.white,
  onSurface: colors.darkGreen[100],
  onBackground: colors.darkGreen[100],
  onError: colors.white,
  placeholder: colors.greyDarker,
  borderLight: colors.grayScale[20],

  // UI Components
  searchBackground: colors.grayScale[10], // Cho search input background
  cardBackground: colors.white,
  searchCardbackground: colors.white,
  buttonSecondary: colors.grayScale[20],

  bottomTab: colors.grayScale[40],
  activeBottomTab: colors.limeGreen,
  online: colors.lightGreen[50],

  disabledCalendarDay: colors.grayScale[30],
  borderCalendarDay: colors.grayScale[10],
  activeCalendarDay: colors.lightGreen[5],
  selectedCalendarDay: colors.lightGreen[30],
  backgroundCalendarDay: colors.white,
  overlayBackground: colors.blackOverlay,

  attachButtonIcon: colors.grayScale[100],
  attachButtonBg: colors.inputAttachButtonLight,
  sendButtonBg: colors.inputSendButtonLight,
  chatBubbleSender: colors.limeGreenLight,
  chatBubbleReceiver: colors.limeGreenSuperLight,
  chatTextSender: colors.limeGreenLight,
  chatTextReceiver: colors.limeGreenSuperLight,
  replyBorder: colors.black,
  replyBackground: colors.white,

  // insert the colors as pelette
  palette: colors,
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightColors,
  },
  components: {
    button: button(lightColors),
  },
};

export type ColorType = typeof lightColors;
export type ComponentThemeType = typeof lightTheme.components;
