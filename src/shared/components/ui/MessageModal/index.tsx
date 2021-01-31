import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle
} from 'react'
import { GiConfirmed } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BiError } from 'react-icons/bi'
import { VscError } from 'react-icons/vsc'

import {
  Container,
  Card,
  Information,
  Title,
  Description,
  Action
} from './styles'

interface TypeModal {
  error: string
  success: string
  info: string
}

interface TypeInfoModal {
  type: keyof TypeModal
  title: string
  msg: string
}

interface Props {
  operationClose: () => void
}

export interface ModalHandles {
  openModal: (type?: keyof TypeModal, title?: string, msg?: string) => void
  closeModal: () => void
}

const MessageModal: React.ForwardRefRenderFunction<ModalHandles, Props> = (
  { operationClose },
  ref
) => {
  const [visible, setVisible] = useState(true)
  const [infoModal, setInfoModal] = useState<TypeInfoModal>({
    type: 'success',
    title: 'Sucesso',
    msg: 'Operação Realizado com sucesso'
  })

  const openModal = useCallback(
    (type: keyof TypeModal = 'success', title = '', msg = '') => {
      setInfoModal(info => {
        return {
          type,
          title: title !== '' ? title : info.title,
          msg: msg !== '' ? msg : info.msg
        }
      })
      setVisible(true)
    },
    []
  )

  const closeModal = useCallback(() => {
    setVisible(false)
    if (infoModal.type !== 'error') {
      operationClose()
    }
  }, [infoModal])

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal
    }
  })

  if (!visible) {
    return null
  }

  return (
    <Container onClick={closeModal}>
      <Card type={infoModal.type}>
        {infoModal.type === 'error' && <VscError size={30} />}
        {infoModal.type === 'info' && <BiError size={30} />}
        {infoModal.type === 'success' && <GiConfirmed size={30} />}
        <Information>
          <Title>{infoModal.title}</Title>
          <Description>{infoModal.msg}</Description>
        </Information>
        <Action type="button" onClick={closeModal}>
          <AiFillCloseCircle size={30} />
        </Action>
      </Card>
    </Container>
  )
}

export default forwardRef(MessageModal)
