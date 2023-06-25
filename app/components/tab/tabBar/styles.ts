import { TabBar } from 'react-native-tab-view'
import styled from 'styled-components'

export const TabBarComponent = styled(TabBar)`
  margin-bottom: 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`
