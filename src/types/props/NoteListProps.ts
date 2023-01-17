import { SimplifiedNote } from "../SimplifiedNote"
import { Tag } from "../Tag"

export type NoteListProps = {
    availableTags: Tag[]
    notes: SimplifiedNote[]
    onDeleteTag: (id: string) => void
    onUpdateTag: (id: string, label: string) => void
}