function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}

var d = new Date();
var e = formatDate(d);

var selector = document.getElementById('divid');
var div = selector.appendChild(document.createElement('h2'));
div.innerHTML = e;


function toggleClass(element, className){
  if (!element || !className){
    return;
  }

  var classString = element.className, nameIndex = classString.indexOf(className);
  if (nameIndex == -1) {
    classString += ' ' + className;
  }
  else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
  }
  element.className = classString;
}

document.getElementById('popup-btn').addEventListener('click', function() {
  toggleClass(document.getElementById('popup-washer'), 'popup-add-wash-visible');
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 17,
    scrollwheel: false,
    center: {lat: 49.839683, lng: 24.029717}
  });
  var geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder, map2);

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map2);
  });
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
});

document.getElementById('remove-popup').addEventListener('click', function() {
  toggleClass(document.getElementById('popup-washer'), 'popup-add-wash-visible');
  });

// mailer









