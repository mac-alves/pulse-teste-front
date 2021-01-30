import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { Container, InputField, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, children, ...rest }) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <div className="icon">{children}</div>
      <InputField
        isIcon={!!children}
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        autoComplete="off"
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export default Input
