import { atom, selector } from 'recoil'

export const modalListState = atom<Array<any>>({
  key: 'modalListState',
  default: [],
})

export const appendModalSelector = selector({
  key: 'appendModalSelector',
  get: () => {},
  set: ({get, set}, newValue: any) => {
    const list = [
      ...get(modalListState),
      newValue
    ]
    set(modalListState, list)
  }
})

export const removeModalSelector = selector({
  key: 'removeModalSelector',
  get: () => {},
  set: ({get, set}) => {
    const list = get(modalListState).slice(0, -1)
    set(modalListState, list)
  }
})
