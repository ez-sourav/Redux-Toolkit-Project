import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] h-80 bg-white rounded '>
        {item.type == 'photo'?'':''}
        {item.type == 'video'?'':''}
        {item.type == 'gif'?'':''}
        <h1 className='text-black'>{item.title}</h1>
    </div>
  )
}

export default ResultCard