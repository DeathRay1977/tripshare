$( document ).ready( function() {

  var search = document.getElementById('response');
  // terms = $('#search_terms').text();

  service = new google.maps.places.PlacesService(search);

  $('#submitButton').click(function() {
    console.log($('div').text())
    // console.log(terms);
    // service.textSearch({query:terms}, function(response) {
    //   console.log(response);
    // });
  });

});