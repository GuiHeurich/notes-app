function NoteText() {
  var note = new Note("New note text");
  assert.isTrue(note.text === "New note text");
}

function GetText() {
  var note = new Note("New note text");
  assert.isTrue(note.getText() === "New note text");
}

NoteText();
GetText();
