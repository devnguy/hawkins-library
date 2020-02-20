import { useState, useEffect, useReducer } from 'react'


const NoteApp = () => {
  const notesReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_NOTES':
        return action.notes
      case 'ADD_NOTE':
        return [
          ...state,
          { title: action.title, body: action.body }
        ]
      case 'REMOVE_NOTE':
        return state.filter((note) => note.title !== action.title )
      default:
        return state
    }
  }

  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>Notes</h1>

      {/* Render state to page */}
      {notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}

      <p>Add note</p>
      <form onSubmit={addNote}>

        <label>Title</label>
        <input 
          value={title} 
          onChange={(e) => {setTitle(e.target.value)}} 
        />

        <label>Body</label>
        <input 
          value={body} 
          onChange={(e) => {setBody(e.target.value)}} 
        />

        <button>add note</button>

      </form>

    </div>
  )
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('setting up effect running on notsdfe');
    
    return () => {
      console.log('cleaning up use EFFECT');
    }
  }, [])


  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

//   const [count, setCount] = useState(0)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.log('this should only run once');
//   }, [])

//   useEffect(() => {
//     console.log('use effect ran');
//     document.title = count
    
//   }, [count])

//   return (
//     <div>
//       <p>The {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   )
// }

export default NoteApp