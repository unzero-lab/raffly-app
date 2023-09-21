import styled, { css } from 'styled-components/native'
import { Octicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import theme from '@/theme'

export type ButtonIconTypeStyleProps = keyof typeof theme.COLORS
export type ButtonIconTypeProps = keyof typeof Octicons.glyphMap

type Props = {
  color: ButtonIconTypeStyleProps
  name: ButtonIconTypeProps
}

export const InputWithIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  height: 48px;
  padding-left: 16px;
  margin-bottom: 16px;
  width: 100%;
`

export const Container = styled(TextInput)`
  ${({ theme }) => css`
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  `}
  
`

export const Icon = styled(Octicons).attrs<Props>(({ theme, color, name }) => ({
  name: name,
  size: 24,
  marginRight: 8,
  color: theme.COLORS[color] ?? theme.COLORS.GRAY_300,
}))``
