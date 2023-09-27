import { TouchableOpacity } from 'react-native'
import { Container, ListIcon, PlusIcon, ResultIcon } from './styles'

export function Navbar() {
  return (
    <Container>
      <TouchableOpacity>
        <ResultIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <PlusIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <ListIcon />
      </TouchableOpacity>
    </Container>
  )
}
