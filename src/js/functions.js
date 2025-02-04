import axios from "axios";

async function fetchWikipediaArticle(animal) {
	try {
		const response = await axios.get(
			`https://de.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
				animal
			)}`
		);
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1500);
		});
		return response;
	} catch (error) {
		console.error("Error fetching Wikipedia article:", error);
	}
}

export { fetchWikipediaArticle };
