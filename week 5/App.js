import logo from './logo.svg';
import './App.css';
import GreetingElement from './myGreetingapp';
import GreetingElementwithProp from'./myGreetingProps';
function App() {
  var element1=<h1>
    This is simple react JSX.
  </h1>;
  const myelement =<h1>React is {5+5}times better with JSX</h1>;
  const Secondelement = <input type="text" />;
  return (
    <div className="App">
      <GreetingElement /> 
<GreetingElementwithProp msg=" Hi It's Monday" />

    </div>
  );
}

export default App;
