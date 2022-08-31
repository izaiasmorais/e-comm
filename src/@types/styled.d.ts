import { lightTheme } from "../styles/theme/Theme";

type ThemeType = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
