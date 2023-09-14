import { HighlightText, BrandName, Container } from '@/screens/Register/styles'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export function Register() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <BrandName>Raffly</BrandName>
        <HighlightText>Crie seu cadastro</HighlightText>

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

        <Button label="Cadastrar" />
      </Container>
    </KeyboardAvoidingView>
  )
}
