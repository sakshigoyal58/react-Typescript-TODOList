import React, { useState } from 'react';
import '../CSS/InputText.css';
import { ToDoModel } from '../Model/ToDoModel';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
interface Props{
    todo : ToDoModel;
    deleteTaskHandler: (id : number) => void;
}
const Task: React.FC<Props> = ({todo, deleteTaskHandler}) =>
{

    const [isDone, setIsDone] = useState<boolean>(todo.isDone);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [taskText, updateTaskText] = useState<string>(todo.task);
    const [isTextValid, setTextValidation] = useState<boolean>(true);

    const doneHandler = (event : React.MouseEvent<SVGElement> ) =>
    {
        setIsDone(true);
    };

    const deleteHandler = (event : React.MouseEvent<SVGElement> ) =>
    {
        deleteTaskHandler(todo.id);
    };

    const editHandler = (event : React.MouseEvent<SVGElement>) =>
    {
        setIsEdit(true);
    };

    const editTextHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        updateTaskText(event.currentTarget.value);
    }

     const submitHandler = (event : React.FormEvent<HTMLFormElement>) =>
     {
         event.preventDefault();

         if(taskText === '')
            setTextValidation(false);
        else
        {
            setTextValidation(true);
            setIsEdit(false);
        }
     }

    return (
        <form key={todo.id} className='todos__single' onSubmit={submitHandler}>
            {
                isDone? <s className='todos__single--text'> {taskText} </s>:
                    ( isEdit ? 
                            <input type='text' value={taskText} onChange= {editTextHandler} />:
                            <span className='todos__single--text'>{taskText}</span>)
                    
            }
            {
                !isTextValid && <p>Please enter the valid task</p>
            }
            <React.Fragment>
                {!isDone && <span className='icon'> <AiFillEdit onClick={editHandler}/> </span>}
                <span className='icon'> <AiFillDelete onClick={deleteHandler}/> </span>
                <span className='icon'> <MdDone onClick={doneHandler}/>  </span>
            </React.Fragment>
        </form>
    );
}

export default Task;
