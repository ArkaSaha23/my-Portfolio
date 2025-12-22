import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className='m-5 w-15 h-8 text-lg text-amber-50 cursor-pointer bg-red-500 hover:bg-red-700'>          
          Click here
        </button>
      </div>
      
    </>
  )
}

export default App
