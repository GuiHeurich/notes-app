(function(exports) {
  function SingleNoteTest() {
    var note = new Note("Favourite drink: seltzer");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(note.getText() === "Favourite drink: seltzer");
  }

  function SingleNoteDisplaysHTML() {
    var note = new Note("Favourite drink: seltzer");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(
      singleNoteView.displayHTML() ===
        "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
    );
  }

  SingleNoteTest();
  SingleNoteDisplaysHTML();
})(this);
