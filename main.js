// this creates a typing effect   
$(function(){
  $(".home-intro").typed({
      strings: ["I am a designer :)", "I am a developer :)"],
      typeSpeed: 100,
  });
});
       
// this initializes the google map API
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, { 
    center: {lat: 44.540, lng: -78.546},
    zoom: 8
  });
}

// this gives the effects to the portfolio
$(function(){
  $("#elastic_grid_demo").elastic_grid({
    'items' :
    [
      
      {
        'title'          : 'Title #1',
        'description'    : 'Description goes here',
        'thumbnail'      : ['img/jits.jpg', 'img/surf5.jpg'],
        'large'          : ['img/jits.jpg', 'img/surf5.jpg'],
        'button_list'    : 
        [
          {'title': 'Demo', 'url': 'http://tip-it.tech'},
          {'title': 'Download', 'url': 'http://github.com/dfmmalaw'}
        ]
      },
      
      {
        'title'          : 'Title #2',
        'description'    : 'Description goes here',
        'thumbnail'      : ['img/surf4.jpg', 'img/surf3.jpg'],
        'large'          : ['img/surf4.jpg', 'img/surf3.jpg'],
        'button_list'    : 
        [
          {'title': 'Demo', 'url': 'http://tip-it.tech'},
          {'title': 'Download', 'url': 'http://github.com/dfmmalaw'}
        ]
      },
      
    ]
  });
});

// $(document).ready(function (){

//   // create a LatLng object containing the coordinate for the center of the map
//   var latlng = new google.maps.LatLng(-33.86455, 151.209);

//   // prepare the map properties
//   var options = {
//     zoom: 15,
//     center: latlng,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     navigationControl: true,
//     mapTypeControl: false,
//     scrollwheel: false,
//     disableDoubleClickZoom: true
//   };

//   // initialize the map object
//   var map = new google.maps.Map(document.getElementById('google_map'), options);

//   // add Marker
//   var marker1 = new google.maps.Marker({
//     position: latlng, map: map
//   });

//   // add listener for a click on the pin
//   google.maps.event.addListener(marker1, 'click', function() {
//     infowindow.open(map, marker1);
//   });

//   // add information window
//   var infowindow = new google.maps.InfoWindow({
//     content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
//   });  
// });

