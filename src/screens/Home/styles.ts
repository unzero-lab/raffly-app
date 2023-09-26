import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 25px 0 25px;
`
