import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Saved from '../../pages/Saved';
import Header from '../header';
import './style.scss';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/saved" element={<Saved/>} />
      </Routes>
    </div>
  );
}

export default App;
