function returnsAllTheNotesStoredInTheArray() {
  var notelist = new NoteList();
  assert.isTrue(notelist.all() === "New note text");
}

returnsAllTheNotesStoredInTheArray();
