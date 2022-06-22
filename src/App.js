function App() {
  return (
    <div className="text-center flex flex-col h-screen">
      <header className="bg-dark py-5 fixed z-50 w-full">
        <a href="" className="text-3xl font-bold text-light">Todo List App</a>
      </header>

      <main className="bg-light text-dark flex-grow pt-32">
        <form>
          <input 
            type="text" 
            name="todo" 
            placeholder="Todo..." 
            className="border-2 border-primary rounded-md py-3 px-2 mr-5 w-1/2"
          />
          <input 
            type="submit" 
            value="Submit"
            className="bg-primary text-light py-3 px-5 rounded-md cursor-pointer"
          />
        </form>
      </main>
      

      <footer className="bg-dark text-light py-2">
        <p>Made with ♥ by Hendrie Ramdhani</p>
      </footer>
    </div>
  );
}

export default App;
