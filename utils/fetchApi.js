import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

//Keep your private keys safe. Not like this.
export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'cefb52df08mshf6e966f3465917ep1ed9c8jsndda5324e1f46'
		}
	})

	return data;
}

