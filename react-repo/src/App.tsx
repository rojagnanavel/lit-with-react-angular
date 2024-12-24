import "./App.css";
import "my-lit-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <star-rating rating="3" max="5"></star-rating>
        <weather-component city="chennai"></weather-component>
        <progress-ring progress="75" radius="40" color="green"></progress-ring>
      </header>
    </div>
  );
}

export default App;
