import { Input } from '@/components/Input'
import { BrandName, Container, HighlightText } from '@/screens/Login/styles'

export function Login() {
  return (
    <Container>
      <BrandName>Raffly</BrandName>
      <HighlightText>Faça Seu Login</HighlightText>
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        icon="mail"
      />
      <Input
        placeholder="Password"
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
        icon="lock"
      />
    </Container>
  )
}
