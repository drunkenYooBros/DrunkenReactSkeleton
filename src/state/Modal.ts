import { atom, selector } from 'recoil'

export const modalListState = atom<Array<any>>({
  key: 'modalListState',
  default: [],
})

export const openModalSelector = selector({
  key: 'openModalSelector',
  get: () => [],
  set: ({get, set}, newValue: any) => {
    const list = [
      ...get(modalListState),
      newValue
    ]
    set(modalListState, list)
  }
})

export const closeModalSelector = selector({
  key: 'closeModalSelector',
  get: () => {},
  set: ({get, set}) => {
    const list = get(modalListState).slice(0, -1)
    set(modalListState, list)
  }
}) 
