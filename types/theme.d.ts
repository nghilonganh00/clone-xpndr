import { ColorType, ComponentThemeType } from "@/theme";
import { type Theme as NativeTheme } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface Theme extends NativeTheme {
      color: NativeTheme["colors"] & ColorType;
      components: ComponentThemeType;
    }
  }
}
