import { NoteData } from "./NoteData";
import { Tag } from "./Tag";

export type NewNoteProps = {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
}