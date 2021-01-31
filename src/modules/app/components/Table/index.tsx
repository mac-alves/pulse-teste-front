/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Title } from '../../styles'
import {
  Navigation,
  TableFooter,
  Body,
  Header,
  Pages,
  Plus,
  Container
} from './styles'
import { usePerson } from '../../contexts/person'
import AppRoutes from '../../paths.routes'
import { Person } from '../../interfaces'
import TableItem from '../TableItem'

interface TableInfo {
  initialList: Person[]
  list: Person[]
  currentPage: number
  offset: number
  total: number
  limitRow: number
}

interface Props {
  limitRow?: number
  className?: string
}

const Table: React.FC<Props> = ({ limitRow = 4, className }) => {
  const { persons } = usePerson()

  const [table, setTable] = useState<TableInfo>({
    initialList: [],
    list: [],
    currentPage: 1,
    offset: 0,
    total: 0,
    limitRow: 6
  })

  const navigation = (nav: keyof { left: string; right: string }) => {
    if (nav === 'right') {
      setTable(info => {
        if (!(info.currentPage < info.total / info.limitRow)) {
          return { ...info }
        }

        const currentPage =
          info.currentPage <= info.total / info.limitRow
            ? info.currentPage + 1
            : info.currentPage
        const offset = info.offset + info.limitRow

        return {
          ...info,
          currentPage,
          list: [...info.initialList].splice(offset, info.limitRow),
          offset
        }
      })
    }

    if (nav === 'left') {
      setTable(info => {
        if (info.currentPage <= 1) {
          return { ...info }
        }

        const currentPage = info.currentPage > 1 ? info.currentPage - 1 : 1
        const offset = info.offset - info.limitRow

        return {
          ...info,
          currentPage,
          list: [...info.initialList].splice(offset, info.limitRow),
          offset
        }
      })
    }
  }

  useEffect(() => {
    setTable(() => {
      return {
        initialList: persons.length > 0 ? persons : [],
        list: persons.length > 0 ? [...persons].slice(0, limitRow) : [],
        currentPage: 1,
        offset: 0,
        total: persons.length,
        limitRow
      }
    })
  }, [persons])

  return (
    <Container className={className}>
      <Header>
        <div>
          <Plus to={AppRoutes.PERSON.create}>
            <AiOutlinePlus size={20} />
          </Plus>
          <Title>Pessoas Cadastradas</Title>
        </div>
        <Pages>
          {table.currentPage +
            '/' +
            (table.total % table.limitRow !== 0
              ? Math.trunc(table.total / table.limitRow) + 1
              : Math.trunc(table.total / table.limitRow))}
        </Pages>
      </Header>
      <Body>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Município</th>
            <th>Idade</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {table.list.map(item => <TableItem key={item.id} item={item}/>)}
          {table.list.length === 0 && (
            <tr>
              <td></td><td>Não há dados ainda.</td><td></td>
              <td></td><td></td><td></td><td></td>
            </tr>
          )}
        </tbody>
      </Body>
      <TableFooter>
        <p>Total: {table.initialList.length}</p>
        <Navigation>
          <button onClick={() => navigation('left')}>
            <FiChevronLeft />
          </button>
          <button onClick={() => navigation('right')}>
            <FiChevronRight />
          </button>
        </Navigation>
      </TableFooter>
    </Container>
  )
}

export default Table
