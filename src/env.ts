import { z, ZodError } from "zod";

const EnvironmentSchema = z.object({
	EXPO_PUBLIC_API_BASE_URL: z.string().url(),
});

export type Environment = z.infer<typeof EnvironmentSchema>;

export const environment = () => {
	try {
		const env = EnvironmentSchema.parse(process.env);
		return env;
	} catch (error) {
		if (error instanceof ZodError) {
			throw new Error(
				JSON.stringify({
					message: "Application envrionment is misconfigured",
					data: error.flatten(),
				})
			);
		} else {
			throw new Error(
				JSON.stringify({
					message: "Something went wrong while initilizing environment",
				})
			);
		}
	}
};
