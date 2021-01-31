/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import { IoMdTrash } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'
import { TiInfoOutline } from 'react-icons/ti'
import { AiFillEdit } from 'react-icons/ai'

import { Delete, ImageUser } from './styles'
import { useHistory } from 'react-router-dom'
import { usePerson } from '../../contexts/person'
import { Person } from '../../interfaces'
import AppRoutes from '../../paths.routes'

interface Props {
  item: Person
}

const TableItem: React.FC<Props> = ({ item }) => {
  const timeConfirm = useRef<any>({ value: 0 })
  const { deletePerson } = usePerson()
  const history = useHistory()
  const [confirm, setConfirm] = useState(false)

  const setTimeRemoveConfirm = () => {
    const time = setTimeout(() => {
      clearTimeout(timeConfirm.current.value)
      setConfirm(false)
    }, 1500)

    timeConfirm.current.value = time
  }

  const handleDelete = (id: string | undefined) => {
    if (id) {
      if (confirm) {
        deletePerson(id)
      }

      setConfirm(true)
      setTimeRemoveConfirm()
    }
  }

  useEffect(() => {
    return () => {
      setConfirm(false)

      if (timeConfirm.current) {
        clearTimeout(timeConfirm.current.value)
      }
    }
  }, [timeConfirm.current])

  return (
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
        <AiFillEdit
          onClick={() => history.push(`${AppRoutes.PERSON.initial}/${item.id}`)}
          size={20}
        />
        <Delete
          title={confirm ? 'Confirme' : 'Excluir Pessoa'}
          onClick={() => handleDelete(item.id)}
        >
          {confirm ? <TiInfoOutline size={20} /> : <IoMdTrash size={20} />}
        </Delete>
      </td>
    </tr>
  )
}

export default TableItem
