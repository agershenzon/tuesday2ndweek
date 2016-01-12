$(document).ready(function() {
  $('#blanks form').submit(function(event){

    var nameInput = $("input#Name").val();
    var streetInput = $("input#Street").val();
    var cityInput = $("input#City").val();
    var stateInput = $("input#State").val();
    var zipInput = $("input#Zip").val();


    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $('#jumbotron').show();
    event.preventDefault();
});
});
