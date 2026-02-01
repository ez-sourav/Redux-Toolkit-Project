import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection = useSelector(state  => state.collection.items)
  const dispatch = useDispatch()
  const clearAll = ()=>{
    dispatch(clearCollection())
  }
  return (
    <div className='overflow-auto px-10 py-6'>
      {collection.length>0 ? <div className='flex justify-between mb-6'>
      <h2 className='text-xl font-medium'>Your Collection</h2>
      <button 
      onClick={()=>{
        clearAll()
      }}
      className='bg-red-600 active:scale-95 transition cursor-pointer px-5 py-2 font-medium text-base rounded-md'>Clear Collection</button>
      </div>:<h2 className='text-5xl py-10 text-center text-gray-300 font-medium'>Collection is Empty</h2>}
      
      <div className='flex w-full justify-start flex-wrap  gap-6 '>
      {collection.map((item,idx)=>{
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPage