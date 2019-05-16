(function(exports) {
  function returnsArray() {
    var notelist = new NoteList();
    notelist.create();
    assert.isArray(notelist.all());
  }

  function returnsANote() {
    var notelist = new NoteList();
    notelist.create("New note text");
    assert.isTrue(notelist.all()[0].text === "New note text");
  }

  returnsArray();
  returnsANote();
})(this);
