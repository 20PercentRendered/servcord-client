/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeManager from './modules/ThemeManager';
import WindowGlobals from './windowGlobalManager';
import GuildSidebar from './elements/GuildSidebar';
import { GuildIconButton } from './elements/GuildButton';
import ConnectionManager from './modules/ConnectionManager';
import App from './App';

WindowGlobals.set('ThemeManager', new ThemeManager());
WindowGlobals.set('ConnectionManager', new ConnectionManager());
ReactDOM.render(
  <div className="app fill">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('app-mount'),
  () => {
    WindowGlobals.get<ThemeManager>('ThemeManager').SetDarkTheme();
  },
);
