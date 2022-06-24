import React, {useState} from 'react';
import CardTodo from './components/cardTodo';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleSubmit = (e) => {
    if (todo === '') {
      //alert("Insert a task!");
      e.preventDefault();
      return false;
    }

    const newTodo = { id: Math.floor(Math.random() * 100), todo: todo, isCompleted: false }; 
    setTodos([...todos, newTodo]);
    setTodo("");
    
    e.preventDefault();
    e.target.reset();
  }
  
  
  return (
    <div className="text-center flex flex-col min-h-screen">
      <header className="bg-dark py-5 fixed z-50 w-full">
        <a href="/" className="text-3xl font-bold text-light">Todo List App</a>
      </header>

      <main className="bg-light text-dark flex-grow pt-32 pb-5">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            onChange={(e) => {setTodo(e.target.value)}}
            placeholder="Todo..." 
            className="border-2 border-primary rounded-md py-3 px-2 mr-5 w-1/2"
            />
          <input 
            type="submit" 
            value="Submit"
            className="bg-primary text-light py-3 px-5 rounded-md cursor-pointer"
          />
        </form>
        
        <CardTodo todos={todos} setTodos={setTodos} />
      </main>
      

      <footer className="bg-dark text-light py-2">
        <p>Made with ♥ by Hendrie Ramdhani</p>
      </footer>
    </div>
  );
}

export default App;
