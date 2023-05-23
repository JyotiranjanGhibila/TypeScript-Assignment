import React, { useState } from 'react'
import {notes} from './Note-data'
import "./Styles.css"
import AddNote from './AddNote'
import { noteTypes } from './Note-type'

const Main = () => {
  const [allnote,setAllnote] = useState(notes)

  type AddNoteType={
    addNote: (note: noteTypes) => void
  }
  //anotation with noteTypes
  const addNote=(note:noteTypes)=>{
    setAllnote([note,...allnote])
  }
  return (
    <div className='note-con'>
      <h2>Notes App</h2>
      <AddNote addNote={addNote}/>
      {
        allnote?.map((el,i)=>{
            return(
                <div key={el.id} className={`note-box ${el.priority}`}>
                 <span>{el.text}</span>
                </div>
            )
        })
      }
    </div>
  )
}

export default Main