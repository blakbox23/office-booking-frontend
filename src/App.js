import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './redux/items/items';
import Reserve from './components/Rerserve';
import DeleteListItems from './components/DeleteListItems';
import Item from './components/Item';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Item />} />
        <Route path="/deleteList" element={<DeleteListItems />} />
        <Route path="/:username/reservation" element={<Reserve />} />
        <Route path="/details/:username/reservation" element={<Reserve details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
