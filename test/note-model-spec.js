function testTextStoredAsPropertyOfNote() {
  var note = new Note();
  assert.isTrue(note.text === "New note text");
};

testTextStoredAsPropertyOfNote();
