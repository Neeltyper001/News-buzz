import Url from "../Env/config.js";

const getNewsData = async (url) =>{
    try {
        const response = await fetch(url);        
        const data  = await response.json();        
        return data;
    } catch (error) {
        console.log("Error while fetching data from API", error)
    }
}


export default getNewsData ;
