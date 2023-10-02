import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 10px;
    padding: 18px 16px;
    margin-bottom: 20px;
  `};
`

export const ImageContainer = styled.View`
  width: 100%;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
`

export const Image = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 10px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    color: ${theme.COLORS.WHITE};
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding-top: 22%;
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_400};
    margin-top: 10px;
  `};
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
    margin-top: 8px;
  `};
`
