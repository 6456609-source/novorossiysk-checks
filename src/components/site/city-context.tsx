import { createContext, useContext, type ReactNode } from "react";
import { CITIES, type City } from "./cities";

const CityContext = createContext<City>(CITIES[0]);

export const CityProvider = ({ city, children }: { city: City; children: ReactNode }) => (
  <CityContext.Provider value={city}>{children}</CityContext.Provider>
);

export const useCity = () => useContext(CityContext);
