import { useState } from 'react'

import { BaseProps } from '@react-native-community/datetimepicker'

type UseDateTimePickerProps = {
  onDateSelected: (date: Date) => void
}

export const useDateTimePicker = (props: UseDateTimePickerProps) => {
  const { onDateSelected } = props

  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)

  const handleDateChange: BaseProps['onChange'] = (event, selectedDate) => {
    const currentDate = selectedDate ?? date
    setShowPicker(false)
    setDate(currentDate)
    onDateSelected(currentDate)
  }

  const showDateTimePicker = () => {
    setShowPicker(true)
  }

  return {
    date,
    showPicker,
    handleDateChange,
    showDateTimePicker
  }
}
