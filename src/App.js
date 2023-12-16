// import logo from './logo.svg';
import Header from './components/heading';
import Landing from './components/landing';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
