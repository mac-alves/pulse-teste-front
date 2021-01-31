import styled from 'styled-components'
import { DEVICE } from '../../../../shared/utils'

export const Delete = styled.div`
  transition: 0.3s linear all;

  @media ${DEVICE.mobileL} {
    height: 25px;
    margin-left: 10px;
  }
`

export const Edite = styled.div`
  @media ${DEVICE.mobileL} {
    height: 25px;
  }
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
