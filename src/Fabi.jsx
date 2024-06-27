import { Block } from './Block'
import {useState} from 'react'
export const Fabi = () => {
  const [blocks, setBlocks] = useState([{code: '', id: 0}])
  const [idCounter, setIdCounter] = useState(1)
  const handleCreateBlock = () => {
    setBlocks(b => {
      const newBlocks = b.slice()
      newBlocks.unshift({code: '', id: idCounter})
      return newBlocks
    })
    setIdCounter(count => count + 1)
  }

  console.log(blocks)
  return <div>
    <button onClick={handleCreateBlock}>Add New Block</button>
    <div>
    {blocks.map(({code, id})=> <Block key={id} code={code} />)}
    </div>
  </div>
}