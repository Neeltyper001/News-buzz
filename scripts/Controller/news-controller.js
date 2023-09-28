import { getNews, createNews } from "../Services/news-operations.js";
import Url from "../Env/config.js";
import createCard from "./news-card-ui.js";
import changeNews from "./news-slider-ui.js";

const newsDataObj =  await getNews(Url);
let modifiedNews = createNews(newsDataObj);
// console.log(modifiedNews);
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
    console.log("I was clicked");
    if(true && searchInput.value!=''){
        
        const searchUrl = `https://news-buzz-back-end.onrender.com/api/getSearchedData/${searchInput.value}`;
        // const searchUrl = `http://localhost:3000/api/getSearchedData/${searchInput.value}`;
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
searchInput.addEventListener("keyup", (event)=>{
    if (event.keyCode === 13) {      
      event.preventDefault();
      searchBtn.click();
    }
  });