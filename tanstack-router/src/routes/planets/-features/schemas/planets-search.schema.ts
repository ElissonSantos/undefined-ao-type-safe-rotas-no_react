import { z } from "zod";

export const planetsSearchSchema = z.object({
  destroyed: z.boolean().optional(),
});

export type PlanetsSearch = z.infer<typeof planetsSearchSchema>;
