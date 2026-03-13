export function renderNews(articles,container){

articles.forEach(article=>{

const card=document.createElement("div")

card.className="news-card"

card.innerHTML=`

<img src="${article.image || 'https://via.placeholder.com/400'}">

<h3 class="news-title">${article.title}</h3>

<p>${article.description || "Sin descripción disponible"}</p>

<button class="favorite-btn">
⭐ Guardar
</button>

`

card.querySelector(".news-title").addEventListener("click",()=>{

openReader(article)

})

card.querySelector(".favorite-btn").addEventListener("click",()=>{

saveFavorite(article)

})

container.appendChild(card)

})

}

/* modo lectura */

function openReader(article){

const reader=document.createElement("div")

reader.className="reader-mode"

reader.innerHTML=`

<button class="reader-close">Cerrar</button>

<h2>${article.title}</h2>

<img src="${article.image || ''}" style="max-width:600px">

<p>${article.description || ""}</p>

<a href="${article.url}" target="_blank">
Leer noticia completa
</a>

`

reader.querySelector(".reader-close").onclick=()=>{

reader.remove()

}

document.body.appendChild(reader)

}

/* favoritos */

function saveFavorite(article){

let favorites=JSON.parse(localStorage.getItem("favorites")) || []

favorites.push(article)

localStorage.setItem("favorites",JSON.stringify(favorites))

alert("Noticia guardada")

}

export function loadFavorites(container){

let favorites=JSON.parse(localStorage.getItem("favorites")) || []

container.innerHTML=""

favorites.forEach(article=>{

const card=document.createElement("div")

card.className="news-card"

card.innerHTML=`

<h3>${article.title}</h3>

<a href="${article.url}" target="_blank">
Leer noticia
</a>

`

container.appendChild(card)

})

}

export function showSkeleton(container){

container.innerHTML=""

for(let i=0;i<6;i++){

const sk=document.createElement("div")

sk.className="skeleton"

container.appendChild(sk)

}

}