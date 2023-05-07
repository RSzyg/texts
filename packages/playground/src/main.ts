import { EditorState, EditorView } from 'texts';

const state = new EditorState();
const view = new EditorView(document.querySelector('#app')!, state);

console.log(state, view);
