$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark!!!</li>");
  });

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!!!</li>");
  });

});
