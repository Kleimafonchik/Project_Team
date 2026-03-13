import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.jsx';
import Cases from './components/Cases/Cases.jsx';
import OpenCase from './components/Cases/OpenCase.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Profile from './components/Profile/Profile.jsx';
import ItemStories from './components/ItemStories/ItemStories.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="backgroundLayer">
        <ItemStories />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/open-case/:caseName" element={<OpenCase />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
