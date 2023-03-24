export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3a41a9e5emshb4aebf1addb9243p12e5dajsn831ec962e53e',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '531378d63dmsh7b5e0f910051020p121199jsn1c325f672fea',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};





export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);

    const data = await response.json();

    return data;
}