import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardItem from './components/card-item'
import CardList from './components/card-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardItem/>
      <CardItem/>
      <CardItem/>
    </>
  )
}

export default App;
