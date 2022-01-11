import { atom } from 'recoil'
import * as States from "constant/state";

export default atom<string>({
  key: States.INPUT_TEXT,
  default: '',
})