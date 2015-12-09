// -------- JQUERY ----------

$( document ).ready( function() {

  var search = document.getElementById('response');

  service = new google.maps.places.PlacesService(search);

  $('#submitButton').click(function() {
    var terms = ($('#search_terms').val());
    service.textSearch({query: terms}, function(response) {
      console.log(response);
      printData(response);
    // $('#pic').attr('src', 'https://lh4.googleusercontent.com/-Sgn1bg9UVbE/UzqsYtYhYyI/AAAAAAAAEAI/KWF4wsFhFfI/k/');
  });
  });

  var printData = function(data) {
    data.forEach(function(place) {

      $('#response').append([place.name, place.rating, place.formatted_address].join(', ') + '<br />');
    });
  };

});