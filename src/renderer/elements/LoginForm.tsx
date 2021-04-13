import * as React from 'react';
import { NamedTextBox, TextBox } from './TextBox';

export default class LoginForm extends React.Component {
  handleSubmit(ev: any) {
  
  }
  
  render() {
    return (
      <div
        style={{
          backgroundColor: '#292b2e',
          borderRadius: '16px',
        }}
        className="fill"
      >
        <form>
          <div style={{
            width: '100%',
            textAlign: 'center',
          }}
          >
            <div style={{ display: 'flex', flex: '1 1 auto' }}>
              <div
                className="mainLoginContainer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  margin: '30px',
                }}
              >
                <div style={{
                  marginBottom: '20px',
                }}
                >
                  <NamedTextBox
                    extraClasses=""
                    name="Server Address"
                  />
                </div>
                <div style={{
                  marginBottom: '20px',
                }}
                >
                  <NamedTextBox
                    extraClasses=""
                    name="Username or Email"
                  />
                </div>
                <div style={{
                  marginBottom: '20px',
                }}
                >
                  <NamedTextBox
                    extraClasses=""
                    name="Password"
                    type="password"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
