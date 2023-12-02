import './App.css';
import Home from './Test3/Home';
import Form from './Com/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Test3/Cart';
import storeCart from './Test3/StoreCart';
import { Provider } from 'react-redux';
import mystore from './Com/Store';
import Main from './Com/Main'
import Movies from './MovieApi/Movies';


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={mystore} >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Form />} />
            <Route path="/form/:item" element={<Form />} />
          </Routes>
        </Provider>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Provider store={storeCart}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter> */}
      {/* <Movies /> */}
    </>
  );
}

export default App;
