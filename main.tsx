import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import { RealmProvider } from '@/models'
import { Routes } from '@/routes'
import theme from '@/theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <RealmProvider>
      <Routes />
      <Toast />
    </RealmProvider>
  </ThemeProvider>
)
