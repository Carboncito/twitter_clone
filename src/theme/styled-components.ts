import * as styledComponents from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider,
  useTheme,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  Partial<DefaultTheme>
>;

export { css, ThemeProvider, useTheme };
export default styled;
