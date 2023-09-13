import { BrandName, Container, HighlightText } from '@/screens/Login/styles'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export function Login() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <BrandName>Raffly</BrandName>
        <HighlightText>Faça Seu Login</HighlightText>
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          autoCorrect={false}
          icon="mail"
        />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          icon="lock"
        />
        <Button label="Entrar" />
      </Container>
    </KeyboardAvoidingView>
  )
}
