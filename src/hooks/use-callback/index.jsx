import React, { useState, useCallback, useEffect } from 'react';

// Add these missing components:
const TodoInput = React.memo(({ onAdd }) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
});

const TodoList = React.memo(({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
});

// Mock API (since you don't have the real one)
const mockApi = {
  getTodos: async (filter) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Return mock data
    const mockTodos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn useCallback', completed: true },
      { id: 3, text: 'Build a project', completed: false },
    ];
    
    if (filter === 'completed') {
      return mockTodos.filter(todo => todo.completed);
    }
    if (filter === 'active') {
      return mockTodos.filter(todo => !todo.completed);
    }
    return mockTodos;
  }
};

export const UseCallbackExample = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // ✅ Good use: Passed to memoized child
  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);
  
  // ✅ Good use: Used in useEffect
  const fetchTodos = useCallback(async () => {
    try {
      const data = await mockApi.getTodos(filter); // Changed from 'api' to 'mockApi'
      setTodos(data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  }, [filter]); // Changes when filter changes
  
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  
  // ❌ Not needed: Simple handler (but we'll keep it)
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };
  
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <TodoInput onAdd={addTodo} /> {/* Memoized child */}
      <TodoList todos={todos} />
      <button onClick={clearCompleted}>Clear Completed</button>
      <p>Total todos: {todos.length}</p>
    </div>
  );
};
