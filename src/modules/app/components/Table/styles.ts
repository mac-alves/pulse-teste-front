import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: calc(100% - 100px);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`

export const Plus = styled(Link)`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s linear;
  background: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  cursor: pointer;
  margin-left: 12px;

  &:hover {
    transform: scale(1.01);
    box-shadow: inset 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
  }
`

export const Pages = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
`

export const Body = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      th {
        text-align: left;
        font-size: 15px;
        height: 35px;
        color: ${props => props.theme.colors.secondary};

        &:first-child {
          width: 10%;
          text-align: center;
        }

        &:last-child {
          width: 10%;
          text-align: center;
        }
      }
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: rgba(255, 234, 234, 0.4);
      }

      td {
        font-size: 15px;
        height: 45px;

        &:first-child {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        &:last-child {
          text-align: center;
          color: ${props => props.theme.colors.secondary};
          display: flex;
          justify-content: space-around;
          align-items: center;

          & > * {
            cursor: pointer;
            transition: all 0.3s linear;

            &:hover {
              transform: scale(1.03);
            }
          }
        }
      }
    }
  }
`

export const TableFooter = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.div`
  display: flex;

  button {
    width: 30px;
    height: 30px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 25px;
    border: none;
    transition: ${props => props.theme.other.transition};
    color: white;

    &:hover {
      transform: scale(1.01);
      box-shadow: inset 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
    }

    &:focus {
      outline: 0;
    }
  }
`
