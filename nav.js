(function(){

  var color = 0;
  var colors = ['#465eab', '#e6c622', '#ea473b']
  var x = document.getElementsByClassName('questionBorder')
  var y = document.getElementsByClassName('questionBackground')


  for (i = 0; i < x.length; i++) {
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


  for (i = 0; i < x.length; i++) {
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


})()
