import create from "zustand";

interface DemoState {
  count: number;
  increment: (state: number) => void;
}

const useStore = create<DemoState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
