
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

export const getData = (page: any, index: number) => {
  const URL = `${BaseURL}${Object.keys(Resources)[page]}/${index}`;
  fetch(URL)
    .then(response => {
      return response.json();
  }).then(json => console.log(json));
};
