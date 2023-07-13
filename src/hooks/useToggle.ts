import { useState } from 'react'

type UseToggleResult = [boolean, () => void]

export const useToggle = (initialValue: boolean = false): UseToggleResult => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = (): void => {
    setValue((prevValue) => !prevValue)
  }

  return [value, toggleValue]
}
