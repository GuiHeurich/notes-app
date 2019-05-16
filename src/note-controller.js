(function(exports) {
  function NotesController(notelist) {
    notelist.create("Favourite drink: seltzer");
    this.notelistview = new NoteListView(notelist);
  }

  NotesController.prototype = {
    updateHTML: function() {
      var html = this.notelistview.display();
      return html;
    }
  };

  exports.NotesController = NotesController;
})(this);

window.onload = function() {
  var notelist = new NoteList();
  var controller = new NotesController(notelist);
  document.getElementById("app").innerHTML = controller.updateHTML();
};
