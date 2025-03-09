import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './component/navbar';
import { Routing } from './component/routing';
import { Provider } from 'react-redux';
import { mystore } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={mystore} >

        <BrowserRouter>

          <Navbar></Navbar>
          <div className='container'>
            <Routing></Routing>
          </div>
        </BrowserRouter>


      </Provider>
    </div>
  );
}

export default App;
