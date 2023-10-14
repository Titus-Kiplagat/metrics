import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoins } from './redux/coinsSlice';
import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
