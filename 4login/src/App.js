import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index.js'; // Import actions

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(actions.login()); // Dispatch login action
  };

  const handleLogout = () => {
    dispatch(actions.logout()); // Dispatch logout action
  };

  return (
    <div className="container">
      <h1>Login Status</h1>
      <h2>{isLoggedIn ? 'User is logged in' : 'User is not logged in'}</h2>
      <button onClick={handleLogin} disabled={isLoggedIn}>
        Login
      </button>
      <button onClick={handleLogout} disabled={!isLoggedIn}>
        Logout
      </button>
    </div>
  );
}

export default App;
