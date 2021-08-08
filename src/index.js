import _ from 'lodash';
import printMe from './print';
import './trello.css'

function component() {
  const onediv = document.createElement('div');
  const btn = document.createElement('button');
  // onediv.id = 'content';
  // document.getElementsByTagName('body')[0].appendChild('#onediv');

  // Lodash now  imported by this script
  onediv.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  onediv.appendChild(btn);
  return onediv;
  
}

document.body.appendChild(component());