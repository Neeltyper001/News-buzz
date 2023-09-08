import { getNews, createNews } from "../Services/news-operations.js";
import Url from "../Env/config.js";
import createCard from "./news-card-ui.js";
import changeNews from "./news-slider-ui.js";

const newsDataObj =  await getNews(Url);
const modifiedNews = createNews(newsDataObj);
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