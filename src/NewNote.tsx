import NoteForm from './components/NoteForm'
import { NewNoteProps } from './types/props/NewNoteProps'

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default NewNote