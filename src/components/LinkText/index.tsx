import theme from '@/theme'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { StyledText } from './styles'

export type LinkTextStyleProps = {
  fontFamily?: keyof typeof theme.FONT_FAMILY
  textAlign?: 'center' | 'left' | 'right'
  fontSize?: keyof typeof theme.FONT_SIZE
  color?: keyof typeof theme.COLORS
  underline?: boolean
} & TouchableOpacityProps

export function LinkText({
  fontFamily = 'MEDIUM',
  textAlign = 'center',
  color = 'GREEN_400',
  underline = false,
  fontSize = 'MD',
  children,
  ...rest
}: LinkTextStyleProps) {
  return (
    <TouchableOpacity {...rest}>
      <StyledText color={color} textAlign={textAlign} fontSize={fontSize} underline={underline}>
        {children}
      </StyledText>
    </TouchableOpacity>
  )
}
