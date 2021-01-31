import React, { useRef, useEffect } from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'

import { Container, Content, Error } from './styles'

interface Props extends SelectProps<OptionTypeBase> {
  name: string
  flex?: number
}

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'white',
    border: '0px',
    color: '#007DC6'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#007DC6'
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: 'rgba(0,125,198,0.6)'
  })
}

const Select: React.FC<Props> = ({ name, flex, ...rest }) => {
  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value)
        }
        if (!ref.state.value) {
          return ''
        }

        return ref.state.value.value
      }
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <Container flex={flex} className={error ? 'error' : ''}>
      <Content className={error ? 'error' : ''}>
        <ReactSelect
          styles={colourStyles}
          defaultValue={defaultValue}
          ref={selectRef}
          classNamePrefix="react-select"
          {...rest}
        />
      </Content>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
export default Select
