import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle
} from 'react'
import { BiError } from 'react-icons/bi'
import { GiConfirmed, GiCancel } from 'react-icons/gi'

import {
  Container,
  Card,
  Information,
  Title,
  Description,
  Actions,
  Cancel,
  Confirm
} from './styles'

interface TypeInfoModal {
  title: string
  msg: string
}

interface Props {
  confirm: () => void
  cancel?: () => void
}

export interface ModalHandles {
  openModal: (title?: string, msg?: string) => void
  closeModal: () => void
  confirmOperation: () => void
}

const ConfirmationModal: React.ForwardRefRenderFunction<ModalHandles, Props> = (
  { confirm, cancel },
  ref
) => {
  const [visible, setVisible] = useState(false)
  const [infoModal, setInfoModal] = useState<TypeInfoModal>({
    title: 'Atenção',
    msg: 'Deseja mesmo executar esta operação ?'
  })

  const openModal = useCallback((title = '', msg = '') => {
    setInfoModal(info => {
      return {
        title: title !== '' ? title : info.title,
        msg: msg !== '' ? msg : info.msg
      }
    })
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
    if (cancel) {
      cancel()
    }
  }, [cancel])

  const confirmOperation = useCallback(() => {
    setVisible(false)
    confirm()
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
      confirmOperation
    }
  })

  if (!visible) {
    return null
  }

  return (
    <Container>
      <Card>
        <BiError size={30} />
        <Information>
          <Title>{infoModal.title}</Title>
          <Description>{infoModal.msg}</Description>

          <Actions>
            <Cancel type="button" onClick={closeModal}>
              <GiCancel size={20} />
              <p>Não</p>
            </Cancel>
            <Confirm type="button" onClick={confirmOperation}>
              <GiConfirmed size={20} /> <p>Sim</p>
            </Confirm>
          </Actions>
        </Information>
      </Card>
    </Container>
  )
}

export default forwardRef(ConfirmationModal)
