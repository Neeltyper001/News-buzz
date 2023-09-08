import { getNews, createNews } from "../Services/news-operations.js";
import Url from "../Env/config.js";
import createCard from "./news-card-ui.js";

const newsDataObj =  await getNews(Url);
const modifiedNews = createNews(newsDataObj);
console.log(modifiedNews);
const newsContainer = document.querySelector("#news-container");

modifiedNews.forEach((eachNews)=>{
    newsContainer.appendChild(createCard(eachNews));
})
