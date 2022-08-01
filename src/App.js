import logo from './logo.svg';
// import './App.css';
import KeyProps from './components/KeyProps'

function App() {
  return (
    <div className="App">
      <KeyProps 
        generos={['Acción', 'Drama', 'Espionaje', 'Aventura']}
      />
      <KeyProps 
        generos={['Acción', 'Drama', 'Espionaje', 'Aventura']}
      />
      <KeyProps 
        generos={['Acción', 'Drama', 'Espionaje', 'Aventura']}
      />
      <KeyProps 
        generos={['Acción', 'Drama', 'Espionaje', 'Aventura']}
      />
    </div>
  );
}

export default App;
