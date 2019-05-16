function NoNote() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.display() === "<ul><li><div></div></li></ul>");
}

function OneNote() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  notelist.create("Favourite food: pesto");
  assert.isTrue(
    notelistview.display() ===
      "<ul><li><div>Favourite food: pesto</div></li></ul>"
  );
}

function MultipleNotes() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  notelist.create("Favourite food: pesto");
  notelist.create("Favourite drink: ale");
  assert.isTrue(
    notelistview.display() ===
      "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: ale</div></li></ul>"
  );
}

NoNote();
OneNote();
MultipleNotes();
