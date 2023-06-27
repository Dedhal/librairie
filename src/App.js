import logo from './logo.svg';
import Formulaire from './components/Formulaire';
import Liste from './components/Liste';
import Edit from './components/Edit';

import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">

        <Link to="/">Accueil</Link>
          <Link to="/ajouter">Ajouter un Livre</Link>
          {/*<Link to="/edit">Editer un livre</Link>*/}


          <Routes>
              <Route path="/" element={<Liste />} />
              <Route path="/ajouter" element={<Formulaire />} />
              <Route path="/edit/:id" element={<Edit />} />
              {/*<Route path="/edit" element={<Edition />} />*/}

          </Routes>
    </div>
  );
}

export default App;
