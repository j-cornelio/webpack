import './style.css';
import { cube } from './math.js';
import printMe from './print.js';

function component() {
  var element = document.createElement('pre');
 
  element.innerHTML = [
     'YO webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

 element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }