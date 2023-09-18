import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={ <Header /> } />
    </Routes>
    </>
  );
}

export default App;
