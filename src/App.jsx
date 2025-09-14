import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  // Generate unique ID for new todos
  const generateId = () => {
    return Date.now() + Math.random();
  };

  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: generateId(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Calculate stats
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
        <div className="stats">
          <span>Total: {totalTodos}</span>
          <span>Active: {activeTodos}</span>
          <span>Completed: {completedTodos}</span>
        </div>
      </header>
      
      <main className="app-main">
        <AddTodo onAdd={addTodo} />
        <TodoList 
          todos={todos} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
      </main>
    </div>
  )
}

export default App
