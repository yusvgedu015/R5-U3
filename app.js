import {getNews,searchNews} from "./api.js"
import {renderNews,loadFavorites} from "./ui.js"

const container=document.getElementById("newsContainer")
const favoritesContainer=document.getElementById("favoritesContainer")

const categorySelect=document.getElementById("categorySelect")
const searchInput=document.getElementById("searchInput")
const darkBtn=document.getElementById("darkModeBtn")

let page=1

async function loadNews(){

const articles=await getNews(categorySelect.value,page)

container.innerHTML=""

renderNews(articles,container)

}

categorySelect.addEventListener("change",()=>{

page=1
loadNews()

})

searchInput.addEventListener("keydown",async e=>{

if(e.key==="Enter"){

const articles=await searchNews(searchInput.value)

container.innerHTML=""

renderNews(articles,container)

}

})

darkBtn.onclick=()=>{

document.body.classList.toggle("dark")

}

window.addEventListener("scroll",async()=>{

if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){

page++

const articles=await getNews(categorySelect.value,page)

renderNews(articles,container)

}

})

loadNews()

loadFavorites(favoritesContainer)
