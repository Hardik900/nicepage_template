import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Page404 from './Page404';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
