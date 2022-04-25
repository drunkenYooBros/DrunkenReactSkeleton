import React, { useCallback, useEffect, useState } from "react"

export interface IFormError {
  id: string
  errors: any
  type?: string
}

function FormError({ id, errors }: IFormError) {
  const [errorMessage, setErrorMessage] = useState(null)

  // useEffect(() => {
  //   console.log("useEffect ::errors")
  //   setErrorMessage(getErrorMessage(errors[id]))
  //   // getErrorMessage(errors[id])
  // }, [errors])

  // const getErrorMessage = (error: any): any => {
  //   console.log("error ----- ", error)
  //   return error?.type ? `error type is ${error?.type}` : "---"
  // }

  const getMessage = () => {
    const d = errors[id] || {}
    return d.type ? `error type is ${d.type}` : ""
  }

  // return errorMessage ? <p className="help is-danger">{errorMessage}</p> : <></>
  return getMessage && <p className="help is-danger">{getMessage()}</p>
}

export default FormError
