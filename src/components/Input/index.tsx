import { Container, Icon, InputWithIconContainer } from '@/components/Input/styles'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'

export type Props = TextInputProps & {
  icon?: string
}

export function Input({ icon = 'search', ...rest }: Props) {
  const { COLORS } = useTheme()

  // return <Container {...rest} placeholderTextColor={COLORS.GRAY_400} />

  return (
    <InputWithIconContainer>
      <Icon name={icon} size={20} color={COLORS.GRAY_400} />
      <Container {...rest} placeholderTextColor={COLORS.GRAY_400} />
    </InputWithIconContainer>
  )
}
