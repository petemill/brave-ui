import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  color: {
    brandBrave: string,
    brandBraveInteracting: string,
    brandBraveActive: string,
    brandBraveLight: string,
    brandBat: string,
    brandBatInteracting: string,
    brandBatActive: string,
    disabled: string,
    primaryBackground: string,
    secondaryBackground: string,
    basicControl: string,
    basicControlInteracting: string,
    basicControlActive: string
    warn: string,
    warnInteracting: string,
    warnActive: string,
    subtle: string,
    subtleInteracting: string,
    subtleActive: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
