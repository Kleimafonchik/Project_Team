import './App.css'
import Header from "./components/Header/Header";
import HomePage from './components/HomePage/HomePage.jsx';
function App() {

  return (
    <>
      <Header />
      <div className="backgraundlayer">
        <HomePage />
      </div>
    </>
  )
}

export default App
