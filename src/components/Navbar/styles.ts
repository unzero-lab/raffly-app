import styled, { css } from 'styled-components/native'
import { AntDesign, Octicons } from '@expo/vector-icons'

export type IconProps = {
  focused: boolean
}

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    height: 80px;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly
    align-items: center;
  `}
`
export const ResultIcon = styled(Octicons).attrs<IconProps>(({ theme, focused }) => ({
  name: 'checklist',
  color: focused ? theme.COLORS.GREEN_400 : theme.COLORS.TEXT,
  size: 24,
}))``

export const PlusIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: 'plussquare',
  color: theme.COLORS.GREEN_400,
  size: 32,
}))``

export const ListIcon = styled(Octicons).attrs<IconProps>(({ theme, focused }) => ({
  name: 'list-unordered',
  color: focused ? theme.COLORS.GREEN_400 : theme.COLORS.TEXT,
  size: 24,
}))``
