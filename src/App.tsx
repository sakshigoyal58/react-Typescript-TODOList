import React from 'react';
import './App.css';
import InputText from './Components/InputText';
import TaskList from './Components/TaskList';
import { useState } from 'react';
import { ToDoModel } from './Model/ToDoModel';


const App : React.FC = () =>
{
  const[todoList, updateTodoList] = useState<ToDoModel[]>([]);

  const getTodohandler = (taskValue: string) =>
  {
      updateTodoList([...todoList, {id : Date.now(), task : taskValue, isDone : false}]);
  }

  const deleteTaskHandler = (id: number) =>
  {
    updateTodoList( current => current.filter(
      list => {return list.id != id}
      ));
  }

  

   return(
       <div className='App'>
       <span className='heading'> Taskify</span>
       <InputText getToDoTask = {getTodohandler}></InputText>
      { todoList.length > 0 &&
       <TaskList taskList = {todoList} deleteTask = {deleteTaskHandler}></TaskList>}
       </div>            
   );
}

export default App;
