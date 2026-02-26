import { createContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { PlanetResponse } from "../../../../libs/models/detailsPlanet";

type DetailsPlanetContextType = {
  planet: PlanetResponse | null;
  isLoading: boolean;
};

const DetailsPlanetContext = createContext<DetailsPlanetContextType>({
  planet: null,
  isLoading: false,
});

export default DetailsPlanetContext;

export const DetailsPlanetProvider = ({
  children,
  planetId,
}: {
  children: React.ReactNode;
  planetId: string;
}) => {
  const [planet, setPlanet] = useState<PlanetResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchDetailsPlanet = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<PlanetResponse>(
        `https://dragonball-api.com/api/planets/${planetId}`,
      );
      setPlanet(res.data);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      await searchDetailsPlanet();
    };
    fetchDetails();
    // eslint-disable-next-line
  }, [planetId]);

  return (
    <DetailsPlanetContext.Provider
      value={{
        planet,
        isLoading,
      }}
    >
      {children}
    </DetailsPlanetContext.Provider>
  );
};
