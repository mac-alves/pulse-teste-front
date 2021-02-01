import styled from 'styled-components'
import { DEVICE } from '../../utils'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${DEVICE.mobileL} {
    height: calc(100vh - 40px);
  }
`

export const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 400px;

  @media ${DEVICE.mobileL} {
    max-width: 300px;
  }
`
