(function(exports) {
  function testTextStoredAsPropertyOfNote() {
    var note = new Note();

    if (note.text != "New note text") {
      throw new Error("Text not stored on note");
    }
  };

  testTextStoredAsPropertyOfNote();
})(this);
