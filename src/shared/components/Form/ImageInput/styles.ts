import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 5px dotted rgba(0, 125, 198, 0.4);
  border-radius: 10px;
  /* padding: 20px; */

  input {
    display: none;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &:hover {
    img {
      opacity: 0.5;
    }

    label {
      display: flex;
      animation: fade-in 0.5s;
    }
  }

  &:not(:hover) label.did-fade-in {
    display: flex;
    animation: fade-out 0.5s;
  }

  &.imgUser {
    border: none;
  }
`

export const Img = styled.img`
  max-width: 225px;
  max-height: 225px;
  width: auto;
  height: auto;
  z-index: 0;
  transition: all 0.3s linear;

  &.imgUser {
    border-radius: 20px;
    border: 5px solid rgba(0, 125, 198, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Label = styled.label`
  color: ${props => props.theme.colors.secondary};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;
`

export const Error = styled.span`
  position: absolute;
  top: 0;
  color: #f2c7a8;
`
