$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#postcard").show();

    event.preventDefault();
  });
});
