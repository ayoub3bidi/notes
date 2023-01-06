import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import { useLocalStorage } from "./hooks/useLocalStorage"
import NewNote from "./NewNote"
import { RawNote } from "./types/RawNote"
import { Tag } from "./types/Tag"

function App() {
  // const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  // const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
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
