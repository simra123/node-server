import { create } from "zustand";

export const useStore = create((set) => ({
	add: 1,
	inc: () =>
		set((state) => ({
			add: state.add + 1,
		})),

	dark: true,
	toggleDark: () =>
		set((state) => ({
			dark: !state.dark,
		})),
}));
