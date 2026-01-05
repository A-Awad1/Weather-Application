declare module "world-cities-json" {
  interface WorldCitiesJson {
    cities: unknown[];
  }

  const data: WorldCitiesJson;
  export default data;

  export interface City {
    city: string;
    city_ascii: string;
    lat: string;
    lng: string;
    country: string;
    iso2: string;
    iso3: string;
    admin_name: string;
    capital: string;
    population: string;
    id: string;
  }
}
