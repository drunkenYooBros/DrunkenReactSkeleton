import React, { useCallback, useEffect, useState } from "react"

export interface IFormError {
  id: string
  errors: any
  type?: string
}

function FormError({ id, errors, type }: IFormError) {
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log("useEffect :: errors")
    setErrorMessage(getErrorMessage(errors[id]))
    // getErrorMessage(errors[id])
  }, [errorMessage])

  const getErrorMessage = (error: any): any => {
    console.log("error ----- ", error)
    return error?.type ? `error type is ${error?.type}` : "---"
  }

  return errorMessage ? <p className="help is-danger">{errorMessage}</p> : <></>
}

export default FormError
