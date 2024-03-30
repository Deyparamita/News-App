import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'
import NewsItem from './Components/NewsItem'
import './App.css'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <NewsItem/>
    </>
  )
}

export default App
