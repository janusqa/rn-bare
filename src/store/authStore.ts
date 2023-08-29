import { create } from "zustand";
import { produce } from "immer";

interface AuthStore {
	user: string | null | undefined;
	actions: {
		login: (user: string) => void;
		logout: () => void;
	};
}

export const useAuthStore = create<AuthStore>((set) => ({
	user: undefined,
	actions: {
		login: (user) => {
			set((state) => {
				const nextState = produce(state, (draft) => {
					draft.user = user;
				});
				return nextState;
			});
		},
		logout: () => {
			set((state) => {
				const nextState = produce(state, (draft) => {
					draft.user = undefined;
				});
				return nextState;
			});
		},
	},
}));

export const useUser = () => useAuthStore((state) => state.user);
export const useAuthActions = () => useAuthStore((state) => state.actions);
