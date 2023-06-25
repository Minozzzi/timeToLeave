import {
  Route,
  TabView as TabViewComponent,
  TabViewProps as TabViewComponentProps
} from 'react-native-tab-view'

export type TabViewProps = TabViewComponentProps<Route>

export const TabView: React.FC<TabViewProps> = ({ ...rest }) => (
  <TabViewComponent {...rest} />
)
