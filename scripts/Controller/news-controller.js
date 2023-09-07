import { getNews, createNews } from "../Services/news-operations.js";
import Url from "../Env/config.js";

const newsDataObj =  await getNews(Url);
const modifiedNews = createNews(newsDataObj);
console.log(modifiedNews);
console.log(modifiedNews[0].title)