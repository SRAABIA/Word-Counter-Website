import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer.js';
function App() {
  return (
    <>
      <Navbar title='Word Counter' />
      <div className="container my-3">
        <TextForm />
      </div>
      <Footer />
    </>);
}

export default App;
