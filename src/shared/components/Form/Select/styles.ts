import styled from 'styled-components'

interface PropsContainer {
  flex?: number
}

export const Container = styled.div<PropsContainer>`
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  flex: ${props => (props.flex ? props.flex : 1)};

  &.error {
    margin-bottom: 5px;
  }
`

export const Content = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  max-height: 45px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.placeholder};
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s linear;
  border-radius: 7px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &.error {
    border: 2px solid ${props => props.theme.colors.primary};
  }
`

export const Error = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 13px;
`
