/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Props } from './index'

function largeMediumSmall (largeValue: any, mediumValue: any, smallValue: any) {
  return (p: Props) => p.size === 'large' ? largeValue : p.size === 'medium' ? mediumValue : smallValue
}

const getColor = (p: Props) => {
  if (p.disabled) {
    return '223, 223, 232'
  }
  switch (p.color) {
    case 'brand':
      return '251, 84, 43'
    case 'action':
      return '76, 84, 210'
  }
}

export const StyledButton = styled.button`
  --button-main-color: ${(p: Props) => getColor(p)};
  --webkit-appearance: none;
  box-sizing: content-box;
  border: none;
  outline: none;
  display: flex;
  flex-direction: ${(p: Props) => p.icon && p.icon.position === 'right' ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  cursor: ${(p: Props) => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  font-size: ${largeMediumSmall('14px', '13px', '11px')};
  border-radius: ${largeMediumSmall('24px', '20px', '16px')};
  min-width: ${largeMediumSmall('86px', '84px', '68px')};
  padding: ${largeMediumSmall('14px 15px', '11px 10px', '7px 10px')};
  min-height: 18px;
  color: #fff;
  background: rgba(var(--button-main-color), 0.9);
  :hover:enabled {
    background: rgba(var(--button-main-color), 1);
  }
  :active:enabled {
    background: rgba(var(--button-main-color), 0.4);
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
  --icon-spacing: ${largeMediumSmall('6px', '6px', '6px')}
  display: block;
  line-height: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin: ${(p: Props) => {
    if (!p.text || !p.icon) return null
    return p.icon.position === 'left' ? '0 var(--icon-spacing) 0 -4px' : '0 -4px 0 var(--icon-spacing)'
  }};
` as any
