import { useState } from 'react'
import Navbar from './Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-3xl font-bold underline'>asda</h1>
    </div>
  )
}

export default App
