import _ from 'lodash';
import React from 'react'
import ReactDom from 'react-dom';
import LikeButton from './my-react-component';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

const domContainer = document.querySelector('#like_button_container');
ReactDom.render(React.createElement(LikeButton), domContainer);