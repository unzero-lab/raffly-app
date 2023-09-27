import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { ComplementaryRegistration } from '@/screens/ComplementaryRegistration'
import { Register } from '@/screens/Register'
import { Login } from '@/screens/Login'
import { Home } from '@/screens/Home'

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="complementary-registration" component={ComplementaryRegistration} />
    </Navigator>
  )
}
