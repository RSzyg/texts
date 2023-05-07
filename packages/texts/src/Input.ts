import { EditorView } from './EditorView';

const inputHandlers: {
  [eventName: string]: (view: EditorView, event: Event) => void;
} = {};

export function initInputEvents(view: EditorView) {
  for (let eventName in inputHandlers) {
    const handler = inputHandlers[eventName];
    view.dom.addEventListener(eventName, (event) => handler(view, event));
  }
}

inputHandlers.beforeinput = (view, _event) => {
  const event = _event as InputEvent;
  console.log(event);
  event.preventDefault();
};
