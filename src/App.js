import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter   ,  Route, Routes } from "react-router-dom";
import SearchBooks from './components/books/SearchBooks';
import AddBooks from './components/books/AddBooks';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={  <AddBooks/>} />
          <Route path="/search" element={ <SearchBooks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
