import { useState } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import AddTodo from './components/AddTodo'
import {TodoList} from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
