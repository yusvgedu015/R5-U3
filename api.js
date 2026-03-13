const API_KEY="18d0da10d54447a9bd76206c037aa4fc"

const BASE_URL="https://newsapi.org/v2"

const CORS_PROXY="https://api.allorigins.win/raw?url="

export async function getNews(category,page=1){

const url=`${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=10&page=${page}&apiKey=${API_KEY}`

const response=await fetch(CORS_PROXY+encodeURIComponent(url))

if(!response.ok){

throw new Error("Error al obtener noticias")

}

const data=await response.json()

return data.articles||[]

}

export async function searchNews(query){

const url=`${BASE_URL}/everything?q=${query}&pageSize=10&apiKey=${API_KEY}`

const response=await fetch(CORS_PROXY+encodeURIComponent(url))

if(!response.ok){

throw new Error("Error en búsqueda")

}

const data=await response.json()

return data.articles||[]

}
