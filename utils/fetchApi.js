import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

//Keep your private keys safe. Not like this.
export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': process.env.API_KEY
		}
	})

	return data;
}

