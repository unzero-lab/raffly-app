import { ButtonStyleProps, Container, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = {
  label: string
} & ButtonStyleProps &
  TouchableOpacityProps

export function Button({ label, color = 'GREEN_400', ...rest }: ButtonProps) {
  return (
    <Container color={color} {...rest}>
      <Text>{label}</Text>
    </Container>
  )
}
