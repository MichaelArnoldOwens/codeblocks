import { getRun, getStats } from './requestHandlers'
import {useEffect, useState} from 'react'

import LoadingSpinner from './LoadingSpinner';

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    console.log('timeoutId:', timeoutId)
    if (timeoutId) {
      console.log('clearing timeout!')
      clearTimeout(timeoutId);
    }
    console.log('id:??', setTimeout)
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export const Block = ({code}) => {
  const [textValue, setTextValue] = useState(code)
  const [runResults, setRunResults] = useState(null)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  // TODO handle errors
  const [blockError, setBlockError] = useState(null)
  const handleChange = (e) => {
    const newValue = e.target.value
    setTextValue(newValue)
  }

  
  useEffect( () => {
    // TODO handle debouncing/throttle
    const fetchStats = async () => {
      console.log('calling fetch stats')
      const {data} = await getStats(textValue);
      if (data) {
        setCount(data);
      }
    };
    const debouncedFetchStats = debounce(fetchStats, 2000)
    debouncedFetchStats()
  }, [textValue])

  const hanldeRunClick = () => {
    const fetchRun = async () => {
      const {data, error} = await getRun(textValue)
      console.log('data:', data, 'error:', error)
      if (data) {
        setRunResults(data)
      } else if (error) {
        console.log(error)
        setBlockError(error)
      }
      setLoading(false)

    }
    fetchRun()
    setLoading(true)
    
  }

  return <div style={{border: 'solid black 1px', padding: '10px', margin: 10}}>
    <h3>Code:</h3>
    <textarea placeholder="Enter code here..." value={textValue} onChange={handleChange}/>
    <div>Word Count:{count}</div>
    <button disabled={textValue.length === 0 || loading} onClick={hanldeRunClick}>Run</button>
    <div>
      {loading && <LoadingSpinner/>}
      {blockError && <div>
        <div>Error Status:{blockError.status}</div>
        <div>Error message:{blockError.msg}</div>
        </div>}
    {runResults && 
    <div>
      <h3>Run Results</h3>
      <div style={{border: 'blue 1px solid'}}>
      <code>{runResults}</code>
    </div>
    </div>}
    </div>
    </div>
}