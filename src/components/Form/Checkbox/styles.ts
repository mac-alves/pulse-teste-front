import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 2px;
  margin-bottom: 10px;
  background-color: transparent;
  font-size: 15px;
  transition: all 0.3s linear;

  input {
    display: none;
  }
`

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  p {
    flex-shrink: 0;
    padding: 5px 7px;
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`

export const Span = styled.span`
  width: 18px;
  height: 18px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
`

export const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.secondary};
  stroke-width: 6px;
  width: 100%;
  height: 100%;
`
