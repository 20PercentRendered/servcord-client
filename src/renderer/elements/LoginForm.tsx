import * as React from 'react';
import { NamedTextBox, TextBox } from './TextBox';

export default class LoginForm extends React.Component {
  handleSubmit(ev: any) {
  
  }
  
  render() {
    return (
      <div
        style={{
          backgroundColor: '#1c1c1c',
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
                    onChange={((ev) => { 
                      console.log(ev.target.innerHTML);
                    })}
                    name="Server Address"
                  />
                </div>
                <div style={{
                  marginBottom: '20px',
                }}
                >
                  <NamedTextBox
                    onChange={((ev) => { 
                      console.log(ev.target.innerHTML);
                    })}
                    name="Username or Email"
                  />
                </div>
                <div style={{
                  marginBottom: '20px',
                }}
                >
                  <NamedTextBox
                    onChange={((ev) => { 
                      console.log(ev.target.innerHTML);
                    })}
                    name="Password"
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
