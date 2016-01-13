$(document).ready(function() {
  $('.form-horizontal').submit(function(event){

    var testInput = $("input#test").val();

    $(".uppercase").text(testInput.toUpperCase());


    event.preventDefault();
});
});
