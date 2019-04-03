

var btn= document.getElementsByTagName('button');


btn[0].addEventListener('click', function(event) {
  alert('Произошло событие' + event.type + 'на элементе' + event.target);
});
