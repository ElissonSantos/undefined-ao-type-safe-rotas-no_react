import { createContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { CharacterResponse } from "../../../../../libs/models/datailsCharacters";

type DetailsCharacterContextType = {
  character: CharacterResponse | null;
  isLoading: boolean;
};

const DetailsCharacterContext = createContext<DetailsCharacterContextType>({
  character: null,
  isLoading: false,
});

export default DetailsCharacterContext;

export const DetailsCharacterProvider = ({
  children,
  characterId,
}: {
  children: React.ReactNode;
  characterId: string;
}) => {
  const [character, setCharacter] = useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchDetailsCharater = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<CharacterResponse>(
        `https://dragonball-api.com/api/characters/${characterId}`,
      );
      setCharacter(res.data);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      await searchDetailsCharater();
    };
    fetchDetails();
    // eslint-disable-next-line
  }, [characterId]);

  return (
    <DetailsCharacterContext.Provider
      value={{
        character,
        isLoading,
      }}
    >
      {children}
    </DetailsCharacterContext.Provider>
  );
};
