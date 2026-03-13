export function renderNews(articles,container){

articles.forEach(article=>{

const card=document.createElement("div")

card.className="news-card"

card.innerHTML=`

<img src="${article.urlToImage || 'https://via.placeholder.com/400'}">

<h3 class="news-title">${article.title}</h3>

<p>${article.description || "Sin descripción disponible"}</p>

<button class="favorite-btn">Guardar</button>

`

card.querySelector(".news-title").onclick=()=>{

window.open(article.url,"_blank")

}

card.querySelector(".favorite-btn").onclick=()=>{

saveFavorite(article)

}

container.appendChild(card)

})

}

function saveFavorite(article){

let favorites=JSON.parse(localStorage.getItem("favorites"))||[]

favorites.push(article)

localStorage.setItem("favorites",JSON.stringify(favorites))

alert("Noticia guardada")

}

export function loadFavorites(container){

let favorites=JSON.parse(localStorage.getItem("favorites"))||[]

container.innerHTML=""

favorites.forEach(article=>{

const card=document.createElement("div")

card.className="news-card"

card.innerHTML=`<h3>${article.title}</h3>`

container.appendChild(card)

})

}
