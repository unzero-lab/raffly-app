import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { CheckBox } from '@/components/CheckBox'
import { LinkText } from '@/components/LinkText'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import theme from '@/theme'
import {
  ForgoutPassword,
  BetweenContent,
  HighlightText,
  BottomText,
  BrandName,
  Container,
} from '@/screens/Login/styles'
import { useNavigation } from '@react-navigation/native'

export function Login() {
  const navigation = useNavigation()
  function handleNavigateToRegister() {
    navigation.navigate('register')
  }

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
      <BottomText>
        <Text style={{ fontSize: theme.FONT_SIZE.MD }}>Ainda não tem uma conta? </Text>
        <LinkText onPress={handleNavigateToRegister}>Cadastre-se</LinkText>
      </BottomText>
    </KeyboardAvoidingView>
  )
}
