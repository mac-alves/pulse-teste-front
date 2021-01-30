import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Container, Span, Label, Icon } from './styles'
import { useField } from '@unform/core'

interface Props {
  name: string
  label: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Checkbox: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, defaultValue } = useField(name)
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheck = useCallback(() => {
    setChecked(lastChecked => !lastChecked)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <Label htmlFor={fieldName}>
        <Span>
          {checked && (
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          )}
        </Span>
        <p>{label}</p>
      </Label>

      <input
        ref={inputRef}
        id={fieldName}
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  )
}

export default Checkbox
