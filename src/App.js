import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import EmptyMain from './components/EmptyMain';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <Header />  
      {/* <EmptyMain /> */}
    <Main/>

    </div>
  );
}

export default App;
