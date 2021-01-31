import styled from 'styled-components'

interface PropsNotification {
  type: keyof { error: string; success: string; info: string }
}

export const Notification = styled.span<PropsNotification>`
  width: 100%;
  height: 30px;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.type === 'error'
      ? props.theme.colors.primary
      : props.type === 'success'
      ? '#1dbf69'
      : '#bfbe1d'};
  margin-bottom: 10px;

  p {
    line-height: 20px;
    margin-left: 5px;
  }
`
