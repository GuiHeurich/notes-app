function testTextStoredAsPropertyOfNote() {
  var note = new Note("New note text");
  assert.isTrue(note.text === "New note text");
};

testTextStoredAsPropertyOfNote();
