import * as React from 'react';

class TextBoxProps {
  disabled?: boolean;

  onChange: React.ChangeEventHandler
}
type TextBoxState = {
    value: string
}
export class TextBox extends React.Component<TextBoxProps, TextBoxState> {
  constructor(props: TextBoxProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { onChange, disabled } = this.props;
    return (
      <div style={{
        flexGrow: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
      >
        <input
          type="text"
          disabled={disabled}
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            transition: 'border-color .2s',
            backgroundColor: 'rgba(0, 0, 0, 0.17)',
            padding: '10px',
            height: '40px',
            fontSize: '16px',
            boxSizing: 'border-box',
            width: '100%',
            borderRadius: '4px',
            outline: 0,
            color: 'white',
          }}
          onChange={((ev) => {
            this.setState({ value: ev.target.value });
            onChange(ev);
          })}
        />
      </div>
    );
  }
}
class NamedTextBoxProps extends TextBoxProps {
  name: string;
}
export class NamedTextBox extends React.Component<NamedTextBoxProps, TextBoxState> {
  constructor(props: NamedTextBoxProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { onChange, disabled, name } = this.props;
    return (
      <div>
        <h5
          style={{ 
            marginBottom: '8px', 
            fontSize: '12px', 
          }}
          className="header"
        >
          {name}
        </h5>
        <TextBox
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    );
  }
}
