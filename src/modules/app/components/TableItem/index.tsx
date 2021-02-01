/* eslint-disable prettier/prettier */
import React, { useCallback, useRef } from 'react'
import { IoMdTrash } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'

import { Delete, Edite, ImageUser } from './styles'
import { useHistory } from 'react-router-dom'
import { usePerson } from '../../contexts/person'
import { Person } from '../../interfaces'
import AppRoutes from '../../paths.routes'
import ConfirmationModal, {
  ModalHandles
} from '../../../../shared/components/ui/ConfirmationModal'

interface Props {
  item: Person
}

const TableItem: React.FC<Props> = ({ item }) => {
  const modalRef = useRef<ModalHandles>(null)
  const { deletePerson } = usePerson()
  const history = useHistory()

  const handleDelete = useCallback((id: string | undefined) => {
    if (id) {
      deletePerson(id)
    }
  }, [])

  const selectToDelete = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <>
      <tr>
        <td>
          <ImageUser>
            {item.img && typeof item.img === 'string'
              ? <img src={item.img} alt="User" />
              : <FaUserAlt size={20} />
            }
          </ImageUser>
        </td>
        <td>{item.name}</td>
        <td>{item.city}</td>
        <td>{item.age}</td>
        <td>{item.role}</td>
        <td>
          <Edite >
            <AiFillEdit
              onClick={() => history.push(
                `${AppRoutes.PERSON.initial}/${item.id}`
              )}
              size={20}
            />
          </Edite>
          <Delete onClick={selectToDelete}>
            <IoMdTrash size={20} />
          </Delete>
        </td>
      </tr>
      <ConfirmationModal
        cancel={() => history.push(AppRoutes.HOME)}
        confirm={() => handleDelete(item.id)}
        ref={modalRef}
      />
    </>
  )
}

export default TableItem
