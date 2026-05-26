import './TaskItem.css'

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <label className="task-item__label">
        <input
          className="task-item__checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-item__checkmark" />
        <span className="task-item__text">{task.text}</span>
      </label>
      <button
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
        aria-label="タスクを削除"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
