(function(exports) {
  function NoteListView(notelist) {
    this.noteList = notelist;
  }

  NoteListView.prototype = {
    display: function() {
      var notes = this.noteList.all();
      if (notes.length === 0) {
        return "<ul><li><div></div></li></ul>";
      } else {
        return [
          "<ul>",
          notes
            .map(function(note) {
              return "<li><div>" + note.getText() + "</div></li>";
            })
            .join(""),
          "</ul>"
        ].join("");
      }
    }
  };

  exports.NoteListView = NoteListView;
})(this);
