import React from 'react'

import { Content, Image } from './styles'
import NotFoundImage from '../../../assets/images/not-found.svg'

const NotFound: React.FC = () => {
  return (
    <Content>
      <Image src={NotFoundImage} alt="Not Found" />
    </Content>
  )
}

export default NotFound
