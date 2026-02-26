import { createContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type {
  Character,
  CharactersInput,
  CharactersResponse,
} from "../../../libs/models/characters";

type CharactersContextType = {
  response: CharactersResponse | null;
  isLoading: boolean;
  filters: CharactersInput;
  setFilters: React.Dispatch<React.SetStateAction<CharactersInput>>;
};

const CharactersContext = createContext<CharactersContextType>({
  response: null,
  isLoading: false,
  filters: { page: 1, limit: 8 },
  setFilters: () => {},
});

export default CharactersContext;

export const CharactersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = useState<CharactersInput>({
    page: 1,
    limit: 8,
    race: undefined,
  });
  const [response, setResponse] = useState<CharactersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchCharacters = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<CharactersResponse | Character[]>(
        "https://dragonball-api.com/api/characters",
        { params: filters },
      );

      if (Array.isArray(res.data)) {
        setResponse(
          (prev) =>
            ({ ...prev, items: res.data as Character[] }) as CharactersResponse,
        );
      } else {
        setResponse(res.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.error(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      await searchCharacters();
    };
    fetchCharacters();
    // eslint-disable-next-line
  }, [filters]);

  return (
    <CharactersContext.Provider
      value={{
        response,
        isLoading,
        filters,
        setFilters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
