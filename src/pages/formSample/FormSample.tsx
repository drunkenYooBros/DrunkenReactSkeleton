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
    console.log(errors, getValues())
  }

  return (
    <Page {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">ID</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              {...register("id", { required: true })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <FormError id="id" errors={errors} />
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              {...register("password", { required: true })}
              // {...register("password", {
              //   required: errors.id?.type !== "required",
              // })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <FormError id="password" errors={errors} />
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
