import React from 'react'
import { Icon } from '@iconify/react';

const cardTodo = ({todos, setTodos, setEdit}) => {
  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      }),
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section id="todoList" className="mt-10">
      <h2 className="text-xl font-semibold text-dark">Todo</h2>
      {
        todos.map((todo) => {
          return (
            <div key={todo.id} className="flex flex-col text-left px-5">
              <div className="bg-primary text-white rounded-lg p-6 shadow-xl w-full max-w-3xl mx-auto my-2 flex justify-between gap-10">
                <h5 className={(todo.isCompleted) ? "line-through" : ""}>{(todo.todo) && todo.todo}</h5>
                <div className="button-container flex gap-2">
                  <Icon 
                    icon="akar-icons:check-box" 
                    width="24" 
                    height="24" 
                    className={(todo.isCompleted) ? "hidden" : "hover:text-green-500 cursor-pointer"} 
                    onClick={() => {handleCompleted(todo)}}
                  />
                  <Icon 
                    icon="akar-icons:edit" 
                    width="24" 
                    height="24" 
                    className={(todo.isCompleted) ? "hidden" : "hover:text-yellow-400 cursor-pointer"}
                    onClick={() => {handleEdit(todo)}}
                  />
                  <Icon 
                    icon="akar-icons:trash-can" 
                    width="24" 
                    height="24" 
                    className='hover:text-red-600 cursor-pointer' 
                    onClick={() => {handleDelete(todo)}}
                  />
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default cardTodo