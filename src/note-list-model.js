function NoteList() {
  this.notes = ["New note text"];
}

var noteToReturn;

NoteList.prototype.all = function() {
  this.notes.forEach(function(note) {
    noteToReturn = note;
  });
  return noteToReturn;
};
