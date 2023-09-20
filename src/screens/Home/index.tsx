import { Header } from '@/components/Header'
import { Container, Content } from './styles'
import { Text } from 'react-native'
import { Navbar } from '@/components/Navbar'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Text>Home</Text>
      </Content>
      <Navbar />
    </Container>
  )
}
