import News from "../Model/news-model.js";
import getNewsData from "./api-client.js";

const getNews = async (Url)=>{
        const newsData = await getNewsData(Url)
        // console.log(newsData);
        return newsData;
}

const createNews = (newsDataObj)=>{
    const newsArr = newsDataObj.articles;
    // console.log(newsArr);
    const modNewsArr = newsArr.map((eachArticle,index)=> new News(index , eachArticle.title , eachArticle.description , eachArticle.urlToImage, eachArticle.publishedAt, eachArticle.url));
    // const modNewsArr = newsArr.map((eachArticle,index)=> new News(index , eachArticle.title , eachArticle.description , eachArticle.prevImage, eachArticle.publishedAt, eachArticle.url));
    return modNewsArr;
}

export  {getNews , createNews}