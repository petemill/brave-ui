/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledContent,
  StyledImport,
  StyleButtonWrapper,
  StyledActionsWrapper,
  StyledDoneWrapper,
  GroupedButton,
  ActionButton
} from './style'
import Tabs from '../../../components/layout/tabs/index'
import TextArea from '../../../components/formControls/textarea/index'
import Modal from '../../../components/popupModals/modal/index'
import Button from '../../../components/buttonsIndicators/buttonPrimary'
import { getLocale } from '../../../helpers'

export type TabsType = 'backup' | 'restore'

export interface Props {
  recoveryKey: string
  activeTabId: TabsType
  onTabChange: (tab: TabsType) => void
  onClose: () => void
  onCopy: (key: string) => void
  onPrint: (key: string) => void
  onSaveFile: (key: string) => void
  onRestore: (key: string) => void
  onImport: () => void
  error?: React.ReactNode
  id?: string
}

/*
  TODO
  - add error flow
 */
export default class ModalBackupRestore extends React.PureComponent<Props, {}> {
  render () {
    const {
      id,
      recoveryKey,
      activeTabId,
      onClose,
      onTabChange,
      onCopy,
      onPrint,
      onSaveFile,
      onRestore,
      onImport,
      error
    } = this.props

    return (
      <Modal id={id} onClose={onClose} theme={{ maxWidth: '666px' }}>
        <StyledWrapper>
          <Tabs activeTabId={activeTabId} onChange={onTabChange}>
          <div id={`${id}-backup`} data-key={'backup'} data-title={getLocale('rewardsBackupText1')}>
            <StyledContent>
              {getLocale('rewardsBackupText2')}
            </StyledContent>
            <TextArea
              title={getLocale('recoveryKeys')}
              theme={{ maxWidth: '100%', minHeight: '112px' }}
              defaultValue={recoveryKey}
              disabled={true}
            />
            <StyleButtonWrapper>
              <GroupedButton
                text={getLocale('copy')}
                level={'secondary'}
                size={'small'}
                type={'subtle'}
                onClick={onCopy.bind(this, recoveryKey)}
              />
              <GroupedButton
                text={getLocale('print')}
                level={'secondary'}
                size={'small'}
                type={'subtle'}
                onClick={onPrint.bind(this, recoveryKey)}
              />
              <GroupedButton
                text={getLocale('saveAsFile')}
                level={'secondary'}
                size={'small'}
                type={'subtle'}
                onClick={onSaveFile.bind(this, recoveryKey)}
              />
            </StyleButtonWrapper>
            <StyledDoneWrapper>
              <Button
                text={getLocale('done')}
                level={'secondary'}
                size={'medium'}
                onClick={onClose}
              />
            </StyledDoneWrapper>
          </div>
          <div id={`${id}-restore`} data-key={'restore'} data-title={getLocale('rewardsRestoreText1')}>
            <StyledContent>
              {getLocale('rewardsRestoreText2')}
            </StyledContent>
            {
              error
              ? <div>TODO: {error}</div>
              : null
            }
            <TextArea
              title={<>
                {getLocale('rewardsRestoreText3')}<StyledImport onClick={onImport}>{getLocale('import')}</StyledImport>
              </>}
              theme={{ maxWidth: '100%', minHeight: '112px' }}
              defaultValue={''}
            />
            <StyledActionsWrapper>
              <ActionButton
                level={'secondary'}
                text={getLocale('cancel')}
                size={'medium'}
                type={'accent'}
                onClick={onClose}
              />
              <ActionButton
                level={'primary'}
                type={'accent'}
                text={getLocale('restore')}
                size={'medium'}
                onClick={onRestore.bind(this, recoveryKey)}
              />
            </StyledActionsWrapper>
          </div>
        </Tabs>
        </StyledWrapper>
      </Modal>
    )
  }
}
