/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  StyledText,
  StyledIcon
} from './style'

export interface Props {
  text: string
  size?: Size
  type?: Type,
  brand?: Brand,
  level?: Level
  onClick: () => void
  id?: string
  disabled?: boolean
  icon?: {image: React.ReactNode, position: 'left' | 'right'},
  className?: string
}

export type Level = 'primary' | 'secondary' | 'tertiary'
export type Type = 'basic' | 'accent' | 'warn' | 'subtle'
export type Brand = 'brave' | 'rewards'

export type Size = 'call-to-action' | 'large' | 'medium' | 'small'

export default class ThemedButton extends React.PureComponent<Props, {}> {
  static defaultProps = {
    brand: 'brave',
    size: 'medium',
    type: 'basic',
    level: 'primary'
  }

  getButtonComponent () {
    switch (this.props.level) {
      case 'primary':
        return PrimaryButton
      case 'secondary':
        return SecondaryButton
      case 'tertiary':
        return TertiaryButton
    }
    throw new Error(`Unknown component level: ${this.props.level || '[undefined]'}`)
  }

  render () {
    const { icon, text } = this.props
    let ButtonComponent = this.getButtonComponent()

    return (
      <ButtonComponent {...this.props}>
        {
          text
          ? <StyledText {...this.props}>
              {text}
            </StyledText>
          : null
        }
        {
          icon && icon.image
          ? <StyledIcon {...this.props}>
              {icon.image}
            </StyledIcon>
          : null
        }
      </ButtonComponent>
    )
  }
}
