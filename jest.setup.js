import 'jest-styled-components/native'
import '@testing-library/jest-dom/extend-expect'

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn()
  })
}))
