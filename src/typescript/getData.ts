
const BaseURL = 'https://swapi.dev/api/'

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

export const getData = (page: number, index: number) => {
  const URL = `${BaseURL}${Object.keys(Resources)[page]}/${index}`;
  return fetch(URL)
    .then(response => response.json());
};

// (async() => {
//   const response = await getData(1, 1);
//   console.log(response);
// })();
