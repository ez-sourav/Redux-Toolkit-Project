import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div className="relative w-[18vw] h-80 bg-zinc-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {item.type === 'photo' && (
          <img
            className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
            src={item.src}
            alt=""
          />
        )}

        {item.type === 'video' && (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        )}

        {item.type === 'gif' && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        )}
      </a>

   
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center gap-2 px-4 py-3 bottom-gradient text-white">
        <h2 className="text-sm font-semibold capitalize truncate">
          {item.title}
        </h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-md px-3 py-1 text-sm font-medium">
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard
