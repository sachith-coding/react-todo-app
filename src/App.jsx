import { useEffect, useState } from 'react'
import styles from './style.module.css'
import TodoItem from './components/TodoItem'
import TodoDetail from './components/TodoDetail'
import { Skeleton } from '@mui/material'


function App() {

  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [todoDetails, setTodoDetails] = useState(null)

  function getSingleTodoItem(todoItem) {
    try 
    {
      if (todoItem) 
      {
        setTodoDetails(todoItem)
        setOpenDialog(true)
      }
      else 
      {
        setTodoDetails(null)
        setOpenDialog(false)
      }
    }
    catch (error) {
      console.log(error);
    }
  }

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

  if(loading)
    return <Skeleton variant='rectangular' width={650} height={650} />

  return (
    <>
      <div className={styles.mainWrapper}>
        <h1 className={styles.headerTitle}>Simple Todo App</h1>
        <div className={styles.todoListWrapper}>
        {
          todoList && todoList.length > 0 ? 
          todoList.map(todoItem => (
          <TodoItem key={todoItem.id} 
                    item={todoItem} 
                    getSingleTodoItem={getSingleTodoItem} /> )) : null
        }
        </div>
        <TodoDetail openDialog={openDialog} 
                    todoDetails={todoDetails}
                    setOpenDialog={setOpenDialog} />
      </div>
    </>
  )
}

export default App
