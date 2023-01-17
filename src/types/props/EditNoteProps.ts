import { NoteData } from "../NoteData"
import { Tag } from "../Tag"

export type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}