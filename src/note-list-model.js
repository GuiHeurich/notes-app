function NoteList() {
  this.notes = [];
}

var noteToReturn;

NoteList.prototype.all = function() {
  this.notes.forEach(function(note) {
    noteToReturn = note.text;
  });
  return noteToReturn;
};

NoteList.prototype.createNote = function(text) {
  var note = new Note(text);
  this.notes.push(note);
};
