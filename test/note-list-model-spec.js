function returnsAllTheNotesStoredInTheArray() {
  var notelist = new NoteList();
  assert.isTrue(notelist.all() === "New note text");
}

function createsAndStoresASingleNote() {
  var notelist = new NoteList();
  notelist.createNote("New note text");
  assert.isTrue(notelist.all() === "New note text");
}

createsAndStoresASingleNote();
returnsAllTheNotesStoredInTheArray();
