import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchPhotos(query,page=1,perpage=20){
    const res =await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,perpage},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    console.log(res)
}