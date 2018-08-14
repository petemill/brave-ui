/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
import { ComponentType } from 'react'
import styled from '../../../theme'
import Button, { Props } from '../../../components/buttonsIndicators/buttonPrimary'

export const StyledWrapper = styled.div`
  margin-top: 33px;
` as any

export const StyledContent = styled.div`
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.63;
  color: #686978;
  margin-bottom: 39px;
` as any

export const StyledImport = styled.span`
  color: #4c54d2;
  cursor: pointer;
` as any

export const StyleButtonWrapper = styled.div`
  text-align: center;
  display: flex;
` as any

export const GroupedButton = styled(Button as ComponentType<Props>)`
  margin: 0 4px;
`

export const StyledDoneWrapper = styled.div`
  text-align: center;
  margin-top: 59px;
` as any

export const StyledActionsWrapper = styled.div`
  margin-top: 108px;
  text-align: center;
  display: flex;
` as any

export const ActionButton = styled(Button as ComponentType<Props>)`
  margin: 0 8px;
`
