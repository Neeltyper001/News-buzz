import { getNews, createNews } from "../Services/news-operations.js";
import Url from "../Env/config.js";
import createCard from "./news-card-ui.js";
import changeNews from "./news-slider-ui.js";

const newsDataObj =  await getNews(Url);
let modifiedNews = createNews(newsDataObj);
console.log(modifiedNews);
const newsContainer = document.querySelector("#news-container");

modifiedNews.forEach((eachNews)=>{
    newsContainer.appendChild(createCard(eachNews));
})

setInterval(()=>{
    const news = modifiedNews[Math.floor(Math.random() * modifiedNews.length)];    
    changeNews(news);
}, 5000);

const myWorks = document.querySelector("#my-works");
myWorks.addEventListener("click", ()=>{
    window.open("https://my-small-works.netlify.app/", "_blank");
})

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

const searchTheNews = async ()=>{
    if(true && searchInput.value!=''){
        // const searchUrl = `https://gnews.io/api/v4/search?q=${searchInput.value}&apikey=49f043047c6a0a00b6150d6c005723fa`;
        const searchUrl = `https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=b9696d7845164da6a06de3b1f4af46a8`;
        const searchedNewsDataObj = await getNews(searchUrl);
        if(searchedNewsDataObj.articles.length === 0){
            alert("Oops result not found")
        }
        else{
            modifiedNews = createNews(searchedNewsDataObj)
            newsContainer.innerHTML = "";
            modifiedNews.forEach((eachNews)=>{
                newsContainer.appendChild(createCard(eachNews));
            })        
        }
    }
    
}
searchBtn.addEventListener("click", searchTheNews)
