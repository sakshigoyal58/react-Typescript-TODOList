import React from "react";
import Task from "./Task";
import '../CSS/InputText.css';
import { ToDoModel } from "../Model/ToDoModel";

interface Props {
    taskList : ToDoModel[];
    deleteTask : (id : number) => void;
}

const TaskList : React.FC<Props> = ({taskList, deleteTask}) =>
{
    const deleteTaskHandler = (id:number ) =>
    {
        deleteTask(id);
    }
    return(
        <div className="container">
            <div className="todos">
                 <span className="todos__heading"> Active Tasks</span>
                {taskList.map((task) => <Task todo = {task} key = {task.id} deleteTaskHandler ={deleteTask}></Task>)}
            </div>
            <div className="todos remove">
                <span className="todos__heading">Completed Tasks</span>
            </div>
            
        </div>
    )
}

export default TaskList;