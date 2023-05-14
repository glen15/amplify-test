import './App.css';

// amplify
import {
  NavBar, ItemCardCollection
} from './ui-components';


function App() {
  return (
    <div className="App">
      <NavBar width="100vx" />
      <ItemCardCollection />
    </div>
  );
}

export default App;
