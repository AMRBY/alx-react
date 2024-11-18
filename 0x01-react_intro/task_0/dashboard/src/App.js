import holberton from "./holberton-logo.jpg";
import {getFullYear, getFooterCopy} from "./utils";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
	      <img className="holberton-logo" src={holberton} alt="logo" />
	      <h1 className="dashboard">School dashboard</h1>
      </div>
    
      <div className="App-body">
	      <p>Login to access the full dashboard</p>
        <br/>
	      <label htmlFor="email">email</label>
	      <input type="email" id="email"></input>
	      <label htmlFor="password">password</label>
	      <input type="password" id="password"></input>
	      <button>OK</button>
      </div>
      
      <div className="App-footer">
	      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
