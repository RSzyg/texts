import { EditorState } from './EditorState';
import { initInputEvents } from './Input';

export class EditorView {
  editable = true;

  focused = false;

  readonly dom: HTMLElement;

  state: EditorState;

  constructor(mount: HTMLElement, state?: EditorState) {
    if (!state) {
      state = new EditorState();
    }
    this.state = state;
    this.dom = document.createElement('div');
    mount.append(this.dom);

    this.setEditable(true);
    this.setFocused(false);

    initInputEvents(this);
  }

  setEditable(editable: boolean) {
    this.editable = editable;
    this.dom.contentEditable = `${editable}`;
  }

  setFocused(focused: boolean) {
    this.focused = focused;
    if (focused) {
      this.dom.focus();
    } else {
      this.dom.blur();
    }
  }
}
