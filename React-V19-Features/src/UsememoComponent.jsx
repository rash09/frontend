import { useState, useEffect } from 'react'

import './App.css'

function UsememoComponent() {
  "use memo"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

   useEffect(() => {
    console.log("In App")
  })

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Child name={name}/>
    </>
  )
}

function Child({ name }) {
  "use memo"
  useEffect(() => {
    console.log("In Child")
  })
  return (
    <div>I am a child with the name :{name}</div>
  )
}

export default UsememoComponent
