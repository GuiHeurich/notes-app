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
              return reduceNote(note.getText());
            })
            .join(""),
          "</ul>"
        ].join("");
      }

      function reduceNote(noteText) {
        var wholenote = noteText;
        var reducednote = [];
        for (i = 0; i < 20; i++) {
          reducednote.push(wholenote.charAt(i));
        }
        return "<li><div>" + reducednote.join("") + "...</div></li>";
      }
    }
  };

  exports.NoteListView = NoteListView;
})(this);
