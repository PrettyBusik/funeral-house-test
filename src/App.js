
import './App.css';
import {Button} from "./components/button/index.tsx";
import {TypeOfButton} from "./components/button/types.ts"
import {Input} from "./components/input/index.tsx";

function App() {
  return (
    <div className="App">
      <Button text={'Label'} type={TypeOfButton.primary}/>
        <div style={{'margin':'50px'}}></div>
        <Input businessEntity='Partnership' type={[]}/>
    </div>
  );
}

export default App;
