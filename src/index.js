import React from 'react'
import ReactDom from 'react-dom';
import LikeButton from './my-react-component';

const domContainer = document.querySelector('#like_button_container');
ReactDom.render(React.createElement(LikeButton), domContainer);