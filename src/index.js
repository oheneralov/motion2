import React from 'react';
import ReactDOM from 'react-dom';
import Parser from './Parser.js';
import './index.css';

ReactDOM.render(<Parser type = "parrot2d"/>, document.getElementById('2dsimulation'));
ReactDOM.render(<Parser type = "parrot3d"/>, document.getElementById('3dsimulation'));
