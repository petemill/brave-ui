/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  font-family: Poppins, sans-serif;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: hidden;
  width: 100%;
  padding: 0 52px 20px;
  border-radius: 6px;
  height: 100%;
` as any

export const StyledHeader = styled.div`
  text-align: center;
  width: 100%;
  margin: 59px 0;
` as any

export const StyledTitle = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fb542b;
` as any

export const StyledClose = styled.div`
  top: 22px;
  right: 22px;
  position: absolute;
` as any

export const StyledText = styled.div`
  width: 100%;
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.63;
  text-align: center;
  color: #4b4c5c;
` as any
