import { useState } from 'react'

interface UseInputResult {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  reset: () => void
}

export const useInput = (initialValue: string): UseInputResult => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return {
    value,
    onChange,
    reset,
  }
}
