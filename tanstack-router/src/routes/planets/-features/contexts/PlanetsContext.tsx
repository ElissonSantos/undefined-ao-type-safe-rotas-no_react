import { createContext, useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import axios, { AxiosError } from "axios";
import type {
  Planet,
  PlanetsInput,
  PlanetsResponse,
} from "../../../../libs/models/planets";

type PlanetsContextType = {
  response: PlanetsResponse | null;
  filters: PlanetsInput;
  setFilters: React.Dispatch<React.SetStateAction<PlanetsInput>>;
};

const PlanetsContext = createContext<PlanetsContextType>({
  response: null,
  filters: { page: 1, limit: 8 },
  setFilters: () => {},
});

export default PlanetsContext;

export const PlanetsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { destroyed } = useSearch({ from: "/planets/" });

  const [filters, setFilters] = useState<PlanetsInput>({
    page: 1,
    limit: 8,
    isDestroyed: destroyed,
  });
  const [response, setResponse] = useState<PlanetsResponse | null>(null);

  const searchPlanets = async () => {
    try {
      const res = await axios.get<PlanetsResponse | Planet[]>(
        "https://dragonball-api.com/api/planets",
        { params: filters },
      );

      if (Array.isArray(res.data)) {
        setResponse(
          (prev) =>
            ({ ...prev, items: res.data as Planet[] }) as PlanetsResponse,
        );
        return;
      } else {
        setResponse(res.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.error(err.message);
    }
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      await searchPlanets();
    };
    fetchPlanets();
    // eslint-disable-next-line
  }, [filters]);

  return (
    <PlanetsContext.Provider
      value={{
        response,
        filters,
        setFilters,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};
