import {getNews,searchNews} from "./api.js"
import {renderNews,showSkeleton,loadFavorites} from "./ui.js"

const container=document.getElementById("newsContainer")
const favoritesContainer=document.getElementById("favoritesContainer")

const categorySelect=document.getElementById("categorySelect")
const searchInput=document.getElementById("searchInput")
const darkBtn=document.getElementById("darkModeBtn")

let page=1
let loading=false

async function loadNews(){

if(loading) return

loading=true

showSkeleton(container)

try{

const articles=await getNews(categorySelect.value,page)

container.innerHTML=""

renderNews(articles,container)

}catch{

container.innerHTML="<p>Error cargando noticias</p>"

}

loading=false

}

/* filtros */

categorySelect.addEventListener("change",()=>{

page=1
loadNews()

})

/* búsqueda */

searchInput.addEventListener("keypress",async e=>{

if(e.key==="Enter"){

showSkeleton(container)

const articles=await searchNews(searchInput.value)

container.innerHTML=""

renderNews(articles,container)

}

})

/* modo oscuro */

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})

/* carga infinita */

window.addEventListener("scroll",async()=>{

if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){

page++

const articles=await getNews(categorySelect.value,page)

renderNews(articles,container)

}

})

loadNews()

loadFavorites(favoritesContainer)