import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { StackNavigationProps } from '@/routes/app.routes'

export type StackProps = NativeStackNavigationProp<StackNavigationProps>

export const useAppNavigation = () => {
  const { navigate, goBack } = useNavigation<StackProps>()

  return { navigate, goBack }
}
