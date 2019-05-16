function NoteList() {
  this.notes = [];
}

NoteList.prototype = {
  all: function() {
    return this.notes;
  },

  create: function(text) {
    this.notes.push(new Note(text));
  }
};
