import * as React from 'react';
import { GuildButton } from '../elements/GuildButton';
import GuildSidebar from '../elements/GuildSidebar';
import Icons from '../icons';
import Logger from '../modules/Logger';

export default class Main extends React.Component {
  render() {
    return (
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
    );
  }
}
