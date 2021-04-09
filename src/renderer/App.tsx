import {
  BrowserRouter, Link, Route, Switch, 
} from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GuildSidebar from './elements/GuildSidebar';
import { GuildButton } from './elements/GuildButton';
import Icons from './icons';
import Logger from './modules/Logger';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-mount">
        <GuildSidebar guilds={[
          {
            id: 'placeholder', 
            icon: 'https://raw.githubusercontent.com/20PercentRendered/servcord-client/new-client/src/assets/placeholderIcon.png', 
            name: 'Placeholder',
          },
        ]}
        >
          <GuildButton
            onClick={() => { Logger.default.info('onClick() settings'); }}
          >
            <svg
              style={{
                width: '24',
                height: '24',
                pointerEvents: 'none',
              }}
              viewBox="0 0 24 24"
            >
              <path fill="#43b581" d={Icons.GEAR} />
            </svg>
          </GuildButton>
          <GuildButton
            onClick={() => { Logger.default.info('onClick() add guild'); }}
          >
            <svg
              style={{
                width: '24',
                height: '24',
                pointerEvents: 'none',
              }}
              viewBox="0 0 24 24"
            >
              <path fill="#43b581" d={Icons.PLUS} />
            </svg>
          </GuildButton>
        </GuildSidebar>
      </div>
    );
  }
}
