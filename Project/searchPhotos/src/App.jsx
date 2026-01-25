import { fetchPhotos } from "./api/mediaApi"

const App = () => {
  return (
    <div className='bg-gray-950 h-screen w-full text-white'>
      <button onClick={()=>{
        fetchPhotos('cat')
      }}>Get Photos</button>
    </div>
  )
}

export default App