import { fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {
  return (
    <div className='bg-gray-950 h-screen w-full text-white'>
      <button className="bg-amber-500 px-5 py-3 mr-5" onClick={ async ()=>{
        const data = await fetchPhotos('dog')
        console.log(data.results);
        
      }}>Get Photos</button>

      <button className="bg-amber-500 px-5 py-3 mr-5" onClick={ async ()=>{
        const data = await fetchVideos('dog')
        console.log(data.videos);
        
      }}>Get Videos</button>
    </div>
  )
}

export default App