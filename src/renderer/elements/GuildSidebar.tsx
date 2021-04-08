import * as React from 'react';
import { Guild } from '_/main/placeholders';
import { GuildIconButton } from './GuildButton';

type GuildSidebarProps = {
  guilds: Guild[];
}

export default class GuildSidebar extends React.Component<GuildSidebarProps> {
  addGuild(guild: Guild): void {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.guilds.push(guild);
  }

  render() {
    const { guilds, children } = this.props;
    const buttons: JSX.Element[] = new Array<JSX.Element>();
    guilds.forEach((value) => {
      buttons.push(
        <GuildIconButton 
          id={value.id} 
          name={value.name} 
          iconSrc={value.icon} 
          key={value.id}
        />,
      );
    });
    return (
      <nav className="wrapper guilds">
        <ul className="tree" role="tree">
          <div>
            {buttons}
            {children}
          </div>
        </ul>
      </nav>
    );
  }
}
