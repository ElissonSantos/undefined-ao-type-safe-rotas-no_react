import { z } from "zod";
import { RaceEnum } from "../../../../libs/enums/race.enum";

export const charactersSearchSchema = z.object({
  race: z.enum(RaceEnum).optional(),
});

export type CharactersSearch = z.infer<typeof charactersSearchSchema>;
