import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: center;
  align-items: center;
  padding: 43px;
`

export const BrandName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 48px;
    color: ${theme.COLORS.GREEN_400};
    text-align: center;
    margin-bottom: 24px;
  `}
`

export const HighlightText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.TEXT};
    text-align: center;
    margin-bottom: 30px;
  `}
`