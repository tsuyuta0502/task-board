import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const remaining = tasks.filter((t) => !t.completed).length

  return (
    <div className="app">
      <div className="board">
        <header className="board-header">
          <h1 className="board-title">📋 タスクボード</h1>
          <p className="board-subtitle">
            {tasks.length === 0
              ? 'タスクを追加してください'
              : `${remaining} / ${tasks.length} 件が未完了`}
          </p>
        </header>

        <TaskInput onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  )
}

export default App
