/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledButton, StyledText, StyledIcon } from './style'

export interface Props {
  text: string
  size: Size
  color: Color
  onClick: () => void
  id?: string
  disabled?: boolean
  icon?: {image: React.ReactNode, position: 'left' | 'right'}
}

export type Color = 'brand' | 'action'
export type Size = 'large' | 'medium' | 'small'

export default class ButtonPrimary extends React.PureComponent<Props, {}> {
  render () {
    const { icon, text } = this.props
    return (
      <StyledButton disabled={this.props.disabled} {...this.props}>
        {
          text
          ? <StyledText>
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
      </StyledButton>
    )
  }
}
