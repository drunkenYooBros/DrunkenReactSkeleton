import Page from "layout/page/Page"
import { useForm } from "react-hook-form"
import { useSetRecoilState } from "recoil"
import { openLoginModalSelector } from "state"

function FormSample(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(errors)
  }

  const cancel = () => {
    console.log(errors)
  }

  return (
    <Page {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">ID</label>
          <div className="control">
            <input
              className="input"
              type="text"
              {...register("id", { required: true })}
            />
          </div>
          <p className="help is-danger">This ID is required</p>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              {...register("password")}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
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
