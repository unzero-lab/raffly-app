import { ThemeProvider } from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { StatusBar } from 'react-native'
import { Routes } from '@/routes'
import theme from '@/theme'
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_400Regular, Rubik_700Bold, Rubik_500Medium })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.COLORS.GREEN_400} />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
