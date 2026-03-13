const API_KEY = "3ac8bef9089e115908df76c0f8967329"

const BASE_URL = "https://gnews.io/api/v4"

const CORS_PROXY = "https://api.allorigins.win/raw?url="

export async function getNews(topic, page = 1) {

const url = `${BASE_URL}/top-headlines?topic=${topic}&lang=en&max=10&page=${page}&apikey=${API_KEY}`

const response = await fetch(CORS_PROXY + encodeURIComponent(url))

if (!response.ok) {
throw new Error("Error al obtener noticias")
}

const data = await response.json()

return data.articles || []

}

export async function searchNews(query) {

const url = `${BASE_URL}/search?q=${query}&lang=en&max=10&apikey=${API_KEY}`

const response = await fetch(CORS_PROXY + encodeURIComponent(url))

if (!response.ok) {
throw new Error("Error en búsqueda")
}

const data = await response.json()

return data.articles || []

}
