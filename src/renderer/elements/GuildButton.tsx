import * as React from 'react';
import { Server } from '_/main/placeholders';

type GuildIconButtonProps = {
  iconSrc: string
  name: string
  id: string
  server?: Server
  onClick?: React.MouseEventHandler
}
// eslint-disable-next-line spaced-comment
//TODO: make deform effect
export class GuildIconButton extends React.Component<GuildIconButtonProps> {
  render() {
    const { iconSrc, name, onClick } = this.props;
    return (
      <button
        type="button"
        style={{
          display: 'flex',
          padding: 0,
          border: 0,
          marginBottom: 8,
          width: '48px',
          height: '48px',
          outline: 'none',
          alignItems: 'center',
          background: 'transparent',
        }}
        className="guildIconButton guildButton"
        onClick={onClick}
      >
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
      </button>
    );
  }
}
type GuildButtonProps = {
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
}
export class GuildButton extends React.Component<GuildButtonProps> {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, style, onClick } = this.props;
    return (
      <button
        type="button"
        style={{
          padding: 0,
          border: 0,
          marginBottom: 8,
          outline: 'none',
          alignItems: 'center',
          background: 'transparent',
        }}
        className="guildButton"
        onClick={onClick}
      >
        <div style={style} className="guildButton">
          {children}
        </div>
      </button>
    );
  }
}
