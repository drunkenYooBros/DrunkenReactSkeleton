import { atom } from 'recoil'
import {States} from 'constant/state'

export default atom<string>({
  key: States.INPUT_TEXT,
  default: '',
})