import * as React from 'react';
import { Server } from '_/main/placeholders';

type GuildIconButtonProps = {
  iconSrc: string
  name: string
  id: string
  server?: Server
  onClick?: React.EventHandler<any>
}
// eslint-disable-next-line spaced-comment
//TODO: make deform effect
export class GuildIconButton extends React.Component<GuildIconButtonProps> {
  render() {
    const { iconSrc, name, onClick } = this.props;
    return (
      <GuildButton className="guildIconButton" onClick={onClick}>
        <img
          src={iconSrc}
          alt={name}
          style={
            { 
              padding: 0,
              display: 'block',
              width: '48px',
              borderRadius: '50%',
              height: '48px',
              pointerEvents: 'none',
            }
          }
        />
      </GuildButton>
    );
  }
}
type GuildButtonProps = {
  onClick?: React.EventHandler<any>
  className?: string
}
export class GuildButton extends React.Component<GuildButtonProps> {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, onClick, className } = this.props;
    return (
      <div
        role="button"
        tabIndex={0}
        className={(() => {
          if (className) {
            return `guildButton ${className}`;
          } 
          return 'guildButton';
        })()}
        onClick={onClick}
        onKeyUp={(ev) => {
          if (ev.key === 'enter') {
          // Cancel the default action, if needed
            ev.preventDefault();
            if (onClick) {
              onClick(ev);
            }
          }
        }}
      >
        {children}
      </div>
    );
  }
}
