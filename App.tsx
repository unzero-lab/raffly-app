import { ThemeProvider } from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { Register } from '@/screens/Register'
import { StatusBar } from 'react-native'
import { Login } from '@/screens/Login'
import theme from '@/theme'
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'
import { Home } from '@/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_400Regular, Rubik_700Bold, Rubik_500Medium })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
