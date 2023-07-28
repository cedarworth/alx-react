import logo from './assets/holberton-logo.jpg';
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
      </div>
      <div className="App-footer">
        <p>Copyright (c) 2020 holberton School</p>
      </div>
    </>
  );
}

export default App;
