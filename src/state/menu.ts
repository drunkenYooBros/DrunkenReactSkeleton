import { atom } from 'recoil'

export const mainMenuState = atom<Array<any>>({
  key: 'mainMenuState',
  default: [],
})

