import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import Traducciones from './Screens/Traducciones';
import Abreviaturas from './Screens/Abreviaturas';
import Patrones from './Screens/Patrones';



function App() {
  return (
    <div className="App">
      <Home/>
      <Traducciones/>
      <Patrones/>
      <Abreviaturas/>
    </div>
  );
}

export default App;
