import { getNews, setNews } from "../Services/news-operations.js";
import Url from "../Env/config.js";

const newsDataObj =  await getNews(Url);
setNews(newsDataObj);