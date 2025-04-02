import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/index.tsx";
import {TypeOfButton} from "./components/button/types.ts"

function App() {
  return (
    <div className="App">
      <Button text={'Label'} type={TypeOfButton.primary}/>
    </div>
  );
}

export default App;
