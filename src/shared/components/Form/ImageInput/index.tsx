/* eslint-disable prettier/prettier */
import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState
} from 'react'
import { Container, Img, Label, Error } from './styles'
import { useField } from '@unform/core'
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

import UserImg from '../../../../assets/images/upload.svg'

interface Props {
  name: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const ImageInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, error } = useField(name)
  const [preview, setPreview] = useState<any>(UserImg)
  const [classAnimate, setClassAnimate] = useState('')

  function animateImg() {
    if (classAnimate === '') {
      setClassAnimate('did-fade-in')
    } else {
      setClassAnimate('')
    }
  }

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files?.[0]

      if (!file) {
        setPreview(null)
      }

      const previewURL = URL.createObjectURL(file)
      setPreview(previewURL)
    }
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = ''
        setPreview(null)
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value)
      }
    })
  }, [fieldName, registerField])

  return (
    <Container
      onAnimationEnd={animateImg}
      className={preview !== UserImg ? 'imgUser' : ''}>
      <Img
        src={preview}
        alt="Preview"
        className={preview !== UserImg ? 'imgUser' : ''}
      />
      <Label htmlFor="imgInput" className={classAnimate}>
        {preview === UserImg
          ? <BsPlusSquareFill size={40} />
          : <FaEdit size={40} />
        }
      </Label>
      {error && preview === UserImg && <Error>{error}</Error>}
      <input
        type="file"
        id="imgInput"
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
      />
    </Container>
  )
}
export default ImageInput
