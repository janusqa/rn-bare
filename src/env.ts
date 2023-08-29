import z from "zod";

const EnvironmentSchema = z.object({
	EXPO_PUBLIC_CONFIG_PROJECTID: z.string(),
});

export type Environment = z.infer<typeof EnvironmentSchema>;

export const env = () => {
	const environment = EnvironmentSchema.safeParse(process.env);
	if (!environment.success) throw Error("Miconfigured Application");
	return environment.data;
};
