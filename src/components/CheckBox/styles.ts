import styled from 'styled-components/native'
import { css } from 'styled-components'

type CheckBoxProps = {
  size?: number
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const CheckboxButton = styled.View<CheckBoxProps>`
  ${({ theme, size }) => css`
    margin-right: 8px;
    width: ${size}px;
    height: ${size}px
  `}
`

export const Label = styled.Text<CheckBoxProps>`
  ${({ theme, size }) => css`
    font-size: ${size}px;
  `}
`
