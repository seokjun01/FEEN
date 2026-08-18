/* create는 state와 action함수를 포함하는 객체인, store를 생성한다.*/
import { create } from "zustand";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

create<Store>((set, get) => ({
  count: 0,
  increase: () => {
    set((store) => ({
      count: store.count + 1,
    }));
  },
  decrease: () => {
    set((store) => ({
      count: store.count - 1,
    }));
  },
}));
