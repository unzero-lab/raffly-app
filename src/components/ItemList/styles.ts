import styled, { css } from 'styled-components/native'

export const ItemContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    height: 100px;
    margin-bottom: 10px;
  `}
`

export const ItemImage = styled.Image`
  ${({ theme }) => css`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    margin-right: 15px;
  `}
`

export const ItemInfo = styled.View`
  ${({ theme }) => css`
    padding: 10px;
  `}
`

export const TextContainer = styled.View`
  ${({ theme }) => css`
    align-items: start;
    justify-content: start;
    margin-bottom: 10px;
    padding-top: 5px;
  `}
`

export const ItemTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 6px;
  `}
`

export const ItemDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GREEN_400};
    margin-bottom: 10px;
  `}
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    align-self: flex-start;
    margin-bottom: 20px;
  `}
`
