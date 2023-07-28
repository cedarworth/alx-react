import logo from './assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

import './App.css';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={200} height={200} />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='form'>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright (c) {getFullYear()} {getFooterCopy()}</p>
      </div>
    </>
  );
}

export default App;
