import dotenv from 'dotenv';
dotenv.config();
const Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
export default Url;
