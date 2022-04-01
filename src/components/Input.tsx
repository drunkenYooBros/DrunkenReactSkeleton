import React, {
  useCallback,
  useEffect,
  useState
} from 'react'

export interface InputInterface {
  type: string,
    name ? : string,
    placeHolder: string,
    onChange: Function,
    value ? : string | number
}

const Input = ({
  type,
  name,
  placeHolder,
  onChange,
  value = ""
}: InputInterface) => {
  const [inputValue, setInputValue] = useState(value)

  const inputChangeHandler = useCallback((e: React.ChangeEvent < HTMLInputElement > ) => {
    const {
      value
    } = e.target
    onChange(value)
  }, [])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return ( <
    >
    <
    input className = "input"
    type = {
      type
    }
    name = {
      name
    }
    placeholder = {
      placeHolder
    }
    value = {
      inputValue
    }
    onChange = {
      inputChangeHandler
    }
    /> <
    />
  )
}

export default React.memo(Input)