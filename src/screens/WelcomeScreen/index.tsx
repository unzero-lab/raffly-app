import { FullScreenImage } from '@components/FullImage'
import { Container } from '@screens/WelcomeScreen/style'

export function WelcomeScreen() {
  return (
    <Container>
      <FullScreenImage source={require('@assets/background/welcome.png')} />
    </Container>
  )
}
