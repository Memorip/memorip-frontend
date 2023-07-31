import React from 'react'
import type { ComponentProps } from 'react'

import clsx from 'clsx'

import { FormFieldContext } from './FormField'

interface InputProps {
  className?: string
  invalid?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps & Omit<ComponentProps<'input'>, keyof InputProps>>(
  ({ className, invalid, ...rest }, ref) => {
    const context = React.useContext(FormFieldContext)
    const isInvalid = invalid
    return (
      <input
        ref={ref}
        id={context?.name}
        className={clsx(
          'block h-[50px] w-full border-b border-b-zinc-300 p-2 outline-none ring-inset',
          isInvalid ? 'ring-2 ring-red-500' : 'focus:ring-gray-500',
          className
        )}
        type='text'
        {...(context && { ...context.control.register(context.name, context.rules) })}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'
