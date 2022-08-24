import { useState, useEffect } from "react";

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

export const useFetch = (page: number) => {

	const [response, setResponce] = useState<object[]>();

	useEffect(() => {
		const setData = async () => {
			const data = await getData(page);
			setResponce(data);
		}

		setData();
	}, [page])

	return response;
};

const getData = async (page: number) => {
	let data;
	try {
		const URL = `${BaseURL}${Object.keys(Resources)[page]}/`;
  	const response = await fetch(URL);
  	data = await response.json();
	} catch (err) {
		throw new Error('Somesithg went wrong');
	}
  return data.results
};
