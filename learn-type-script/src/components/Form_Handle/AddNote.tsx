import React, { useState } from "react";
import { Priority, noteTypes } from "./Note-type";
import { v4 as uuidv4 } from 'uuid';

type AddNoteType={
    addNote: (note: noteTypes) => void
}

const AddNote = (props:AddNoteType) => {
  const [text, setText] = useState("");
  
  //generic <Priority>
  const [priority,setPriority] = useState<Priority>('low')
  const handleInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();

    props.addNote({
        text,
        id:uuidv4(),
        priority
    })
    setText("")
    setPriority("low")
  }
  const handlePrior=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    //type asertion e.g as Priority
  setPriority(e.target.value as Priority)
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleInp} value={text}/>
        <select onChange={handlePrior} value={priority}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default AddNote;
