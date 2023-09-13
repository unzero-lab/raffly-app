import { Container, CheckboxButton, Label } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import theme from '@/theme'

type CheckBoxProps = {
  label?: string
  size?: number
}

export function CheckBox({ label = '', size = theme.FONT_SIZE.MD }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Container onPress={toggleCheckbox}>
      <CheckboxButton size={size}>
        {isChecked ? (
          <MaterialIcons name="check-box" size={size + 1} color={theme.COLORS.GREEN_400} />
        ) : (
          <MaterialIcons name="check-box-outline-blank" size={size} color={theme.COLORS.TEXT} />
        )}
      </CheckboxButton>
      <Label size={size - 2}>{label}</Label>
    </Container>
  )
}
