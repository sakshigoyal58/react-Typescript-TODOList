import '../CSS/InputText.css';
import { useState } from 'react';
import React from 'react';

interface Props {
    getToDoTask : (task:string) => void;
}

const InputText : React.FC<Props>= ({getToDoTask}) =>
{
    
    const [taskValue, setTaskValue] = useState<string>('');
    const [isInputValid, setInputValidation] = useState<boolean>(true);


    const textHandler =  (event: React.ChangeEvent<HTMLInputElement>)  =>
    {
        setTaskValue(event.target.value);
    }

    const submitHandler = (event : React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();

        if(taskValue === '')
            setInputValidation(false);
        else
        {
            setInputValidation(true);
            getToDoTask(taskValue);
            setTaskValue('');
        }
    }


    return(
        <form className="input" onSubmit={submitHandler} >
            <input type = 'text' placeholder="Enter the task" className='input__box' 
            value={taskValue} onChange={textHandler} ></input>
            <button type='submit' className='input_submit'>ADD</button>
            { !isInputValid && <h1>Task input cannot be empty</h1>}
        </form>
    );
}

export default InputText;