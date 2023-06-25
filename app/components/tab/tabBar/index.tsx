import {
  Route,
  TabBarProps as TabBarComponentProps
} from 'react-native-tab-view'

import { TabBarComponent } from './styles'

type TabBarProps = TabBarComponentProps<Route>
export const TabBar: React.FC<TabBarProps> = ({ ...rest }) => (
  <TabBarComponent
    {...rest}
    indicatorStyle={{
      height: 0,
      width: 0,
      opacity: 0
    }}
  />
)
