import {atom} from 'recoil'
import { recoilPersist} from 'recoil-persist'

const { persistAtom } = recoilPersist({
	key: "recoil-persist",
	storage: typeof window === "undefined" ? undefined : window.sessionStorage //修正
	// storage: sessionStorage
});

export const isAuthenticatedState = atom({
	key: "isAuthenticatedState",
	default: false,
	effects_UNSTABLE: [persistAtom]
});

export const countState = atom({
  key: 'count',
  default:0,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: 'user',
  default: {
    name: 'hoge',
    age: 11
  },
})