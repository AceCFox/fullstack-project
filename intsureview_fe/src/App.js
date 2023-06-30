import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
        <Form/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
