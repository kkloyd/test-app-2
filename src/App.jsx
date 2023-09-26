import { useState } from 'react'
import './App.css'
import useSWRImmutable from 'swr/immutable'
import api from './api'



function App() {
  const { data, isLoading } = useSWRImmutable(api.URL.texts, api.jsonFetcher)
  const [results] = useState([{ indices: [2,4,7,0] }, { indices: [1,2,3,4] }, {indices: [4,5,6,7] }])
  const [current, setCurrent] = useState(0)

  const onNextClick = () => {
    setCurrent(prev => {
      if (prev + 1 < results.length) return prev + 1
      else return 0
    })
  }

  const getClassname = (index) => {
    if (results[current].indices.some(r => r === index))
      return 'colored mr-2'
    else return 'mr-2'
  }

  const renderColoredText = () => {
    if (!data) return
    // get 8 th data as example
    const text = data[8].body.split(' ')
    return text.map((word, index) => (
      <span key={index} className={getClassname(index)}>{word}</span>
    ))
  }


  if (isLoading) return <div className='loader'>LOADING</div>

  return (
    <div className='container'>
      <div className='btn-container'>
        <button onClick={onNextClick}>
          Next
        </button>
      </div>
      <div className="content">
        {renderColoredText()}
      </div>
    </div>
  )
}

export default App
