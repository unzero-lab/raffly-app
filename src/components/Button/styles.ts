import styled, { css } from 'styled-components/native'
import theme from '@/theme'

export type ButtonStyleProps = {
  color?: keyof typeof theme.COLORS
}


export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  ${({ theme, color = 'GREEN_400'}) => css`
    background-color: ${theme.COLORS[color]};
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 0px 24px;
    height: 48px;
    width: 100%;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`
