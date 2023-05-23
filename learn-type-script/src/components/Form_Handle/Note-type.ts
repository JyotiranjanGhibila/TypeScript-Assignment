export type Priority='high' | 'medium' | 'low'
export type noteTypes={
    id:string,
    text:string,
    priority?:Priority
}

export type NoteTextType={
    id:string,
    text:string
    priority:Priority
}