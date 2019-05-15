(function(exports) {
  function NoteListView() {
    this.noteLists = [];
  };

  NoteListView.prototype.createNoteList = function() {
    var notelist = new NoteList();
    this.noteLists.push(notelist);
    return notelist;
  };

  NoteListView.prototype.displayNotes = function () {
    var notesHTML = this.noteLists;
    return `<ul><li><div>${notesHTML[0].all()}</div></li></ul>`;
  };

  exports.NoteListView = NoteListView;

})(this)
