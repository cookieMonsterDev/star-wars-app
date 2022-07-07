
const BaseURL = 'https://swapi.dev/api/';

interface Resources {
  people: string;
  films: string;
  starships: string;
  vehicles: string;
  species: string;
  planets: string;
};

export const Resources: Resources = {
  people: 'people',
  films: 'films',
  starships: 'starships',
  vehicles: 'vehicles',
  species: 'species',
  planets: 'planets',
}; 

export const getData = async (page: number) => {
  const URL = `${BaseURL}${Object.keys(Resources)[page]}/`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results
};
