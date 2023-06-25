import React from 'react'

import { Container, Form, Header, Title } from './styles'
import { FormData } from './types'
import { useNewClockPunch } from './useNewClockPunch'
import { Button, DateTimePicker, IconButton } from '@/components'
import { useHandleChangeFormData } from '@/hooks'
import { formatDate } from '@/utils/dates'

export const NewClockPunch: React.FC = () => {
  const { formData, setFormData, handleGoBack, handleCreate } =
    useNewClockPunch()
  const { handleChange } = useHandleChangeFormData<FormData>({
    formData,
    setFormData
  })

  return (
    <Container>
      <Header>
        <Title>Nova entrada</Title>
        <IconButton icon="ArrowLeft" onPress={handleGoBack} />
      </Header>

      <Form>
        <DateTimePicker
          mode="time"
          label="Hora de entrada"
          placeholder="Informe a hora de entrada"
          value={formatDate({
            date: formData.entrance,
            formatter: 'HH:mm'
          })}
          onDateSelected={handleChange('entrance')}
        />

        <DateTimePicker
          mode="time"
          label="Hora de saída"
          placeholder="Informe a hora de saída"
          value={formatDate({
            date: formData.exit,
            formatter: 'HH:mm'
          })}
          onDateSelected={handleChange('exit')}
        />
      </Form>

      <Button title="Salvar" onPress={handleCreate} />
    </Container>
  )
}
