

var btn= document.getElementsByTagName('button');


btn[0].addEventListener('click', function(event) {
  var target = event.target;
  target.style.display = 'none';
  //alert('Произошло событие  ' + event.type + ' на элементе  ' + event.target);
});
