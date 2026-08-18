/* create는 state와 action함수를 포함하는 객체인, store를 생성한다.*/
import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
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
  },
}));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncrease = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecrease = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
