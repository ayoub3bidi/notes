import { NoteData } from "../NoteData"
import { Tag } from "../Tag"

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>