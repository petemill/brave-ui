import * as styledComponents from 'styled-components'
// @ts-ignore: Needed for ThemeProvider
import * as React from 'react'
import IThemeProps, { BraveThemedStyledProps as ThemedStyledProps } from './theme-interface'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  // React import is needed for following line!
  ThemeProvider
  // tslint disabled because:
  // - Incorrectly complains about unused assertion, but does not detect private member differences
  //   see: https://github.com/palantir/tslint/issues/3505
  //   It's possibly due to the rule upstream in tslint-config-standard
  // tslint:disable-next-line
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeProps>

export default styled
export { css, injectGlobal, keyframes, ThemeProvider, ThemedStyledProps }
