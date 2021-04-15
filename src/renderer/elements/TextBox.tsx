import * as React from 'react';

class TextBoxProps implements React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Do not set className. Use extraClasses instead.
   * Doesn't actually throw anything. Maybe. 
   * @throws HorriblePersonException
   * @private
   */
  className?: string
  
  type?: string

  /**
   * Extra classes for this element. 
   * Needs to be a list of classes or an empty string, 
   * because setters cannot be optional.
   * @readonly
   */
  public set extraClasses(v : string) {
    this.className += v;
  }
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
    return (
      <div style={{
        flexGrow: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
      >
        <input
          className="textBox" 
          type="text"
          {... this.props}
          onChange={((ev) => {
            this.setState({ value: ev.target.value });
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
    const { name } = this.props;
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
          {... this.props}
        />
      </div>
    );
  }
}
