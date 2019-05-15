function returnsAStringOfHTML() {
  var notelistview = new NoteListView();
  var notelist = notelistview.createNoteList();
  notelist.createNote("Favourite food: pesto");
  assert.isTrue(notelistview.displayNotes() === "<ul><li><div>Favourite food: pesto</div></li></ul>");
}

returnsAStringOfHTML();
