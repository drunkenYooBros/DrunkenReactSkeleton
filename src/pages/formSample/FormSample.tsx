import FormError from "components/FormError"
import Page from "layout/page/Page"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSetRecoilState } from "recoil"
import { openLoginModalSelector } from "state"

function FormSample(props: any) {
  useEffect(() => {
    setFocus("id")
  }, [])

  const {
    register,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors, touchedFields },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(errors)
  }

  const cancel = () => {
    console.log(getValues(), errors)
  }

  return (
    <Page {...props}>
      {/* <h5>{errors.id}</h5> */}
      {/* <h5>{JSON.stringify(errors.type)}</h5> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">ID</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              {...register("id", {
                required: true,
                maxLength: 1,
                max: 1,
              })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
          {/* <FormError id="id" errors={errors} /> */}
          {/* {errors.id?.type === "required" && (
            <FormError id="id" errors={errors} />
          )} */}
          {/* {errors.id?.type === "required" && (
            <p className="help is-danger">This ID is required</p>
          )} */}
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              {...register("password", {
                required: errors.id?.type !== "required",
              })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          {errors.password?.type === "required" && (
            <p className="help is-danger">This Password is required</p>
          )}
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light" onClick={cancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Page>
  )
}

export default FormSample
