import 'react-native-get-random-values'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { App } from './main'

AppRegistry.registerComponent(appName, () => App)
