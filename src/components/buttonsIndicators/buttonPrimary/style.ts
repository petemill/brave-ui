/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css, ThemedStyledProps } from '../../../theme'
import { Props } from './index'

function largeMediumSmall (largeValue: any, mediumValue: any, smallValue: any) {
  return (p: Props) => p.size === 'large' ? largeValue : p.size === 'medium' ? mediumValue : smallValue
}

const getThemedCss = (p: ThemedStyledProps<Props>) => {
  let mainColor
  let hoverColor
  let activeColor
  if (p.disabled) {
    mainColor = hoverColor = activeColor = p.theme.color.disabled
  } else if (p.color === 'brand') {
    mainColor = p.theme.color.brandBrave
    hoverColor = p.theme.color.brandBraveInteracting
    activeColor = p.theme.color.brandBraveActive
  } else if (p.color === 'action') {
    mainColor = p.theme.color.brandBat
    hoverColor = p.theme.color.brandBatInteracting
    activeColor = p.theme.color.brandBatActive
  }
  return css`
    --button-main-color: ${mainColor};
    --button-main-color-hover: ${hoverColor};
    --button-main-color-active: ${activeColor};
  `
}

export const StyledButton = styled<Props, 'button'>('button')`
  ${getThemedCss}
  --webkit-appearance: none;
  box-sizing: content-box;
  border: none;
  outline: none;
  display: flex;
  flex-direction: ${p => p.icon && p.icon.position === 'right' ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  font-size: ${largeMediumSmall('14px', '13px', '11px')};
  border-radius: ${largeMediumSmall('24px', '20px', '16px')};
  min-width: ${largeMediumSmall('86px', '84px', '68px')};
  padding: ${largeMediumSmall('14px 15px', '11px 10px', '7px 10px')};
  min-height: 18px;
  color: #fff;
  background: var(--button-main-color);
  :hover:enabled {
    background: var(--button-main-color-hover);
  }
  :active:enabled {
    background: var(--button-main-color-active);
  }
` as any

export const StyledText = styled.div`
  text-align: center;
  box-sizing: border-box;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
` as any

export const StyledIcon = styled.div`
  --icon-size: ${largeMediumSmall('18px', '16px', '14px')};
  --icon-spacing: ${largeMediumSmall('6px', '6px', '6px')};
  display: block;
  line-height: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin: ${(p: Props) => {
    // no margin required if only 1 content item
    if (!p.text || !p.icon) return null
    // -4px is a universal 'fix' to make the icons appear more aligned
    // with the text.
    // Consider removing this if not all icons are looking great with it,
    // and designers can address in icons, or accept the alignment.
    return p.icon.position === 'left' ? '0 var(--icon-spacing) 0 -4px' : '0 -4px 0 var(--icon-spacing)'
  }};
` as any
