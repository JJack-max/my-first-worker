import { DateTime, Str, Int } from "chanfana";
import { z } from "zod";

export const User = z.object({
	id: Int(),
	name: Str(),
	email: Str(),
	age: Int(),
	isActive: z.boolean().default(false),
});