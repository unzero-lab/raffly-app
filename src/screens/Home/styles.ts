import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'
import { ScrollView } from 'react-native'
import theme from '@/theme'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.WHITE};
  `}
`

export const Content = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})``

export const ContentStyle = {
  flex: 1,
  backgroundColor: theme.COLORS.GRAY_100,
  paddingTop: 20,
  paddingRight: 25,
  paddingBottom: 0,
  paddingLeft: 25,
}
