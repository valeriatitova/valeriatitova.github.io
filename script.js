// lottie
var svgContainer = document.getElementById('test');
var animItem = document.getElementById('test');

var animItem = lottie.loadAnimation(
  {
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://valeriatitova.github.io/tesst.json' // the path to the animation json);
}
);
alert('!!');

var btn= document.getElementsByTagName('button');


btn[0].addEventListener('click', function(event) {
  var target = event.target;
  target.style.display = 'none';
  //alert('Произошло событие  ' + event.type + ' на элементе  ' + event.target);
});
