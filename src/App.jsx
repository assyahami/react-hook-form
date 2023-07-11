import { useState, Suspense, lazy } from 'react'
import './App.css'
const Home = lazy(() => import("./pages/Home"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Suspense fallback={<span>Loading...</span>}>
        <Home />
      </Suspense>
    </div>
  )
}

export default App
