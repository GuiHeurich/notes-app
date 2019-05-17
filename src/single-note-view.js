(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype = {
    displayHTML: function() {
      var self = this;
      return ["<ul><li><div>", self.note.getText(), "</div></li></ul>"].join(
        ""
      );
    }
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
