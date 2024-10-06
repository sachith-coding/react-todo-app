import { useEffect, useState } from 'react'
import styles from './style.module.css'
import TodoItem from './components/TodoItem'


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
      <div className={styles.mainWrapper}>
        <h1 className={styles.headerTitle}>Simple Todo App</h1>
        <div className={styles.todoListWrapper}>
        {
          todoList && todoList.length > 0 ? todoList.map(todoItem => (<TodoItem key={todoItem.id} item={todoItem} /> )) : null
        }
        </div>
      </div>
    </>
  )
}

export default App
