import React from 'react'

import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { type FieldPath, type FieldErrors, type Control, type FieldValues, type RegisterOptions } from 'react-hook-form'
import { useFormState } from 'react-hook-form'

interface FormFieldContextProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>

  errors: FieldErrors<T>
  rules?: RegisterOptions<T, FieldPath<T>>
}

interface FormFieldProps<T extends FieldValues> {
  as?: React.ComponentType
  className?: string
  children: React.ReactNode

  control: Control<T>
  name: FieldPath<T>
  rules?: RegisterOptions<T, FieldPath<T>>
}

interface FormFieldLabelProps {
  className?: string
  children: React.ReactNode
  required?: boolean
  unUseDefaultClassname?: boolean
}

interface FormFieldErrorProps {
  className?: string
}

export const FormFieldContext = React.createContext<FormFieldContextProps<any> | undefined>(undefined)

export const FormField = <T extends FieldValues>({
  as,
  className,
  children,
  control,
  name,
  rules,
}: FormFieldProps<T>) => {
  const Component = as ?? 'div'
  const { errors } = useFormState({ control, name })

  return (
    <Component className={className}>
      <FormFieldContext.Provider value={{ control, name, errors, rules }}>{children}</FormFieldContext.Provider>
    </Component>
  )
}

export const FormFieldLabel = ({
  className,
  children,
  unUseDefaultClassname = false,
  required = false,
}: FormFieldLabelProps) => {
  const context = React.useContext(FormFieldContext)

  return (
    <label className={clsx(unUseDefaultClassname || 'block text-sm font-semibold', className)} htmlFor={context?.name}>
      {children}
      {required && <span className='text-red-500'>*</span>}
    </label>
  )
}

export function FormFieldError({ className }: FormFieldErrorProps) {
  const context = React.useContext(FormFieldContext)

  return (
    <ErrorMessage
      errors={context?.errors}
      name={context?.name ?? ''}
      render={({ message }) => <div className={clsx('text-sm text-red-500', className)}>{message}</div>}
    />
  )
}
