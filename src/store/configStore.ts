import { create } from "zustand";
import { produce } from "immer";

import { environment, type Environment } from "@/env";

interface ConfigStore {
	env: Environment;
	actions: {
		setEnvironment: (environment: Environment) => void;
	};
}

export const useConfigStore = create<ConfigStore>((set) => ({
	env: environment(),
	actions: {
		setEnvironment: (environment) => {
			set((state) => {
				const nextState = produce(state, (draft) => {
					draft.env = environment;
				});
				return nextState;
			});
		},
	},
}));

export const useEnvironment = () => useConfigStore((state) => state.env);
