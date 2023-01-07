import "bootstrap/dist/css/bootstrap.min.css"
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import { useLocalStorage } from "./hooks/useLocalStorage"
import NewNote from "./NewNote"
import { RawNote } from "./types/RawNote"
import { NoteData } from "./types/NoteData"
import { Tag } from "./types/Tag"
import { v4 as uuidV4 } from "uuid"
import { Home } from "./Home"

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }]
    })
  }

  function addTag(tag: Tag) {
    setTags(prevTags => {
      return [...prevTags, tag]
    })  
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={
          <Home
            notes={notesWithTags}
            availableTags={tags}        
          />
        } />
        <Route path="/new" element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Show</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
