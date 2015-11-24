$(document).ready(function() {

    var i;
    var listItem= "";

    for (var i =1; i<101; i++) {

      listItem += "<li>";

      if(i%15===0) {
        listItem += ("fizzbuzz");
      }

      else if(i%3===0) {
        listItem += ("fizz");
      }

      else if(i%5===0) {
        listItem += ("buzz");
      }

      else {
        listItem += (i);
      }

      listItem += "</li>";
}

document.getElementById("list").innerHTML += listItem;
  

});





