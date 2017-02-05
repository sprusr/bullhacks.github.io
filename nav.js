(function(){

  var color = 0;
  var colors = ['#465eab', '#e6c622', '#ea473b']
  var x = document.getElementsByClassName('questionBorder')
  var y = document.getElementsByClassName('questionBackground')
  var buttons = document.getElementsByClassName('btn')


  for (var i = 0; i < x.length; i++) {
      var parent = x[i].parentElement
      var rotate = Math.floor(Math.random() * 10) - 5 || Math.floor(Math.random() * 10) + 5
      var ranColor = Math.floor(Math.random() * 3)
      x[i].style.width = parent.clientWidth + 'px';
      x[i].style.height = parent.clientHeight + 'px';
      x[i].style.borderColor = colors[ranColor];
      x[i].style.transform = "rotate("+ rotate +"deg)"
      color += 1
      if (color > 2) {
        color = 0;
      }
  }


  for (var i = 0; i < y.length; i++) {
      var parent = y[i].parentElement
      var rotate = Math.floor(Math.random() * 10) - 5 || Math.floor(Math.random() * 10) + 5
      y[i].style.width = parent.clientWidth + 'px';
      y[i].style.height = parent.clientHeight + 'px';
      y[i].style.transform = "rotate("+ rotate +"deg)"
      color += 1
      if (color > 2) {
        color = 0;
      }
  }

  // for (var i=0; i < buttons.length; i++){
  //   var parent = y[i].parentElement
  //   y[i].style.width = parent.clientWidth + 'px';
  //   y[i].style.height= parent.clientHeight + 'px';
  //   y[i]
  // }





})()

function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('location'), {

        draggable: false,
        scrollwheel: false,
        panControl: false,
        zoom: 14,
        center: {lat: 52.4806704 , lng: -1.8926539},
      });
      var marker = new google.maps.Marker({
        position: {lat:52.4832336 , lng: -1.8843293},
        map: map
      });
    }
