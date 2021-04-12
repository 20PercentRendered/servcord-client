/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import LoginForm from '../elements/LoginForm';

// https://discord.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg
export default class Login extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('https://discord.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          display: 'grid',
          placeItems: 'center',
        }}
        className="fill"
      >
        <div className="loginContainer">
          <LoginForm />
        </div>
      </div>
    );
  }
}