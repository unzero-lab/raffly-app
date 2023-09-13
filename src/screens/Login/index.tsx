import {
  BetweenContent,
  BrandName,
  Container,
  HighlightText,
  RememberPassword,
} from '@/screens/Login/styles'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { LinkText } from '@/components/LinkText'
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

        <BetweenContent>
          <RememberPassword>Esqueceu a senha?</RememberPassword>

          <LinkText textAlign="right" style={{ flex: 1 }} color="TEXT" fontSize="SM">
            Lembre-me
          </LinkText>
        </BetweenContent>

        <Button label="Entrar" />
      </Container>
    </KeyboardAvoidingView>
  )
}
