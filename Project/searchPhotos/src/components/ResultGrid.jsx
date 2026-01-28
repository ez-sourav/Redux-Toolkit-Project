import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGIF} from '../api/mediaApi'
import {setError,setLoading,setQuery,setResults} from '../redux/features/searchSlice'

const ResultGrid = () => {
    const {query,activeTab,results,loadinger,error} = useSelector((store)=>store.search)
    
  return (
    <div>ResultGrid</div>
  )
}

export default ResultGrid