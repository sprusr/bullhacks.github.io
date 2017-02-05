(function(){
  var colors = ['#465eab', '#e6c622', '#ea473b']
  var x = document.getElementsByClassName('questionBorder')
  var y = document.getElementsByClassName('questionBackground')
  var buttons = document.getElementsByClassName('btn')


  for (var i = 0; i < x.length; i++) {
      var rotate = Math.floor((Math.random() - 0.5) * 15)
      var ranColor = Math.floor(Math.random() * 3)
      x[i].style.borderColor = colors[ranColor];
      x[i].style.transform = "rotate("+ rotate +"deg)"
  }
})()

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044}
  var map = new google.maps.Map(document.getElementById('location'), {
    draggable: false,
    scrollwheel: false,
    panControl: false,
    zoom: 14,
    center: {lat: 52.4806704 , lng: -1.8926539},
  })
  var marker = new google.maps.Marker({
    position: {lat:52.4832336 , lng: -1.8843293},
    map: map
  })
}
