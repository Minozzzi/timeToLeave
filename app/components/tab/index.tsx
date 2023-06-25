import React from 'react'

import { Route, TabViewProps } from 'react-native-tab-view'

import { TabBar } from './tabBar'
import { TabBarItem } from './tabBarItem'
import { TabView } from './tabView'

export type TabProps = TabViewProps<Route>

export const Tab: React.FC<TabProps> = ({ ...rest }) => (
  <TabView
    {...rest}
    lazy
    renderTabBar={props => (
      <TabBar
        {...props}
        renderTabBarItem={propsTabBarItem => (
          <TabBarItem {...propsTabBarItem} />
        )}
      />
    )}
  />
)
