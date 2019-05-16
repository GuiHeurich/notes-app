(function(exports) {
  function HTMLupdate() {
    var notelist = new NoteList();
    var controller = new NotesController(notelist);

    assert.contains(
      controller.updateHTML(),
      "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
    );
  }
  //
  // function MockUpdate() {
  //   var notelist = new NoteList();
  //   var controller = new NotesController(notelist);
  //   controller.updateHTML();
  //
  //   assert.contains(
  //     document.getElementById("app").innerHTML,
  //     "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
  //   );
  // }

  HTMLupdate();
  // MockUpdate();
})(this);
