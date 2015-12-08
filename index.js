$( document ).ready( function() {

  var search = document.getElementById('response');
  terms = $('input:text').val();

  service = new google.maps.places.PlacesService(search);

  $('#submitButton').click(function() {
    console.log(terms);
    service.textSearch({query:terms}, function(response) {
      console.log(response);
    });
  });

});