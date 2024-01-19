import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Shop from './TEST/Shop';
import testStore from './TEST/testStore';
import Cart from './TEST/Cart';
import Shop from './TEST/Shop';


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={testStore}>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
