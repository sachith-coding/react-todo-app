import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchDataFromAPI() {
    try {
      setLoading(true)
      const apiData = await fetch('https://dummyjson.com/todos')
      const result = await apiData.json()

      console.log(result);

      if (result?.todos && result?.todos.length > 0) 
      {
        setTodoList(result?.todos)
        setLoading(false)
      }
      else 
      {
        setTodoList([])
        setLoading(false)
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDataFromAPI()
  }, [])

  return (
    <>
      <div>
        <h1>
          Simple Todo App
        </h1>
      </div>
    </>
  )
}

export default App
