import console from "console";

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

export const getData = async (page: number) => {
  const URL = `${BaseURL}${Object.keys(Resources)[page]}/`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results
};


// export const Data = async () => {
//   let response = await fetch("https://swapi.dev/api/people/1");
//   if (response.ok) {
//     let result = await response.json();
//     return result
//   }
//   return response
// }
