import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { CheckBox } from '@/components/CheckBox'
import { LinkText } from '@/components/LinkText'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import {
  ForgoutPassword,
  BetweenContent,
  HighlightText,
  BrandName,
  Container,
} from '@/screens/Login/styles'

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

        <BetweenContent>
          <ForgoutPassword>Esqueceu a senha?</ForgoutPassword>
          <CheckBox label="Lembrar-me" />
        </BetweenContent>

        <Button label="Entrar" />
      </Container>
    </KeyboardAvoidingView>
  )
}
