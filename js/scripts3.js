$(function (){
  $("#blanks form").submit(function(event){
    var foodInput = $("input#food").val();
    var songInput = $("input#song").val();
    var movieInput= $("input#movie").val();
    var kardashianInput = $("select#kardashian").val();
    var baldwinInput = $("select#baldwin").val();

    $(".food").text(foodInput);
    $(".song").text(songInput);
    $(".movie").text(movieInput);
    $(".kardashian").text(kardashianInput);
    $(".baldwin").text(baldwinInput);

    $("#favorites").show();

    event.preventDefault();
  });
});
