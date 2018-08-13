import colors from './palette'
import ITheme from './theme-interface'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  color: {
    brandBrave: colors.orange400,
    brandBraveInteracting: colors.orange500,
    brandBraveActive: colors.orange200,
    brandBraveLight: colors.orange000,
    brandBat: colors.blurple400,
    brandBatInteracting: colors.blurple500,
    brandBatActive: colors.blurple200,
    disabled: colors.grey300,
    primaryBackground: colors.white,
    secondaryBackground: colors.grey400,
    basicControl: colors.grey900,
    basicControlInteracting: colors.black,
    basicControlActive: colors.grey700,
    warn: colors.red500,
    warnInteracting: colors.red600,
    warnActive: colors.red300,
    subtle: colors.grey350,
    subtleInteracting: colors.grey400,
    subtleActive: colors.grey200
  }
}

export default theme
