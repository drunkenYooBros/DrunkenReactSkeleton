import Page from "layout/page/Page"
import { useSetRecoilState } from "recoil"
import { openLoginModalSelector } from "state"

function FormSample(props: any) {
  return (
    <Page {...props}>
      <span className="icon-text has-text-info">
        <span className="icon">
          <i className="fas fa-info-circle"></i>
        </span>
        <span>Info</span>
      </span>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Text input"
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
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </Page>
  )
}

export default FormSample
