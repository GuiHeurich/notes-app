function returnsAllTheNotesStoredInTheArray() {
  var notelist = new NoteList();
  notelist.createNote("New note text");
  assert.isArray(notelist.all());
}

function createsAndStoresASingleNote() {
  var notelist = new NoteList();
  notelist.createNote("New note text");
  assert.isTrue(notelist.all()[0] === "New note text");
}

returnsAllTheNotesStoredInTheArray();
createsAndStoresASingleNote();
