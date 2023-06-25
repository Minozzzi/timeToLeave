import React, { ReactElement, FC } from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '@/theme'

const customRender = (ui: ReactElement) => {
  const Wrapper: FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  return render(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react-native'
export { customRender as render }
