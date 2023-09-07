import News from "../Model/news-model.js";
import getNewsData from "./api-client.js";

const getNews = async (Url)=>{
        const newsData = await getNewsData(Url)
        console.log(newsData);
        return newsData;
}

const setNews = (newsDataObj)=>{
    const newsArr = newsDataObj.articles;
    console.log(newsArr)
}

export  {getNews , setNews}