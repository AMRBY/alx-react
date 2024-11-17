import holberton from "./holberton-logo.jpg";
import {getFullYear, getFooterCopy} from "./utils";
import './App.css';

function App() {
  return (
     <div className="App">
      <div className="App-header">
	<img src={holberton} alt="logo" />
	<h1>School dashboard</h1>
      </div>
     <hr/>
     <div className="App-body">
	<p>
	  Login to access the full dashboard
	  <label htmlFor="email">email</label>
	  <input type="email" name="email"></input>
	  <label htmlFor="password">password</label>
	  <input type="password" name="password"></input>
	  <button>OK</button>
	</p>
     </div>
     <hr/>
      <div className="App-footer">
	<p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
     </div>
  );
}

export default App;
