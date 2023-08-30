import { ActivityIndicator } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Rubik_400Regular,
  Rubik_700Bold,
  Rubik_500Medium,
} from '@expo-google-fonts/rubik'

import theme from '@/theme'
import { Registeruser } from '@/screens/RegisterUser'

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_400Regular, Rubik_700Bold, Rubik_500Medium })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Registeruser /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
