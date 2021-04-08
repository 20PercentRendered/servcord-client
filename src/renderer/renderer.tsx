/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThemeManager from './modules/ThemeManager';
import WindowGlobals from './windowGlobalManager';
import GuildSidebar from './elements/GuildSidebar';
import { GuildIconButton } from './elements/GuildButton';
import ConnectionManager from './modules/ConnectionManager';
import App from './App';

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Spinner = require('react-spinkit');
// do not convert to import, it will break
/* eslint-enable @typescript-eslint/no-var-requires */
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

WindowGlobals.set('ThemeManager', new ThemeManager());
WindowGlobals.set('ConnectionManager', new ConnectionManager());
ReactDOM.render(
  <App />,
  document.getElementById('app-mount'),
  () => {
    WindowGlobals.get<ThemeManager>('ThemeManager').SetDarkTheme();
  },
);
