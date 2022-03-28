import JoinModal from 'modals/join/JoinModal'
import LoginModal from 'modals/login/LoginModal'
import { atom, selector } from 'recoil'

export const modalListState = atom<Array<any>>({
  key: 'modalListState',
  default: [],
})

export const openModalSelector = selector({
  key: 'openModalSelector',
  get: () => {},
  set: ({get, set}, newValue: any) => {
    const config = {
      ...newValue,
      params: newValue?.params || {},
      close: newValue?.close || (() => ''),
    }
    const list = [
      ...get(modalListState),
      config
    ]
    set(modalListState, list)
  }
})

export const closeModalSelector = selector({
  key: 'closeModalSelector',
  get: () => {},
  set: ({get, set}, params: any={}) => {
    const lastModal = get(modalListState).at(-1)
    const modalList = get(modalListState).slice(0, -1)
    set(modalListState, modalList)
    // execute callback function
    typeof lastModal.close === 'function' && lastModal.close(params)
  }
})

export const openLoginModalSelector = selector({
  key: 'openLoginModalSelector',
  get: () => null,
  set: ({get, set}, newValue: any) => {
    const config = {
      ...newValue,
      component: LoginModal,
      title: 'Login Modal Title',
    }
    set(openModalSelector, config)
  }
})

export const openJoinModalSelector = selector({
  key: 'openJoinModalSelector',
  get: () => null,
  set: ({get, set}, newValue: any) => {
    const config = {
      ...newValue,
      component: JoinModal,
      title: 'Join Modal Title',
    }
    set(openModalSelector, config)
  }
})
