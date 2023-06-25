import React from 'react'

import { Button } from '@/components'
import { fireEvent, render } from '@/testUtils/ui/customRender'

describe('Button', () => {
  it('renders correctly with title', () => {
    const title = 'Submit'
    const { getByText } = render(<Button title={title} />)
    const buttonElement = getByText(title)
    expect(buttonElement).toBeDefined()
  })

  it('renders loading state when isLoading is true', () => {
    const title = 'Submit'
    const { getByTestId, queryByText } = render(
      <Button title={title} isLoading />
    )
    const loadElement = getByTestId('loading')

    expect(loadElement).toBeDefined()
    expect(queryByText(title)).toBeNull()
  })

  it('disables the button when isLoading is true', () => {
    const title = 'Submit'
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Button title={title} isLoading onPress={onPressMock} />
    )
    const buttonElement = getByTestId('button')
    fireEvent.press(buttonElement)
    expect(onPressMock).not.toHaveBeenCalled()
  })

  it('does not disable the button when isLoading is false', () => {
    const title = 'Submit'
    const onPressMock = jest.fn()
    const { getByText } = render(
      <Button title={title} isLoading={false} onPress={onPressMock} />
    )
    const buttonElement = getByText(title)

    fireEvent.press(buttonElement)
    expect(onPressMock).toHaveBeenCalled()
  })
})
