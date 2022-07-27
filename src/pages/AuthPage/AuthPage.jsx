import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}

    <div className="signUpButton" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'SIGN UP' : 'LOG IN'}
    </div>
    </main>
  );
}