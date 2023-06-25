import {
  Route,
  TabBarItem as TabBarItemComponent,
  TabBarItemProps as TabBarItemContainerProps
} from 'react-native-tab-view'

import { TabBarItemContainer, TabBarItemText } from './styles'

export type TabBarItemProps = TabBarItemContainerProps<Route>

export const TabBarItem: React.FC<TabBarItemProps> = ({ ...rest }) => (
  <TabBarItemComponent
    {...rest}
    renderLabel={({ focused, route }) => (
      <TabBarItemContainer>
        <TabBarItemText active={focused}>{route.title}</TabBarItemText>
      </TabBarItemContainer>
    )}
  />
)
