import logo from './logo.svg';
import Formulaire from './components/Formulaire';
import Liste from './components/Liste';
import Edit from './components/Edit';

import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">

        <Link to="/" className="btn btn-primary">Accueil</Link>
        <Link to="/ajouter" className="btn btn-primary">Ajouter un Livre</Link>


          <Routes>
              <Route path="/" element={<Liste />} />
              <Route path="/ajouter" element={<Formulaire />} />
              <Route path="/edit/:id" element={<Edit />} />

          </Routes>
    </div>
  );
}

export default App;
