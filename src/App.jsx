import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React core concepts 2</h3>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
    </>
  )
}

export default App
