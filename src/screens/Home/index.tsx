import { Header } from '@/components/Header'
import { Container, Content } from './styles'
import { Text } from 'react-native'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Text>Home</Text>
      </Content>
    </Container>
  )
}
