import { useState } from 'react'
import './TaskInput.css'

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        className="task-input__field"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="新しいタスクを入力..."
        autoFocus
      />
      <button
        className="task-input__btn"
        type="submit"
        disabled={!value.trim()}
      >
        追加
      </button>
    </form>
  )
}

export default TaskInput
