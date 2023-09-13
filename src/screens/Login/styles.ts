import { LinkText, LinkTextStyleProps } from '@/components/LinkText'
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

export const BetweenContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 42px;
`

export const ForgoutPassword = styled(LinkText).attrs({
  color: 'TEXT',
  textAlign: 'left',
  underline: true,
  fontSize: 'SM',
} as LinkTextStyleProps)`
  flex: 1;
`

export const BottomText = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    justify-content: center;
    align-items: center;
    padding: 43px;
  `}
`
