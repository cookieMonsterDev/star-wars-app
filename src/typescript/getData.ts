
const BaseURL = 'https://swapi.dev/api/';

interface Resources {
  people: string;
  films: string;
  starships: string;
  vehicles: string;
  species: string;
  planets: string;
};

export interface Responce {
  url?: string,
	created?: Date, 
  edited?: Date, 
  name?: string,
  height?: string, 
  mass?: string, 
  hair_color?: string, 
  skin_color?: string, 
  eye_color?: string,
  birth_year?: string,
  gender?: string,
  homeworld?: string, 
  films?: string[], 
  species?: string[], 
  vehicles?: string[], 
  starships?: string[], 
  title?: string,
	episode_id?: number,
	opening_crawl?: string,
	director?: string,
	producer?: string,
	release_date?: Date,
	characters?: string[],
	planets?: string[],
  model?: string,
	manufacturer?: string,
	cost_in_credits?: string,
	length?: string,
	max_atmosphering_speed?: string,
  crew?: string,
  passengers?: string,
	cargo_capacity?: string,
	consumables?: string,
	hyperdrive_rating?: string,
	MGLT?: string,
	starship_class?: string,
	pilots?: string[],
	vehicle_class?: string,
	classification?: string,
	designation?: string,
	average_height?: string,
	skin_colors?: string,
	hair_colors?: string,
	eye_colors?: string,
	average_lifespan?: string,
	language?: string,
	people?: string[],
	rotation_period?: string,
	orbital_period?: string,
	diameter?: string,
	climate?: string,
	gravity?: string,
	terrain?: string,
	surface_water?: string,
	population?: string,
	residents?: string[],
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
