import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBook } from '../redux'

export default function HookContainer() {
//State area
const [number, setNumber] = useState(1)
const numberOfbooks = useSelector(state=>state.numOfBooks)
const distpatch = useDispatch()
  return (
  <>
      <h1>HookContainer</h1>
      <h5>Number of Books- {numberOfbooks}</h5>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>distpatch(buyBook(number))}>Buy {number} Book</button>
  </>
  )
}
