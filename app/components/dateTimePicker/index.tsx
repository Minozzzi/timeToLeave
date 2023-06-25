import React from 'react'

import DateTimePickerComponent, {
  AndroidNativeProps
} from '@react-native-community/datetimepicker'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'styled-components'

import { useDateTimePicker } from './useDateTimePicker'
import { Input } from '../input'

type DateTimePickerProps = {
  mode: AndroidNativeProps['mode']
  label: string
  value: string
  placeholder?: string
  onDateSelected: (date: Date) => void
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  mode = 'time',
  label,
  value,
  placeholder,
  onDateSelected
}) => {
  const theme = useTheme()
  const { date, showPicker, handleDateChange, showDateTimePicker } =
    useDateTimePicker({
      onDateSelected
    })

  return (
    <View>
      <TouchableOpacity onPress={showDateTimePicker}>
        <Text
          style={{
            color: theme.COLORS.TEXT
          }}
        >
          {label}
        </Text>
        <Input
          value={value}
          placeholder={placeholder}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePickerComponent
          value={date}
          mode={mode}
          is24Hour
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  )
}
