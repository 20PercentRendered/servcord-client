/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';
import '_public/spinkit.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LoadingWave } from './loadingIcons';

function setTheme(theme: string) {
  document.getElementsByTagName('html')[0].dataset.theme = theme;
}
function setDarkTheme() {
  setTheme('dark');
}
function setBlackTheme() {
  setTheme('black');
}
function setLightTheme() {
  setTheme('light');
}
ReactDOM.render(
  <div className="app-mount">
    <LoadingWave />
    <button onClick={setDarkTheme} type="button">Dark</button>
    <button onClick={setBlackTheme} type="button">Black</button>
    <button onClick={setLightTheme} type="button">Light</button>
  </div>,
  document.getElementById('app-mount'),
  () => {
    setLightTheme();
  },
);
