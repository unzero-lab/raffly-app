import styled, { css } from 'styled-components/native'
import theme from '@/theme'

export type StyledTextProps = {
  color?: keyof typeof theme.COLORS
  fontSize?: keyof typeof theme.FONT_SIZE
  textAlign?: string
  underline?: boolean
}

export const StyledText = styled.Text<StyledTextProps>`
  ${({ theme, color, fontSize, textAlign, underline }) => {
    const selectedColor = theme.COLORS[color || 'TEXT']
    return css`
      color: ${selectedColor};
      font-size: ${fontSize ? theme.FONT_SIZE[fontSize] : theme.FONT_SIZE.MD}px;
      text-align: ${textAlign || 'left'};
      text-decoration: ${underline ? `underline ${selectedColor}` : 'none'};
    `
  }}
`
