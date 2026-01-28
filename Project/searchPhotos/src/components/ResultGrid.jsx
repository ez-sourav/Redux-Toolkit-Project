import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGIF} from '../api/mediaApi'
import {setError,setLoading,setQuery,setResults} from '../redux/features/searchSlice'
import { useEffect } from 'react'

const ResultGrid = () => {
    const {query,activeTab,results,loadinger,error} = useSelector((store)=>store.search)
    const getData = async ()=>{
        let data;
        if(activeTab == 'photos'){
             data = await fetchPhotos(query); 
        }
        if(activeTab == 'videos'){
             data = await fetchVideos(query); 
        }
        if(activeTab == 'gif'){
             data = await fetchGIF(query); 
        }
    }

    
  return (
    <div>
        <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default ResultGrid