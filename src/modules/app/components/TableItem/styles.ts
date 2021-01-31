import styled from 'styled-components'

export const Delete = styled.div`
  transition: 0.3s linear all;
`

export const ImageUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fffbfb;
  border: 1px solid #d9effc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.colors.placeholder};

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #d9effc;
    object-fit: contain;
  }
`
