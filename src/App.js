import './App.css';
import Home from './Test3/Home';
import Form from './Com/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Test3/Cart';
import storeCart from './Test3/StoreCart';
import { Provider } from 'react-redux';


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Provider store={storeCart}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>

    </>
  );
}

export default App;
