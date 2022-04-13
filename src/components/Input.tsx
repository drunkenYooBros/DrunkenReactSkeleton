import React, { useCallback, useEffect, useState } from "react"

export interface InputInterface {
  type: string
  name?: string
  placeHolder: string
  onChange: any
  value?: string | number
}

function Input({ type, placeHolder, onChange, value }: InputInterface) {
  const [inputValue, setInputValue] = useState(value)

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedValue: string = e.target.value
      onChange(changedValue)
    },
    []
  )

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <input
      className="input"
      placeholder={placeHolder}
      value={inputValue}
      onChange={changeHandler}
    />
  )
}

export default Input
