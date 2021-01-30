/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react'
import { useField } from '@unform/core'
import { Container, InputField, Error } from './styles'
import { MdVisibility } from 'react-icons/md'
import { AiFillEyeInvisible } from 'react-icons/ai'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const SecurityInput: React.FC<InputProps> = ({ name, children, ...rest }) => {
  const inputRef = useRef(null)
  const [visible, setVisible] = useState(false)
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
      <button
        type="button"
        className="visible"
        onClick={() => { console.log('aqui'); setVisible(visible => !visible) }}
      >
        {visible ? <AiFillEyeInvisible size={23} /> : <MdVisibility size={23} />}
      </button>
      <InputField
        className={error ? 'error' : ''}
        isIcon={!!children}
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        autoComplete="off"
        type={visible ? 'text' : 'password'}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export default SecurityInput
