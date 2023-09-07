import Url from "../Env/config.js";

const getData = async (url) =>{
    try {
        const response = await fetch(url);
        console.log(response)
        const data  = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("Error while fetching data from API", error)
    }
}

getData(Url)
