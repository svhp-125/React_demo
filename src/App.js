import './App.css';
// import { ColorRange } from './components/ColorRange';
import {Counter} from './components/Counter';
import Login  from './components/Login'
import {Color} from './components/Color'
// import { Register } from './components/Register';
import { SignUp } from './components/SignUp';


function App() {
  return (
    <div className="App">
      <div className="p-5 bg-primary text-center">
        <h1 className="text-white">Welcome to Home page</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          {/* <Maths /> */}
          <Color />
          {/* <ColorRange /> */}
        </div>
        <div className="col-md-4">
          <Login title="Login page" />
          {/* <Register /> */}
        </div>
        <div className="col-md-4">
          {/* <Counter heading="Counter ... " /> */}
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;