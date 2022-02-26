import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
export interface State {
    count: number
  }

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('')
export const store = createStore<State>({
})

export function useStore () {
  return baseUseStore(key)
}
