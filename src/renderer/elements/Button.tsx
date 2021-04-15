import * as React from 'react';

export default class Button extends React.Component<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  render() {
    const { className } = this.props;
    return (
      <button
        type="button"
        {... this.props}
        className={
          ['button', className].join(' ')
        }
      />
    );
  }
}
